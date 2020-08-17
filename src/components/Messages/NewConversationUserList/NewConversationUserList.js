import React, { useEffect, useState } from 'react';
import NewConversationUserCard from '../NewConversationUserCard/NewConversationUserCard';
import { withRouter } from 'react-router-dom';
import './NewConversationUserList.css';


function NewConversationUserList({ inputText, members, setmembers, user }) {
    const [users, setusers] = useState();

    useEffect(() => {
        fetch(`http://localhost:3001/users?searchInput=${inputText}`)
            .then(res => res.json())
            .then(usrs => setusers(usrs))
            .catch(console.log)

    }, [inputText]);

    return (
        <div id="NewConversationUserList">
            {

                (users) ?
                    users.filter(usr => usr.username!==user.username && (!members.map(member => member.toLowerCase()).includes(usr.username.toLowerCase())))
                        .map(usr => <NewConversationUserCard setmembers={setmembers} key={usr._id} user={usr} members={members} />) :
                    null
            }
        </div>
    )
}

export default withRouter(NewConversationUserList)

