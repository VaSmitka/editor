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
import { logError } from './hooks/log-error'
import { sqlite } from './sqlite'
import { authentication } from './authentication'
import { services } from './services/index'

import ShareDB from 'sharedb';
import fs from 'fs';
import { computeInitialDocument } from './cooperation/computeInitialDocument';
// This file is the central point where the OT types are imported.
// Localized to one file so it's easy to change it in future.
// @ts-ignore
import OTJSON1Presence from 'sharedb-client-browser/dist/ot-json1-presence-umd.cjs';
const { json1Presence, textUnicode } = OTJSON1Presence;
export { json1Presence, textUnicode };


// The time in milliseconds by which auto-saving is debounced.
const autoSaveDebounceTimeMS = 800;

const initialDocument = computeInitialDocument({
  // Use the current working directory to look for files.
  fullPath: process.cwd() + '/public/studentDirectory',
});

// Register our custom OT type,
// because it does not ship with ShareDB.
ShareDB.types.register(json1Presence.type);

// Use ShareDB over WebSocket
export const shareDBBackend = new ShareDB({
  // Enable presence
  // See https://github.com/share/sharedb/blob/master/examples/rich-text-presence/server.js#L9
  presence: true,
  doNotForwardSendPresenceErrorsToClient: true,
});

// Create the initial "document",
// which is a representation of files on disk.
const shareDBConnection = shareDBBackend.connect();
const shareDBDoc = shareDBConnection.get('documents', '1');
shareDBDoc.create(initialDocument, json1Presence.type.uri);

// The state of the document when files were last auto-saved.
let previousDocument = initialDocument;

// Saves the files that changed.
const save = () => {
  const currentDocument = shareDBDoc.data;

  // Take a look at each file (key) previously and currently.
  const allKeys = Object.keys({ ...currentDocument, ...previousDocument });
  for (const key of allKeys) {
    const previous = previousDocument[key];
    const current = currentDocument[key];

    // Handle changing of text content.
    if (previous.text !== current.text) {
      fs.writeFileSync(`public/studentDirectory/${current.name}`, current.text);
    }
  }
  previousDocument = currentDocument;
};

// Listen for when users modify files.
// Files get written to disk after `autoSaveDebounceTimeMS`
// milliseconds of inactivity.
let timeout: string | number | NodeJS.Timeout | undefined;
shareDBDoc.subscribe(() => {
  shareDBDoc.on('op', (op) => {
    clearTimeout(timeout);
    timeout = setTimeout(save, autoSaveDebounceTimeMS);
  });
});


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
app.configure(authentication)
app.configure(services)

// Configure a middleware for 404s and the error handler
app.use(notFound())
app.use(errorHandler({ logger }))

// Register hooks that run on all service methods
app.hooks({
  around: {
    all: [logError]
  },
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