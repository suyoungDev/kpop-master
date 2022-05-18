import { Socket, io } from 'socket.io-client';

class SocketService {
  public socket: Socket | null = null;

  public connect(
    url: string,
    username: string
  ): Promise<Socket<ServerToClientEvents, ClientToServerEvents>> {
    return new Promise((response, reject) => {
      fetch(url);
      this.socket = io();

      if (!this.socket) return reject();
      this.socket.auth = { username };

      this.socket.on('connect', () => {
        response(this.socket as Socket);
      });

      this.socket.on('connect_error', (err) => {
        console.log('Connection error: ', err);
        if (err.message === 'invalid username') {
          console.log('invalid username');
        }
        reject(err);
      });
    });
  }
}

export default new SocketService();
