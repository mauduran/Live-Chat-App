import React, { useState, useEffect } from 'react';
import './Conversations.css';
import ChatActionBar from '../ChatActionBar/ChatActionBar';
import ConversationCard from '../ConversationCard/ConversationCard';
import ActiveChat from '../ActiveChat/ActiveChat';
        
export default function Conversations({ user, socket }) {

    const [activeConversation, setActiveConversation] = useState(null);
    const [searchConversationInput, setsearchConversationInput] = useState('');
    const [conversations, setconversations] = useState([]);
    const [newConversation, setNewConversation] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3001/conversations/${user.username}`)
            .then(res => res.json())
            .then(convs => setconversations(convs))
            .catch(err => console.log(err));
    }, [user])

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex' }}>
            <section id='ConversationsBar'>
            <ChatActionBar searchConversationInput={searchConversationInput} setsearchConversationInput={setsearchConversationInput} setNewConversation={setNewConversation} newConversation={newConversation}/>
            {
                conversations.filter(el =>
                (el.members.find(member => member.includes(searchConversationInput)) || el.title.includes(searchConversationInput))
                ).map((conversation) => <ConversationCard key={conversation.conversationId}
                setActiveConversation={setActiveConversation} conversation={conversation} user={user} />)
            }
            </section>
            
            {activeConversation && <ActiveChat socket={socket} activeConversation={activeConversation} user={user} setNewConversation={setNewConversation} newConversation={newConversation} setActiveConversation={setActiveConversation}/>}
        </div>
    )
}
