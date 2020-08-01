import React, { useState, useEffect } from 'react';
import './Conversations.css';
import ChatActionBar from '../ChatActionBar/ChatActionBar';
import ConversationCard from '../ConversationCard/ConversationCard';
import ActiveChat from '../ActiveChat/ActiveChat';
import CreateConvoBar from '../CreateConvoBar/CreateConvoBar';

export default function Conversations({ user, socket, setincomingMessage, incomingMessage }) {

    const [activeConversation, setActiveConversation] = useState(null);
    const [searchConversationInput, setsearchConversationInput] = useState('');
    const [conversations, setconversations] = useState([]);
    const [newConversation, setNewConversation] = useState(false);
    const [conversationUpdate, setconversationUpdate] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:3001/conversations/${user.username}`)
            .then(res => res.json())
            .then(convs => {
                setconversations(convs)
                console.log(user);
            })
            .catch(err => console.log(err));

        setconversationUpdate(false);

    }, [user, conversationUpdate, incomingMessage])

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex' }}>
            <section id='ConversationsBar'>
                <ChatActionBar searchConversationInput={searchConversationInput} setsearchConversationInput={setsearchConversationInput} setNewConversation={setNewConversation} newConversation={newConversation} />
                {
                    conversations.filter(el =>
                        (el.members.find(member => member.includes(searchConversationInput)) || el.title.includes(searchConversationInput))
                    ).map((conversation) => <ConversationCard setNewConversation={setNewConversation} key={conversation.conversationId}
                        setActiveConversation={setActiveConversation} conversation={conversation} user={user} />)
                }
            </section>

            {
                (newConversation) ?
                    <div id="NewConversation">
                        <div style={{ display: 'flex', height: "calc(100% - 50px)" }}>
                            <div style={{ width: "100%", height: "100%" }}>
                                <CreateConvoBar setconversationUpdate={setconversationUpdate} user={user} newConversation={newConversation} setNewConversation={setNewConversation} setActiveConversation={setActiveConversation}
                                />
                            </div>
                        </div>
                    </div>

                    : (activeConversation) ?
                        <ActiveChat
                            setincomingMessage={setincomingMessage}
                            incomingMessage={incomingMessage}
                            socket={socket}
                            conversationUpdate={conversationUpdate}
                            activeConversation={activeConversation} user={user}
                            setNewConversation={setNewConversation}
                            newConversation={newConversation}
                            setActiveConversation={setActiveConversation}
                            setconversationUpdate={setconversationUpdate} />
                        : null
            }
        </div>
    )
}
