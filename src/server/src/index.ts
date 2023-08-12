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

  chat.on('connection', function connection(ws, request) {
    // @ts-ignore
    ws.id = request.url;

    ws.on('error', console.error);

    ws.on('message', function message(data, isBinary) {
      chat.clients.forEach(function each(client) {
        // @ts-ignore
        if (client.readyState === 1 && request.url === client.id) {
          client.send(data, { binary: isBinary });
        }
      });
    });
  });
  
  editor.on('connection', function connection(ws) {
    shareDBBackend.listen(new WebSocketJSONStream(ws))

    ws.on('error', console.error);
  });
  
  server.on('upgrade', function upgrade(request, socket, head) {
    const pathname  = request.url!;

    if (pathname.includes('/chat')) {
      chat.handleUpgrade(request, socket, head, function done(ws) {
        chat.emit('connection', ws, request);
      });
    } else if (pathname.includes('/editor')) {
      editor.handleUpgrade(request, socket, head, function done(ws) {
        editor.emit('connection', ws, request);
      });
    } else {
      socket.destroy();
    }
  });
})
