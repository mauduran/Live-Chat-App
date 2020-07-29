import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';

export default function ActiveChatInput({ activeConversation, socket }) {
    const [messageInput, setmessageInput] = useState('');

    const handleSendMessage = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    }

    const sendMessage = () => {
        if (messageInput) {

            const dataObj = {
                roomId: activeConversation.conversationId,
                type: 'message',
                body: messageInput,
            }
            socket.emit('message', dataObj);
        }
    }

    return (
        <div style={{ width: '90%', margin: '0 auto', height: '50px' }}>
            <Input
                style={{ width: "100%", paddingRight: '50px', display: 'inline-block' }}
                type="text"
                name="messageInput"
                id="messageInput"
                placeholder=""
                value={messageInput}
                onChange={(e) => setmessageInput(e.target.value)}
                onKeyUp={handleSendMessage}
            />

            <Button onClick={sendMessage} color="primary" style={{ width: "50px", marginLeft: '-50px' }}><i className="fas fa-paper-plane"></i></Button>
        </div>
    )
}
