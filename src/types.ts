import React, {SetStateAction} from "react";

export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

export interface ClientToServerEvents {
    hello: () => void;
}

export interface InterServerEvents {
    ping: () => void;
}

export interface SocketData {
    username: string;
    roomID: number;
}

export interface SendMessageProps {
    socket: any;
    username: string|null;
    room: number|null;
    messageList: Array<messageDataTypes>
}

export interface messageDataTypes {
    room: string;
    author: string;
    message: string;
    time: Date;
}

export interface JoinChatProps {
    socket: any;
    setUsername: React.Dispatch<SetStateAction<string|null>>;
    username: string|null;
    roomID: number|null;
    setRoomID: React.Dispatch<SetStateAction<number|null>>;
}

export interface MessageFormProps {
    messageList: any;
    username: string | null;
}