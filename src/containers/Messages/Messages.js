import React from 'react';
import './Messages.css';
import Conversations from '../../components/Messages/Conversations/Conversations';

export default function Messages({ user, setuser, socket }) {
    return (
        <div className="messagesContainer">
            <Conversations user={user} socket={socket}/>
        </div>
    )
}
