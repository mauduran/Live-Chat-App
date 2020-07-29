import React, { useEffect, useState } from 'react';
import CreateConvoProfile from '../CreateConvoProfile/CreateConvoProfile';
import { withRouter } from 'react-router-dom';
import './CreateConversation.css';


function CreateConversation({ inputText, members, setmembers, user }) {
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
                    users.filter(usr => usr.username!==user.username && (!members.map(member => member.toLowerCase()).includes(usr.username.toLowerCase())))
                        .map(usr => <CreateConvoProfile setmembers={setmembers} key={usr.userId} user={usr} members={members} />) :
                    null
            }
        </div>
    )
}

export default withRouter(CreateConversation)

