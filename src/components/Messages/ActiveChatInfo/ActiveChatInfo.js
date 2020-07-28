import React, { useState, useEffect } from 'react';
import './ActiveChatInfo.css';

export default function ActiveChatInfo({ activeConversation }) {

    const [newConversationTitle, setnewConversationTitle] = useState('');

    const [conversationTitle, setconversationTitle] = useState('');

    useEffect(() => {
        setconversationTitle((activeConversation.title)? activeConversation.title: 'set room name');
    }, [activeConversation]);

    const changeConversationTitle = () => {
        if(newConversationTitle){
            setconversationTitle(newConversationTitle);
            console.log('Updating conversation title to ' + newConversationTitle);
            setnewConversationTitle('');
        }
    }

    return (
        <div id='chat-info-container' style={{ width: "25%", overflow: 'hidden', height: "100%", padding: "50px 15px 25% 15px", boxSizing: "border-box", backgroundColor: '#f8f8f8', display: 'flex', flexDirection: 'column'}}>
            {/* To be substituted with user image */}
            <div style={{ backgroundColor: '#686868', width: "150px", height: '150px', minHeight: '150px', margin: '0 auto', marginBottom: '10%', borderRadius: '100%' }} />


            {(activeConversation.members.length > 2) ? (
                <>
                    <input onBlur={changeConversationTitle} onChange={(e)=>setnewConversationTitle(e.target.value)} type="text" value={newConversationTitle} placeholder={conversationTitle}/>
                    <div className='members-container'>
                        <h2>Members</h2>
                        <ul id="member-list">
                            {activeConversation.members.filter(el => el !== 'mau4duran').map((el, i) => <li key={i}>{el}</li>)}
                        </ul>
                    </div>
                    <div className='actions-container'>
                        <h2>Actions</h2>
                        <h3>Leave Room</h3>
                    </div>
                </>) :
                (
                    <>
                        <h1>{activeConversation.members.filter(el => el !== 'mau4duran')}</h1>
                        <p className='last-active'>Last Active. 16:45</p>
                        <div className='status-container'>
                            <h2>Status</h2>
                           <p>Meaningful quote goes here.</p>
                        </div>
                        <div className='actions-container'>
                            <h2>Actions</h2>
                            <h3>Clear Conversation</h3>
                            <h3>Block User</h3>
                        </div>
                    </>
                )
            }




        </div>
    )
}
