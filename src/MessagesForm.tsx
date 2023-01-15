import React from 'react';
import { Paper } from "@mui/material";
import './App.css';
import {MessageFormProps} from "./types";

const MessageForm = (props : MessageFormProps):JSX.Element => {
    const {messageList, username} = props;
    return (
        <Paper >
            {messageList?.map((item:any,index:number) => (
                <div key={index} className={item.author === username ? "myMessages" : "guestMessage"}>
                    <h3>{item.message}</h3>
                    <p>{item.author} {item.date}</p>
                </div>
            ))}
        </Paper>
    );
}

export default MessageForm;
