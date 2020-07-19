import React, { Component, useState } from 'react';
import './CreateConvoBar.css';
import { Input } from 'reactstrap';
import { withRouter } from 'react-router-dom'
import { Button } from 'reactstrap';
import CreateConversation from '../CreateConversation/CreateConversation'


function CreateConvoBar({newConversation, setNewConversation}) {
        const [inputText, setinputText] = useState('');

       function handleOnChange(event){
                   setinputText(event.target.value);
                }

        function handleOnclick(event){
            setNewConversation(newConversation = !newConversation);
            console.log(newConversation);
        }
        return (
            <div>
                <div id="CreateConvoBar">
                <p id='Tag'>
                    To:
                </p>
                <Input type="text" name="CreateConvo" id="CreateConvo" placeholder="Search for users" onChange={handleOnChange} />
                <Button onClick={handleOnclick} id='DoneBtn' color="primary">Done</Button>
            </div>
            <div>
            <ul id="myUL">
                <li><CreateConversation inputText={inputText}/></li>
            </ul>
            </div>
            </div>
        )
    }

export default withRouter(CreateConvoBar);