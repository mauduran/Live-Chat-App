import React from 'react';
import { Input, Button } from 'reactstrap';

export default function ActiveChatInput() {
    return (
        <div style={{ width: '90%', margin: '0 auto', height: '50px' }}>
            <Input style={{ width: "100%", paddingRight: '50px', display: 'inline-block' }} type="text" name="messageInput" id="messageInput" placeholder="" />
            <Button style={{ width: "50px", marginLeft: '-50px'}}><i className="fas fa-paper-plane"></i></Button>
        </div>
    )
}
