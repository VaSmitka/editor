// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Courses, CoursesData, CoursesPatch, CoursesQuery } from './courses.schema'
import knex from 'knex'
import { Lesson } from '../lessons/lessons.class'

export type { Courses, CoursesData, CoursesPatch, CoursesQuery }

export interface CoursesCreateData {
  id: number,
  name: string,
  description: string,
  creator: number,
  template: number,
  lessons: Lesson[]
}
export interface CoursesParams extends KnexAdapterParams<CoursesQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class CoursesService<ServiceParams extends Params = CoursesParams> extends KnexService<
  Courses,
  CoursesData,
  CoursesParams,
  CoursesPatch
> {
  async create(data: any, params: Params) {
    const {lessons, ...course} = data;
    let resData = course;

    try {
      await knex('Featherjs').transaction(async trx => {
        const ids = await trx.insert(course, 'id').into('courses')
    
        resData.id = ids[0].id;
        lessons.forEach(((elm: { course_id: number, creator: number }) => {
          elm.course_id = resData.id;
          elm.creator = course.creator;
        }));
        resData.lessons = await trx('Featherjs').insert(lessons, ['id', 'name', 'description', 'creator', 'course_id']).into('lessons');

        console.log('data', resData)
      })
    } catch (error) {
      // If we get here, that means that neither the 'Old Books' catalogues insert,
      // nor any of the books inserts will have taken place.
      console.error(error);
    }

    return resData;
  }

  async find(params: Params) {
    console.log(params);
    return [];
  }
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'courses'
  }
}
