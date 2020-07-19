import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Input } from 'reactstrap';
import CreateConvoBar from '../CreateConvoBar/CreateConvoBar'
import './ChatActionBar.css';

function ChatActionBar({ newConversation, setNewConversation}){

    function handleOnclick(e) {
        setNewConversation(newConversation = !newConversation)
        let newConvo = {
            conversationId: 5,
            title: '',
            members: ['mau4duran', 'JuanRamos'],
            lastMessage: {
                body: "TestCreateConvo",
                date: new Date(2020, 7, 5, 19, 40, 0),
                sender: "JuanRamos"
            }
        }
        console.log(newConvo);
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