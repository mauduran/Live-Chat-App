import React from 'react';
import './CreateConvoProfile.css'


function CreateConvoProfile({ user, setmembers }) {

    function handleOnClick(e) {
        setmembers(members => [...members, user.username])
    }

    return (
        <div className='ConversationProfile' onClick={handleOnClick}>
            <h1 className="Name">{user.name}</h1>  <h2 className="username">@{user.username}</h2>
        </div>
    );
}

export default CreateConvoProfile; 