import React, { useState } from 'react';
import './CreateConvoBar.css';
import { Input } from 'reactstrap';
import { withRouter } from 'react-router-dom'
import { Button } from 'reactstrap';
import CreateConversation from '../CreateConversation/CreateConversation'


function CreateConvoBar({newConversation, setNewConversation, setActiveConversation, user}) {
        const [inputText, setinputText] = useState('');
        const [members, setmembers] = useState([]);

        const listMembers = members.map(member =>(<li className="listMembers" key={member.name}>{member.name}</li>))

       function handleOnChange(event){
                   setinputText(event.target.value);
                }
        function handleOnclick(event){
            if(!members) return
            const newConversation ={
                title: '',
                members: [...members, user.username],
            }
            fetch('http://localhost:3001/conversations',
                {
                    method:'POST',
                    headers: {
                            'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newConversation)
                } )
                .then(res => res.json())
                .then(conversation => {
                    setActiveConversation(conversation);
                    setmembers([]);
                })
                .catch(console.log);
        }
        
        return (
            <div>
                <div id="CreateConvoBar">
                    <p id='Tag'>
                        To:
                    </p>
                    <Input type="text" name="CreateConvo" className="CreateConvo" placeholder="Search for users" onChange={handleOnChange} />
                    <Button className ='DoneBtn' onClick={handleOnclick} color="primary">Done</Button>
                </div>
                    <div className="divMembers">                    
                        {listMembers}
                    </div>
                <div>
                    <ul id="myUL">
                        <li><CreateConversation inputText={inputText} members={members} setmembers={setmembers}/></li>
                    </ul>
                </div>
            </div>
        )
    }

export default withRouter(CreateConvoBar);