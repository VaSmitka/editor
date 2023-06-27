// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  userHasCourseDataValidator,
  userHasCoursePatchValidator,
  userHasCourseQueryValidator,
  userHasCourseResolver,
  userHasCourseExternalResolver,
  userHasCourseDataResolver,
  userHasCoursePatchResolver,
  userHasCourseQueryResolver
} from './users.schema'

import type { Application } from '../../../declarations'
import { UserHasCourseService, getOptions } from './users.class'

export const userHasCoursePath = 'course/users'
export const userHasCourseMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export * from './users.class'
export * from './users.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const userHasCourse = (app: Application) => {
  // Register our service on the Feathers application
  app.use(userHasCoursePath, new UserHasCourseService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: userHasCourseMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(userHasCoursePath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(userHasCourseExternalResolver),
        schemaHooks.resolveResult(userHasCourseResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(userHasCourseQueryValidator),
        schemaHooks.resolveQuery(userHasCourseQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(userHasCourseDataValidator),
        schemaHooks.resolveData(userHasCourseDataResolver)
      ],
      patch: [
        schemaHooks.validateData(userHasCoursePatchValidator),
        schemaHooks.resolveData(userHasCoursePatchResolver)
      ],
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
declare module '../../../declarations' {
  interface ServiceTypes {
    [userHasCoursePath]: UserHasCourseService
  }
}
