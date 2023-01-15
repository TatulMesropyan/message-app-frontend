import React, {ChangeEvent, MouseEvent, SetStateAction, useState} from 'react';
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import './App.css';
import {JoinChatProps} from "./types";

// const JoinChat = (socket:any,setUsername:(React.Dispatch<SetStateAction<string>>),username:string,roomID:number,setRoomID:React.Dispatch<SetStateAction<number>>):JSX.Element => {
const JoinChat = (props:JoinChatProps):JSX.Element => {
    const {socket, setUsername, username, roomID, setRoomID} = props;
    const navigate = useNavigate();

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    };
    const handleRoomChange = (event: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setRoomID(event.target.value)
    };

    const handleJoin = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        roomID && username && socket.emit('join_room',roomID);
        navigate('/message')
    }
    return (
    <div className='joinChatWindow'>
        <div className='joinChat'>
            <TextField onChange={handleUsernameChange} value={username} placeholder="Enter your username..." fullWidth/>
            <TextField onChange={handleRoomChange} value={roomID} placeholder="Enter your Room ID..." fullWidth/>
            <Button onClick={handleJoin}>Join</Button>
        </div>
    </div>
    )
}
export default JoinChat;
