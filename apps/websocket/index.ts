import http from 'http';
import { WebSocketServer } from 'ws';
import { prismaclient } from 'db/client';

const server = http.createServer((req, res) => {
  res.writeHead(426, { 'Content-Type': 'text/plain' });
  res.end('Upgrade required: WebSocket connection expected');
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    prismaclient.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString()
      }
    });

    ws.send(message.toString());
  });
});

server.listen(8081, () => {
  console.log('WebSocket server running at http://localhost:8081');
});
