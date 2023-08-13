// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type {
  Notification,
  NotificationData,
  NotificationPatch,
  NotificationQuery
} from './notification.schema'

export type { Notification, NotificationData, NotificationPatch, NotificationQuery }

export interface NotificationParams extends KnexAdapterParams<NotificationQuery> {}

export enum MailTypes {
  STUDENT_CREATED='STUDENT_CREATED',
  TASK_DONE='TASK_DONE'
}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class NotificationService<ServiceParams extends Params = NotificationParams> extends KnexService<
  Notification,
  NotificationData,
  NotificationParams,
  NotificationPatch
> {
  transport: any;

  constructor(data: any) {
    super(data)
    this.transport = data.transport;
  }
  
  async create(data: any, params: Params): Promise<any> {

    const user = await this.Model.from('users').where({ id: data.toId })
    
    require('dotenv').config();

    const message:any = {
      from: `info@${process.env.domain}`,
      to: user[0].email,
      template: data.type
    }

    if (data.type === MailTypes.STUDENT_CREATED) {
      message.subject = 'Vzdělávací platforma - Vítej u Nás!'
      message.context ={
        loginUrl: `${process.env.domain}/auth/login`
      }
    }
    if (data.type === MailTypes.TASK_DONE) {
      const lesson = await this.Model.from('lessons').where({ id: data.lesson_id })

      message.subject = `Vzdělávací platforma - Uživatel ${user[0].firstName} ${user[0].lastName} dokončil cvičení ${lesson[0].name}`
      message.context = {
        studentName: lesson[0].name,
        lessonName: `${user[0].firsName} ${user[0].lastName}`,
        loginUrl: `${process.env.domain}/student/${user[0].id}/lesson/${lesson[0].id}`
    }
    }

    this.transport.sendMail(message, (err: any, info: any) => {
      if (err) {
        console.log('error', err)
      } 

      this.Model.insert({
        toId: data.toId,
        lesson_id: data.lesson_id,
        type: data.type,
        error: err?.response
      }).into('notification')
    });

    return { status: 'OK' }
  }
}

export const getOptions = (app: Application): KnexAdapterOptions & {transport: any} => {
  return {
    paginate: app.get('paginate'),
    Model: (process.env.NODE_ENV === 'dev') ? app.get('sqliteClient') : app.get('postgresqlClient'),
    name: 'notification',
    transport: app.get('mailerClient')
  }
}
