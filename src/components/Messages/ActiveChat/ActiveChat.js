import React, { useState, useEffect } from 'react'
import ActiveChatMessages from '../ActiveChatMessages/ActiveChatMessages'
import ConversationBar from '../ConversationBar/ConversationBar';
import ActiveChatInfo from '../ActiveChatInfo/ActiveChatInfo';
import ActiveChatInput from '../ActiveChatInput/ActiveChatInput';
import './ActiveChat.css'


export default function ActiveChat({ activeConversation, user, socket, newConversation, setNewConversation, setActiveConversation }) {
    const [messages, setmessages] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/messages/${activeConversation.conversationId}`)
            .then(res => res.json())
            .then(msgs => setmessages(msgs))
            .catch(err => console.log(err));

    }, [activeConversation]);

    return (
        <div id='ActiveConversation' >

            <div style={{ display: 'flex', height: "calc(100% - 50px)" }}>
                <div style={{ width: "75%", height: "100%" }}>
                    <ConversationBar activeConversation={activeConversation} newConversation={newConversation} user={user} />
                    <ActiveChatMessages activeConversation={activeConversation} messages={messages} user={user} socket={socket} />
                    <ActiveChatInput activeConversation={activeConversation} socket={socket} />
                </div>
                <ActiveChatInfo activeConversation={activeConversation} user={user} socket={socket} />
            </div>

        </div>
    )
}

