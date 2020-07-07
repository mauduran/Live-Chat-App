import React from 'react';
import './Messages.css';
import Conversations from '../../components/Messages/Conversations/Conversations';

export default function Messages() {
    return (
        <div className="messagesContainer">
            <Conversations/>
        </div>
    )
}
