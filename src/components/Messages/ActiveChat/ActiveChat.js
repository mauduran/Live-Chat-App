import React, { useState, useEffect } from 'react'
import ChatMessages from '../ChatMessages/ChatMessages'
import ConversationTitleBar from '../ConversationTitleBar/ConversationTitleBar';
import ConversationInformationBar from '../ConversationInformationBar/ConversationInformationBar';
import ChatMessageInput from '../ChatMessageInput/ChatMessageInput';
import './ActiveChat.css'


export default function ActiveChat({ conversationUpdate, activeConversation, user, socket, setconversationUpdate, setincomingMessage, incomingMessage, conversations }) {
    const [messages, setmessages] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/messages/${activeConversation}`)
            .then(res => res.json())
            .then(msgs => {
                setmessages(msgs);
                setincomingMessage(false);

            })
            .catch(err => console.log(err));

    }, [activeConversation, conversationUpdate, incomingMessage, setincomingMessage]);

    const activeConversationObj = (activeConversation) ? conversations.find(convo => convo.conversationId === activeConversation) : null;


    return (
        <div id='ActiveConversation' >
            {
                (activeConversationObj) ?
                    <div style={{ display: 'flex', height: "100%" }}>
                        <div style={{ width: "75%", height: "calc(100% - 50px)" }}>
                            <ConversationTitleBar activeConversation={activeConversationObj} conversations={conversations} user={user} />
                            <ChatMessages activeConversation={activeConversation} conversations={conversations} messages={messages} user={user} socket={socket} />
                            <ChatMessageInput activeConversation={activeConversation} setconversationUpdate={setconversationUpdate} socket={socket} />
                        </div>
                        <ConversationInformationBar socket={socket} setconversationUpdate={setconversationUpdate} activeConversation={activeConversationObj} user={user} />
                    </div>
                    : null
            }


        </div>
    )
}

