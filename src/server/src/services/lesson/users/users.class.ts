// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Id, NullableId, Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../../declarations'
import type { UserHasLesson, UserHasLessonData, UserHasLessonPatch, UserHasLessonQuery } from './users.schema'
import { ExerciseStudentProressEnum } from '../../../utils/consts'
import { MailTypes } from '../../notification/notification.class'

export type { UserHasLesson, UserHasLessonData, UserHasLessonPatch, UserHasLessonQuery }

export type UserHasLessonParams = KnexAdapterParams<UserHasLessonQuery>

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class UserHasLessonService<ServiceParams extends Params = UserHasLessonParams> extends KnexService<
  UserHasLesson,
  UserHasLessonData,
  UserHasLessonParams,
  UserHasLessonPatch
> {
  notificationService: any;

  constructor(data: any) {
    super(data)
    this.notificationService = data.notificationService;
  }

  async create(data: any, params: Params): Promise<any> {
    const { course_id, lesson_id, ...user } = data

    try {
      await this.Model.transaction(async (trx) => {
        const ids = await trx.insert(user, 'id').into('users')
        await trx
          .insert({
            progress: ExerciseStudentProressEnum[0],
            student_id: ids[0].id,
            editable: 0,
            visibility: 1,
            lesson_id
          })
          .into('lesson-users')
      })
    } catch (error) {
      // If we get here, that means that neither the 'Old Books' catalogues insert,
      // nor any of the books inserts will have taken place.
      console.error(error)
    }

    return { status: 'OK' }
  }

  async find({ query }: UserHasLessonParams & { paginate: false }): Promise<any> {
    const response: { data?: any } = {}

    if (query?.lesson_id) {
      response.data = await this.Model.from('lesson-users')
        .join('users', 'lesson-users.student_id', '=', 'users.id')
        .where({ lesson_id: query.lesson_id })
    } else if (query?.student_id) { 
      response.data = await this.Model.from('lesson-users')
        .join('lessons', 'lesson-users.lesson_id', '=', 'lessons.id')
        .where({ student_id: query.student_id, visibility: 1 })
    } else {
      response.data = await this.Model.from('lesson-users')
    }
    return response
  }

  async patch(id: Id, data: Partial<{ id: number; progress: string; editable: number; visibility: number; student_id: number; lesson_id: number }>, params?: UserHasLessonParams | undefined): Promise<{ id: number; progress: string; editable: number; visibility: number; student_id: number; lesson_id: number }>
  async patch(id: null, data: Partial<{ id: number; progress: string; editable: number; visibility: number; student_id: number; lesson_id: number }>, params?: UserHasLessonParams | undefined): Promise<{ id: number; progress: string; editable: number; visibility: number; student_id: number; lesson_id: number }[]>
  async patch(id: NullableId, data: Partial<{ id: number; progress: string; editable: number; visibility: number; student_id: number; lesson_id: number }>, params?: UserHasLessonParams | undefined): Promise<{ id: number; progress: string; editable: number; visibility: number; student_id: number; lesson_id: number } | { id: number; progress: string; editable: number; visibility: number; student_id: number; lesson_id: number }[]>
  async patch(id: unknown, data: any, params?: any): Promise<any> {
    const toUpdate: any = {}

    if (data.editable === 0 || data.editable === 1) toUpdate.editable = data.editable
    if (data.visibility === 0 || data.visibility === 1) toUpdate.visibility = data.visibility
    if (data.progress) toUpdate.progress = data.progress

    const updatedItem = await this.Model
      .update(toUpdate, ['id', 'progress', 'editable', 'visibility', 'student_id', 'lesson_id'])
      .where({ student_id: data.student_id, lesson_id: data.lesson_id })
      .into('lesson-users')
    
     if (data.progress && data.progress === 'FINISHED') {
      const creators = await this.Model.select('creator').from('lessons').where({id: data.lesson_id});
      const creator = creators[0].creator

      await this.notificationService.create({toId: creator, lesson_id: data.lesson_id, type: MailTypes.TASK_DONE}, {});
     }

    return updatedItem
  }
}

export const getOptions = (app: Application): KnexAdapterOptions & {notificationService: any} => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    notificationService: app.service('notification'),
    name: 'lesson-users'
  }
}
