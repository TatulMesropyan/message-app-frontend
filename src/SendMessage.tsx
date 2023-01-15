import React, { useState,ChangeEvent, MouseEvent } from 'react';
import {Button, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import './App.css';
import MessageForm from "./MessagesForm";
import {SendMessageProps} from "./types";

const SendMessage = (props: SendMessageProps):JSX.Element => {
    const {socket, username, room,messageList} = props;
    const [text, setText] = useState<string|null>('');

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    };

    const handleButtonClick = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if(text){
            const messageData = {
                roomID: room,
                author: username,
                message: text,
                time: `${new Date(Date.now()).getHours()}:${new Date(Date.now()).getMinutes()}`
                };
            setText('');
            await socket.emit('send_message',messageData);
        }
    }
    return (
        <>
            <MessageForm messageList={messageList} username={username}/>
        <div className='messageSection'>
            <TextField onChange={handleTextChange} value={text} fullWidth/>
            <Button onClick={handleButtonClick}>
                <SendIcon/>
            </Button>
        </div>
        </>
    );
}

export default SendMessage;
