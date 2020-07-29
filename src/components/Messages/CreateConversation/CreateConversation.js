import React, { useEffect, useState } from 'react';
import CreateConvoProfile from '../CreateConvoProfile/CreateConvoProfile';
import { withRouter } from 'react-router-dom';
import './CreateConversation.css';


function CreateConversation({ inputText, members, setmembers }) {
    const [users, setusers] = useState();

    useEffect(() => {
        fetch(`http://localhost:3001/users?searchInput=${inputText}`)
            .then(res => res.json())
            .then(usrs => setusers(usrs))
            .catch(console.log)

    }, [inputText]);

    return (
        <div id="CreateConversation">
            {

                (users) ?
                    users.filter(user => !members.map(member => member.toLowerCase()).includes(user.username.toLowerCase()))
                        .map(user => <CreateConvoProfile setmembers={setmembers} key={user.userId} user={user} members={members} />) :
                    null
            }
        </div>
    )
}

export default withRouter(CreateConversation)

