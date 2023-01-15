import React, {useState} from 'react';
import {io,Socket} from 'socket.io-client';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import JoinChat from "./JoinChat";
import {ServerToClientEvents,ClientToServerEvents} from './types'
import SendMessage from "./SendMessage";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://localhost:8080');

function App() {
    const [username, setUsername] = useState<string|null>('');
    const [roomID, setRoomID] = useState<number|null>(null);

    return (
  <div className='mainWrapper'>
      <Routes>
      <Route
            path={'/'}
             element={
          <JoinChat
              socket={socket}
              setUsername={setUsername}
              username={username}
              roomID={roomID}
              setRoomID={setRoomID}/>}
          />
       <Route path={'/message'} element={<SendMessage socket={socket}  username={username} room={roomID}/>}/>
      </Routes>
  </div>
  );
}

export default App;
