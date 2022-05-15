declare interface ServerToClientEvents {
  updateChat: (message: string) => void;
  newBuddy: (id: string) => void;
  hello: (id: string) => void;
}

declare interface ClientToServerEvents {
  hello: (id: string) => void;
  chat: (message: string) => void;
}

declare interface InterServerEvents {
  ping: () => void;
}

declare interface SocketData {
  username: string;
}
