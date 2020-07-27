import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Input } from 'reactstrap';
import CreateConvoBar from '../CreateConvoBar/CreateConvoBar'
import './ChatActionBar.css';

function ChatActionBar({ newConversation, setNewConversation, doneConversation, setDoneConversation}){

    function handleOnclick(e) {
        setNewConversation(newConversation = !newConversation)
        setDoneConversation(doneConversation = !doneConversation);
    }

        return (
            <div id="chatActionBar">
                <button className='btn'>
                    <i className="fas fa-search"></i>
                </button>
    
                <Input type="text" name="firstName" id="firstName" placeholder="Search for users" />
                <button className='btn' onClick={handleOnclick}>
                    <i className="fas fa-comment-alt"></i>
                </button>
            </div>
        )
    }

export default withRouter(ChatActionBar)