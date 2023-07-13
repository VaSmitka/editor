// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  userHasLessonDataValidator,
  userHasLessonPatchValidator,
  userHasLessonQueryValidator,
  userHasLessonResolver,
  userHasLessonExternalResolver,
  userHasLessonDataResolver,
  userHasLessonPatchResolver,
  userHasLessonQueryResolver
} from './users.schema'

import type { Application } from '../../../declarations'
import { UserHasLessonService, getOptions } from './users.class'

export const userHasLessonPath = 'lesson/users'
export const userHasLessonMethods = ['find', 'get', 'create', 'patch', 'remove', 'update'] as const

export * from './users.class'
export * from './users.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const userHasLesson = (app: Application) => {
  // Register our service on the Feathers application
  app.use(userHasLessonPath, new UserHasLessonService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: userHasLessonMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(userHasLessonPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(userHasLessonExternalResolver),
        schemaHooks.resolveResult(userHasLessonResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(userHasLessonQueryValidator),
        schemaHooks.resolveQuery(userHasLessonQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(userHasLessonDataValidator),
        schemaHooks.resolveData(userHasLessonDataResolver)
      ],
      patch: [
        schemaHooks.validateData(userHasLessonPatchValidator),
        schemaHooks.resolveData(userHasLessonPatchResolver)
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
    [userHasLessonPath]: UserHasLessonService
  }
}
