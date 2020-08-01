import React from 'react';
import './Messages.css';
import Conversations from '../../components/Messages/Conversations/Conversations';

export default function Messages({ user, setuser, socket, setincomingMessage, incomingMessage }) {
    return (
        <div className="messagesContainer">
            <Conversations
                user={user}
                socket={socket}
                setincomingMessage={setincomingMessage}
                incomingMessage={incomingMessage} />
        </div>
    )
}
