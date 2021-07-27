import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway({ transports: ['websocket'] })
export class WebsocketService {
  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string, @ConnectedSocket() socket) {
    socket.broadcast.emit('message', data);
    console.log(data);
    return data;
  }
}
