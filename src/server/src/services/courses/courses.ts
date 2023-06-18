// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  coursesDataValidator,
  coursesPatchValidator,
  coursesQueryValidator,
  coursesResolver,
  coursesExternalResolver,
  coursesDataResolver,
  coursesPatchResolver,
  coursesQueryResolver
} from './courses.schema'

import type { Application } from '../../declarations'
import { CoursesService, getOptions } from './courses.class'

export const coursesPath = 'courses'
export const coursesMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export * from './courses.class'
export * from './courses.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const courses = (app: Application) => {
  // Register our service on the Feathers application
  app.use(coursesPath, new CoursesService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: coursesMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(coursesPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(coursesExternalResolver),
        schemaHooks.resolveResult(coursesResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(coursesQueryValidator), schemaHooks.resolveQuery(coursesQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(coursesDataValidator), schemaHooks.resolveData(coursesDataResolver)],
      patch: [schemaHooks.validateData(coursesPatchValidator), schemaHooks.resolveData(coursesPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [coursesPath]: CoursesService
  }
}
