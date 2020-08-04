import React, { useState, useEffect } from 'react';
import { Input, Button } from 'reactstrap';

export default function ActiveChatInput({ activeConversation, setconversationUpdate, socket }) {
    const [messageInput, setmessageInput] = useState('');

    useEffect(() => {
        setmessageInput('');
    }, [activeConversation]);

    const handleSendMessage = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    }

    const sendMessage = () => {
        if (messageInput) {

            const dataObj = {
                conversationId: activeConversation,
                type: 'message',
                body: messageInput,
            }
            socket.emit('message', dataObj);
            
            setconversationUpdate(true);
            
            setmessageInput('');
        }
    }

    return (
        <div style={{ width: '90%', margin: '0 auto', height: '40px' }}>
            <Input
                style={{ width: "calc(100% - 55px)", height: '40px', paddingRight: '50px', display: 'inline-block', boxSizing: 'border-box' }}
                type="text"
                name="messageInput"
                id="messageInput"
                autoComplete="false"
                placeholder="Méntame la madre"
                value={messageInput}
                onChange={(e) => setmessageInput(e.target.value)}
                onKeyUp={handleSendMessage}
            />

            <Button onClick={sendMessage} color="primary" style={{ width: "50px", height: '40px', display: 'inline-block', marginLeft: '5px', marginTop: '-3px' }}><i className="fas fa-paper-plane"></i></Button>
        </div>
    )
}
