import React from 'react';
import './ConversationCard.css';
import moment from 'moment';

export default function ConversationCard({ conversation, setActiveConversation }) {
    return (
        <div className='conversation-card' onClick={()=>setActiveConversation(conversation)}>
            <img src='https://www.w3schools.com/howto/img_avatar.png' alt='profileImg' />
            <div className='conversation-detail'>
                <p style={{ fontSize: '12px', margin: 0 }}>
                    {(conversation.title) ? conversation.title : conversation.members.filter(member => member !== 'mau4duran').slice(0, 2).join(', ')
                        + ((conversation.members.length > 3) ? '...' : '')}
                </p>
                <p style={{ fontSize: '14px', margin: 0 }}>
                    {conversation.lastMessage.body.substring(0, 30) + ((conversation.lastMessage.body.substring(0, 30) === conversation.lastMessage.body)? '': '...')}
                </p>
                <p style={{ fontSize: '10px'}}>{moment(conversation.lastMessage.date).format('MMM DD YYYY[,] HH:mm ')}</p>
            </div>
        </div>
    )
}
