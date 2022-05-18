// export const socketInitializer = async () => {
//   await fetch('/api/socket');
//   socket = io({ autoConnect: false });
//   socket.onAny((event, ...args) => {
//     console.log(event, args);
//   });
//   socket.on('connect', () => {
//     socket.emit('hello', socket.id);
//     socket.on('hello', (id: string) => console.log(id));
//     socket.on(
//       'updateChat',
//       (text: string, callback: (text: string) => void) => {
//         callback(text);
//       }
//     );
//   });
//   socket.on('connect_error', (err) => {
//     if (err.message === 'invalid username') {
//       console.log('invalid username');
//     }
//   });
// };
import { Socket } from 'socket.io-client';

class GameService {
  public async joinGameRoom(socket: Socket, roomId: string): Promise<boolean> {
    return new Promise((rs, rj) => {
      socket.emit('join_game', { roomId });
      socket.on('room_joined', () => rs(true));
      socket.on('room_join_error', ({ error }) => rj(error));
    });
  }

  public async updateGame(socket: Socket, gameMatrix) {
    socket.emit('update_game', { matrix: gameMatrix });
  }

  public async onGameUpdate(socket: Socket, listener: (matrix) => void) {
    socket.on('on_game_update', ({ matrix }) => listener(matrix));
  }

  public async onStartGame(socket: Socket, listener: (options) => void) {
    socket.on('start_game', listener);
  }

  public async gameWin(socket: Socket, message: string) {
    socket.emit('game_win', { message });
  }

  public async onGameWin(socket: Socket, listener: (message: string) => void) {
    socket.on('on_game_win', ({ message }) => listener(message));
  }
}

export default new GameService();
