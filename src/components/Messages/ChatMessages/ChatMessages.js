import React, { useEffect, useRef } from 'react'
import Message from '../Message/Message';
import './ChatMessages.css'

export default function ChatMessages({ messages, activeConversation, user }) {
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages]);

    return (
        <div className="activeChatMsg" style={{ width: "100%", height: 'calc(100% - 50px)', overflow: "scroll", padding: "20px", boxSizing: 'border-box' }}>
            {
                messages.filter(el=>el.conversationId===activeConversation).map((message, id) => {
                
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
