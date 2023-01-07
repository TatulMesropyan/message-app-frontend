import React, { useState,ChangeEvent, MouseEvent } from 'react';
import {Button, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import './App.css';

const SendMessage = ():JSX.Element => {
    const [text, setText] = useState('');

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setText(event.target.value)
    };

    const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setText('')
        // Should be post logic
    }
    return (
        <div className='messageSection'>
            <TextField onChange={handleTextChange} value={text} fullWidth/>
            <Button onClick={handleButtonClick}>
                <SendIcon/>
            </Button>
        </div>
    );
}

export default SendMessage;
