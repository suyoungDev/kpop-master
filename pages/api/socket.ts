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

    io.on('connection', (socket) => {
      socket.data.username = 'alice';
      socket.broadcast.emit('hello', 'world');

      socket.on('chat', (msg) => {
        socket.emit('updateChat', msg);
      });

      socket.on('hello', () => {
        socket.broadcast.emit('newBuddy', socket.id);
      });
    });
  }
  res.end();
};

export default SocketHandler;
