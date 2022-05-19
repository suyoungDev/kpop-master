interface ServerToClientEvents {
  updateChat: (message: string) => void;
  newBuddy: (id: string, callback: (text: string) => void) => void;
  hello: (id: string) => void;
}

interface ClientToServerEvents {
  hello: (id: string) => void;
  chat: (message: string) => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  username: string;
}
