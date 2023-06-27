// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../../declarations'
import type { UserHasCourse, UserHasCourseData, UserHasCoursePatch, UserHasCourseQuery } from './users.schema'
import { ExerciseStatus } from '../../../utils/consts'

export type { UserHasCourse, UserHasCourseData, UserHasCoursePatch, UserHasCourseQuery }

export interface UserHasCourseParams extends KnexAdapterParams<UserHasCourseQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class UserHasCourseService<ServiceParams extends Params = UserHasCourseParams> extends KnexService<
  UserHasCourse,
  UserHasCourseData,
  UserHasCourseParams,
  UserHasCoursePatch
> {
  async create(data: any, params: Params): Promise<any> {
    const {course_id, lesson_id, ...user} = data;
    console.log(course_id, lesson_id, user)

    try {
      await this.Model.transaction(async trx => {
        const ids = await trx.insert(user, 'id').into('users')

        await trx.insert({
          status: ExerciseStatus[0],
          student_id: ids[0].id,
          course_id,
        }).into('course-users');

        const lessonsIds = await trx.select('id').from('lessons').where({course_id: course_id});

        for (let id of lessonsIds) {
          await trx.insert({
            status: ExerciseStatus[0],
            student_id: ids[0].id,
            lesson_id: id
          }).into('lesson-users');
        }
      })
    } catch (error) {
      // If we get here, that means that neither the 'Old Books' catalogues insert,
      // nor any of the books inserts will have taken place.
      console.error(error);
    }

    return { status: 'OK'}
  }

  async find({query}: UserHasCourseParams & { paginate: false; }): Promise<any> {
    const response: {data?: any} = {}
    
    if (query?.course_id) {
      response.data = await this.Model.from('course-users').join('users', 'course-users.student_id', '=', 'users.id').where({course_id: query.course_id});
    } else {
      response.data = await this.Model.from('course-users');
    }
    return response;
  }
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'course-users'
  }
}
