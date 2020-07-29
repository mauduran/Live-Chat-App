import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import UserResultCard from '../../components/UserSearch/UserResultCard';
import './UserSearch.css'
import BackButton from '../../components/BackButton/BackButton'


function UserSearch({ match }) {
    const [userResults, setuserResults] = useState([])
    useEffect(() => {
        if (match.params.searchQuery) {
            fetch(`http://localhost:3001/users?searchInput=${match.params.searchQuery.toLowerCase()}`)
                .then(res => res.json())
                .then(usrs => setuserResults(usrs))
                .catch(console.log)
        }

    }, [match.params.searchQuery])

    const input = (match.params.searchQuery) ? match.params.searchQuery.toLowerCase() : "";
    return (
        <div className="userResultsContainer">
            <BackButton />
            {
                (userResults) ?
                    userResults.map(user => <UserResultCard key={user.userId} user={user} />)
                    : <h1 style={{ textAlign: "center", marginTop: "5%" }}>No users found.</h1>
            }
        </div>
    )
}

export default withRouter(UserSearch);