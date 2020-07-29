import React from 'react';
import './CreateConvoProfile.css'


function CreateConvoProfile({ user, setmembers }){
    
    function handleOnClick(e){
        setmembers(members => [...members,user])
    }

    return (
            <div className = 'ConversationProfile' onClick = {handleOnClick}>
                <h1 className = "Name">{user.name}</h1>  <h2 className = "userName">@{user.userName}</h2>
            </div>
        );
    }

export default CreateConvoProfile; 