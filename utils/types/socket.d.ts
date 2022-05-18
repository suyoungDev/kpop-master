import { StringSchemaDefinition } from 'mongoose';

declare interface ServerToClientEvents {
  updateChat: (message: string, callback: (text: string) => void) => void;
  newBuddy: (
    id: StringSchemaDefinition,
    callback: (text: string) => void
  ) => void;
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
