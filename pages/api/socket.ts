import { Server } from 'socket.io';

const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');

    const io = new Server<
      ClientToServerEvents,
      ServerToClientEvents,
      InterServerEvents,
      SocketData
    >(res.socket.server);
    res.socket.server.io = io;

    io.use((socket, next) => {
      const username = socket.handshake.auth.username;

      if (!username) {
        return next(new Error('invalid username'));
      }

      socket.data.username = username;
      next();
    });

    io.on('connection', (socket) => {
      socket.on('chat', (msg: string) => {
        socket.emit('updateChat', msg);
      });

      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });
  }
  res.end();
};

export default SocketHandler;
