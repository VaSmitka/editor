// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Courses, CoursesData, CoursesPatch, CoursesQuery } from './courses.schema'

export type { Courses, CoursesData, CoursesPatch, CoursesQuery }

export interface CoursesParams extends KnexAdapterParams<CoursesQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class CoursesService<ServiceParams extends Params = CoursesParams> extends KnexService<
  Courses,
  CoursesData,
  CoursesParams,
  CoursesPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'courses'
  }
}
