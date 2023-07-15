// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../../declarations'
import type { UserHasLesson, UserHasLessonData, UserHasLessonPatch, UserHasLessonQuery } from './users.schema'
import { ExerciseStudentProressEnum } from '../../../utils/consts'

export type { UserHasLesson, UserHasLessonData, UserHasLessonPatch, UserHasLessonQuery }

export type UserHasLessonParams = KnexAdapterParams<UserHasLessonQuery>

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class UserHasLessonService<ServiceParams extends Params = UserHasLessonParams> extends KnexService<
  UserHasLesson,
  UserHasLessonData,
  UserHasLessonParams,
  UserHasLessonPatch
> {
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
        .where({ student_id: query.student_id })
    } else {
      response.data = await this.Model.from('lesson-users')
    }
    return response
  }
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'lesson-users'
  }
}
