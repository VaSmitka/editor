// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html
import { feathers } from '@feathersjs/feathers'
import express, {
  rest,
  json,
  urlencoded,
  cors,
  serveStatic,
  notFound,
  errorHandler
} from '@feathersjs/express'
import configuration from '@feathersjs/configuration'

import type { Application } from './declarations'
import { configurationValidator } from './configuration'
import { logger } from './logger'
import { sqlite } from './sqlite'
import { mailer } from './mailer'
import { authentication } from './authentication'
import { services } from './services/index'

import ShareDB from 'sharedb'
// This file is the central point where the OT types are imported.
// Localized to one file so it's easy to change it in future.
// @ts-ignore
import OTJSON1Presence from 'sharedb-client-browser/dist/ot-json1-presence-umd.cjs'
const { json1Presence, textUnicode } = OTJSON1Presence
export { json1Presence, textUnicode }

// Register our custom OT type,
// because it does not ship with ShareDB.
ShareDB.types.register(json1Presence.type)

// Use ShareDB over WebSocket
export const shareDBBackend = new ShareDB({
  // Enable presence
  // See https://github.com/share/sharedb/blob/master/examples/rich-text-presence/server.js#L9
  presence: true,
  doNotForwardSendPresenceErrorsToClient: true
})

const app: Application = express(feathers())

// Load app configuration
app.configure(configuration(configurationValidator))
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
// Host the public folder
app.use('/', serveStatic(app.get('public')))

// Configure services and real-time functionality
app.configure(rest())
app.configure(sqlite)
app.configure(mailer)
app.configure(authentication)
app.configure(services)

// Configure a middleware for 404s and the error handler
app.use(notFound())
app.use(errorHandler({ logger }))

// Register hooks that run on all service methods
app.hooks({
  around: {},
  before: {},
  after: {},
  error: {}
})
// Register application setup and teardown hooks here
app.hooks({
  setup: [],
  teardown: []
})

export { app }
