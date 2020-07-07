import React, { useState } from 'react';
import './Conversations.css';
import ChatActionBar from '../ChatActionBar/ChatActionBar';
import ConversationCard from '../ConversationCard/ConversationCard';
import ActiveChat from '../ActiveChat/ActiveChat';



const dummyConversations = [
    {
        conversationId: 1,
        title: '',
        members: ['mau4duran', 'jprr44'],
        lastMessage: {
            body: "Hola, cómo estás?",
            date: new Date(2020, 6, 5, 12, 24, 0),
            sender: "mau4duran"
        }
    },
    {
        conversationId: 2,
        title: 'las señoras',
        members: ['mau4duran', 'jprr44', 'jsfran'],
        lastMessage: {
            body: "cuándo llamada? lorem ipsun dolot emmet rjvehue eofhwehoifhew eofhwhfwi",
            date: new Date(2020, 6, 3, 18, 10, 0),
            sender: "jprr44"
        }
    },
    {
        conversationId: 3,
        title: '',
        members: ['mau4duran', 'jsfran'],
        lastMessage: {
            body: "qué pedo",
            date: new Date(2020, 6, 5, 10, 40, 0),
            sender: "jsfran"
        }
    },
    {
        conversationId: 4,
        title: '',
        members: ['mau4duran', 'jsfran', 'elrolas', 'abc', 'dbba', 'rollo'],
        lastMessage: {
            body: "heyyy",
            date: new Date(2020, 7, 5, 19, 40, 0),
            sender: "jsfran"
        }
    }
]

export default function Conversations() {
    const [activeConversation, setActiveConversation] = useState(null);

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex' }}>
            <section id='ConversationsBar'>
                <ChatActionBar />
                {
                    dummyConversations.map((conversation) => <ConversationCard key={conversation.conversationId}
                        setActiveConversation={setActiveConversation} conversation={conversation} />)
                }
            </section>

            {activeConversation && <ActiveChat activeConversation={activeConversation} />}
        </div>
    )
}
