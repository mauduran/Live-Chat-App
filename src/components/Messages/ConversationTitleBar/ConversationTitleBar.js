import React from 'react';
import './ConversationTitleBar.css';

export default function ConversationTitleBar({ activeConversation, user }) {
    return (
        <div id="conversationBar" style={{ width: '100%', height: '50px', backgroundColor: '#f8f8f8', borderBottom: '1px solid #383838' }} >
            <div id="conversationInfo" style={{ width: 'fit-content', height: '100%', margin: '0 auto', display: 'flex', alignItems: 'center' }}>
            <img style={{height: '60%', borderRadius: '50%', marginRight: '10px'}} src='https://www.w3schools.com/howto/img_avatar.png' alt='profileImg' />
                <p>
                    {(activeConversation.title) ? activeConversation.title : activeConversation.members.filter(member => member !== user.username).join(', ')}
                </p>
            </div>
        </div>
    )
}
