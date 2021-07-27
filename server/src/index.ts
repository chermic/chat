import ws from 'ws';
import http from 'http';

const server = http.createServer((req, res) => {
  console.log(req);
  res.end('hello');
});

const clients: ws[] = [];
const wsServer = new ws.Server({ server });
wsServer.on('connection', (socket, req) => {
  console.log(`client connected`);
  clients.push(socket);

  socket.on('message', (data) => {
    console.log(data.toString());
    clients.forEach((client) => {
      client.send(data);
    });
  });
});

server.listen(3000, () => {
  console.log('server is listening on http://localhost:3000');
});
