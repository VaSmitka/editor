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

  const chat = new WebSocketServer({ noServer: true });
  const editor = new WebSocketServer({ noServer: true });

  chat.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data, isBinary) {
      chat.clients.forEach(function each(client) {
        if (client.readyState === 1) {
          client.send(data, { binary: isBinary });
        }
      });
    });
  });
  
  editor.on('connection', function connection(ws) {
    shareDBBackend.listen(new WebSocketJSONStream(ws))
  });
  
  server.on('upgrade', function upgrade(request, socket, head) {
    const pathname  = request.url!;

    if (pathname === '/chat') {
      chat.handleUpgrade(request, socket, head, function done(ws) {
        chat.emit('connection', ws, request);
      });
    } else if (pathname === '/editor') {
      editor.handleUpgrade(request, socket, head, function done(ws) {
        editor.emit('connection', ws, request);
      });
    } else {
      socket.destroy();
    }
  });
})
