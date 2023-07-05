import { app, shareDBBackend } from './app'
import { logger } from './logger'
import { WebSocketServer } from 'ws'
// @ts-ignore
import WebSocketJSONStream from '@teamwork/websocket-json-stream'

const port = app.get('port')
const host = app.get('host')

process.on('unhandledRejection', (reason) => logger.error('Unhandled Rejection %O', reason))

const server = app.listen(port).then((server) => {
  logger.info(`Feathers app listening on http://${host}:${port}`)

  const wss = new WebSocketServer({ server })
  wss.on('connection', (ws) => {
    shareDBBackend.listen(new WebSocketJSONStream(ws))
  })
})
