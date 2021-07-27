import socketIo, { Socket } from 'socket.io-client';

export class WS {
  public ws: Socket;

  private static instance: WS | null = null;

  private constructor() {
    this.ws = socketIo('ws://localhost:3000', { transports: ['websocket'] });
  }

  public static getInstance(): WS {
    if (this.instance === null) {
      this.instance = new WS();
    }

    return this.instance;
  }

  public sendMessage(data: string): void {
    this.ws.emit('message', data);
  }

  public on(event: string, cb: (ev: any) => void): any {
    this.ws.on(event, cb);
  }
}
