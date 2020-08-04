import React, { useState, useEffect } from 'react'
import ActiveChatMessages from '../ActiveChatMessages/ActiveChatMessages'
import ConversationBar from '../ConversationBar/ConversationBar';
import ActiveChatInfo from '../ActiveChatInfo/ActiveChatInfo';
import ActiveChatInput from '../ActiveChatInput/ActiveChatInput';
import './ActiveChat.css'


export default function ActiveChat({ conversationUpdate, activeConversation, user, socket, newConversation, setActiveConversation, setconversationUpdate, setincomingMessage, incomingMessage }) {
    const [messages, setmessages] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/messages/${activeConversation.conversationId}`)
            .then(res => res.json())
            .then(msgs => {
                setmessages(msgs);
                setincomingMessage(false);
            
            })
            .catch(err => console.log(err));

    }, [activeConversation, conversationUpdate, incomingMessage, setincomingMessage ]);

    return (
        <div id='ActiveConversation' >

            <div style={{ display: 'flex', height: "100%" }}>
                <div style={{ width: "75%",  height: "calc(100% - 50px)" }}>
                    <ConversationBar activeConversation={activeConversation} newConversation={newConversation} user={user} />
                    <ActiveChatMessages activeConversation={activeConversation} messages={messages} user={user} socket={socket} />
                    <ActiveChatInput activeConversation={activeConversation} setconversationUpdate={setconversationUpdate} socket={socket} />
                </div>
                <ActiveChatInfo socket={socket} setconversationUpdate={setconversationUpdate} activeConversation={activeConversation} setActiveConversation={setActiveConversation} user={user} />
            </div>

        </div>
    )
}

