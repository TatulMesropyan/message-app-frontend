import React from 'react';
import { Paper } from "@mui/material";
import './App.css';
import {MessageFormProps} from "./types";

const MessageForm = (props : MessageFormProps):JSX.Element => {
    const {messageList, username} = props;
    return (
        <Paper >
            {messageList?.map((item:any,index:number) => (
                item.author === username ?(
                <div className="myMessages">
                    <div key={index}>{item.message}</div>
                    <div>{item.author} {item.date}</div>
                </div>
                ) :
                ( <div className="guestMessage">
                    <div key={index}>{item.message}</div>
                    <div>{item.author} {item.date}</div>
                    </div>)
            ))}
        </Paper>
    );
}

export default MessageForm;
