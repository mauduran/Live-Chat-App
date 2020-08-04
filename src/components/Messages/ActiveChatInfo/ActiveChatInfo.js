import React, { useState, useEffect } from 'react';
import './ActiveChatInfo.css';

export default function ActiveChatInfo({ activeConversation, user, setconversationUpdate, setActiveConversation, socket }) {

    const [newConversationTitle, setnewConversationTitle] = useState('');

    const [conversationTitle, setconversationTitle] = useState('');

    useEffect(() => {
        setconversationTitle((activeConversation.title) ? activeConversation.title : 'set room name');
    }, [activeConversation]);

    const changeConversationTitle = () => {
        if (newConversationTitle) {
            fetch(`http://localhost:3001/conversations/${activeConversation.conversationId}/updatetitle`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ title: newConversationTitle })
                }
            )
                .then(res => res.json())
                .then(title => {
                    setconversationTitle(title);
                    socket.emit('updateConversationTitle', activeConversation.conversationId);
                    setconversationUpdate(true);
                    setActiveConversation(activeConvo => ({
                        ...activeConvo,
                        title: title
                    }));
                    setnewConversationTitle('');
                    
                })
                .catch(console.log);
        }
    }

    return (
        <div id='chat-info-container' style={{ width: "25%", overflow: 'hidden', height: "100%", padding: "50px 15px 25% 15px", boxSizing: "border-box", backgroundColor: '#f8f8f8', display: 'flex', flexDirection: 'column' }}>
            {/* To be substituted with user image */}
            <div style={{ backgroundColor: '#686868', width: "150px", height: '150px', minHeight: '150px', margin: '0 auto', marginBottom: '10%', borderRadius: '100%' }} />


            {(activeConversation.members.length > 2) ? (
                <>
                    <input onBlur={changeConversationTitle} onChange={(e) => setnewConversationTitle(e.target.value)} type="text" value={newConversationTitle} placeholder={conversationTitle} style={{ fontWeight: "bold" }} />
                    <div className='members-container'>
                        <h3>Members</h3>
                        <ul id="member-list">
                            {activeConversation.members.map((el, i) => <li key={i}>{el}</li>)}
                        </ul>
                    </div>
                    <div className='actions-container'>
                        <br />
                        <br />
                        <h2 style={{ textAlign: "center" }}>Actions</h2>
                        <h3 style={{ color: "white", backgroundColor: "#ff6666", border: "solid white", borderRadius: "10px" }}>Leave Room</h3>
                    </div>
                </>) :
                (
                    <>
                        <h1>{activeConversation.members.filter(el => el !== user.username)}</h1>

                        <p className='last-active'>Last Active. 16:45</p>
                        <div className='status-container' style={{ overflow: "hidden" }}>
                            <h2>Status</h2>
                            <p>Meaningful quote goes here.</p>
                        </div>
                        <div className='actions-container'>
                            <br />
                            <h2 style={{ textAlign: "center" }}>Actions</h2>
                            <h3 style={{ color: "white", backgroundColor: "#8E8C8C", border: "solid white", borderRadius: "10px" }}>Clear Conversation</h3>
                            <h3 style={{ color: "white", backgroundColor: "#ff6666", border: "solid white", borderRadius: "10px" }}>Block User</h3>
                        </div>
                    </>
                )
            }




        </div>
    )
}
