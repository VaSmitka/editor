// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import type { Application } from '../../../declarations'
import { LessenTaskService, getOptions } from './task.class'

export const lessenTaskPath = 'lesson/task'
export const lessenTaskMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export * from './task.class'

// A configure function that registers the service and its hooks via `app.configure`
export const lessenTask = (app: Application) => {
  // Register our service on the Feathers application
  app.use(lessenTaskPath, new LessenTaskService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: lessenTaskMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(lessenTaskPath).hooks({
    around: {
      all: [authenticate('jwt')]
    },
    before: {
      all: [],
      find: [],
      get: [],
      create: [],
      patch: [],
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
    [lessenTaskPath]: LessenTaskService
  }
}
