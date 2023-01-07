import React from 'react';
import SendMessage from "./SendMessage";
import './App.css';
import MessageForm from "./MessagesForm";

function App() {
  return (
  <div className='mainWrapper'>
       <MessageForm/>
       <SendMessage/>
  </div>
  );
}

export default App;
