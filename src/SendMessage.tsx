import {useState} from 'react';
import {Button} from "@mui/material";
import React, { ChangeEvent } from 'react';
import SendIcon from '@mui/icons-material/Send';

const SendMessage = ():JSX.Element => {
    const [text, setText] = useState('');

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setText(event.target.value)
    };
    return (
        <div>
            <input onChange={inputHandler} value={text}/>
            <Button>
                <SendIcon/>
            </Button>
        </div>
    );
}

export default SendMessage;
