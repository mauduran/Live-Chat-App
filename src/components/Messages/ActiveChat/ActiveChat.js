import React, { useState } from 'react'
import ActiveChatMessages from '../ActiveChatMessages/ActiveChatMessages'
import ConversationBar from '../ConversationBar/ConversationBar';
import ActiveChatInfo from '../ActiveChatInfo/ActiveChatInfo';
import ActiveChatInput from '../ActiveChatInput/ActiveChatInput';

const dummyMessages = [
    {
        roomId: 1,
        type: 'message',
        body: "Hola, cómo estás?",
        date: new Date(2019, 6, 5, 12, 24, 0),
        sender: "mau4duran"
    },
    {
        roomId: 1,
        type: 'message',
        body: "Qué tal, buen hombre.",
        date: new Date(2020, 6, 4, 14, 14, 30),
        sender: "jprr44"
    },
    {
        roomId: 1,
        type: 'message',
        body: "Cómo vamos con el sitio?",
        date: new Date(2020, 6, 5, 14, 34, 0),
        sender: "mau4duran"
    },
    {
        roomId: 1,
        type: 'message',
        body: "Bien",
        date: new Date(2020, 6, 5, 14, 35, 0),
        sender: "jprr44"
    },
    {
        roomId: 1,
        type: 'message',
        body: "Falta lo de mensajes.",
        date: new Date(2020, 6, 5, 12, 35, 20),
        sender: "jprr44"
    },
    {
        roomId: 1,
        type: 'message',
        body: "Voy",
        date: new Date(2020, 6, 5, 12, 44, 0),
        sender: "mau4duran"
    },
    {
        roomId: 2,
        type: 'message',
        body: "Voy",
        date: new Date(2020, 6, 5, 12, 44, 0),
        sender: "mau4duran"
    },

    {
        roomId: 3,
        type: 'message',
        body: "qué pedo",
        date: new Date(2020, 6, 5, 10, 40, 0),
        sender: "jsfran"
    },

    {
        roomId: 4,
        type: 'message',
        body: "heyyy",
        date: new Date(2020, 7, 5, 19, 40, 0),
        sender: "jsfran"
    },
    {
        roomId: 4,
        type: 'leave-conversation',
        body: "",
        date: new Date(),
        sender: "mau4duran"
    }
];



export default function ActiveChat({ activeConversation, user }) {
    const [messages, setmessages] = useState(dummyMessages)
    return (
        <div id='ActiveConversation' >
            <ConversationBar activeConversation={activeConversation}  user={user}/>
            <div style={{ display: 'flex', height: "calc(100% - 50px)" }}>
                <div style={{ width: "75%", height: "100%" }}>
                    <ActiveChatMessages activeConversation={activeConversation} messages={messages} user={user} />
                    <ActiveChatInput/>
                </div>
                <ActiveChatInfo activeConversation={activeConversation} user={user} />
            </div>
        </div>
    )
}
