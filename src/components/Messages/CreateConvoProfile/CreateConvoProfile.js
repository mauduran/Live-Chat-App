import React from 'react';
import './CreateConvoProfile.css'


function CreateConvoProfile({ user }){
        return (
            <div id = 'ConversationProfile'>
                <h1 id = "Name">{user.name}</h1>
            </div>
        );
    }

export default CreateConvoProfile; 