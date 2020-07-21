import React, { useEffect, useRef } from 'react'
import Message from '../Message/Message';

export default function ActiveChatMessages({ messages, activeConversation, user }) {
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages]);

    return (
        <div style={{ width: "100%", height: 'calc(100% - 50px)', overflow: "scroll", padding: "20px", boxSizing: 'border-box' }}>
            {
                messages.filter(el=>el.roomId===activeConversation.conversationId).map((message, id) => {
                    return (
                        <Message message={message} key={id} user={user} />
                    )
                })
            }
            <div ref={messagesEndRef}>
            </div>
        </div>
    )
}
