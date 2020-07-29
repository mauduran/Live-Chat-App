import React, { useEffect, useState } from 'react';
import ProfileInfo from '../../components/Profile/ProfileInfo'
import { withRouter } from 'react-router-dom';
import './Profile.css';


function Profile({ match }) {
    const [userProfileData, setuserProfileData] = useState(null);

    useEffect(() => {
        if (!match.params.id) return;
        fetch(`http://localhost:3001/users/${match.params.id}`)
            .then(res => res.json())
            .then(userProfile => setuserProfileData(userProfile))
            .catch(console.log);
    }, [match.params.id])


    return (
        <div id="Profile">
            {
                (userProfileData)? < ProfileInfo user={userProfileData}/> : <h1 style={{textAlign: "center", marginTop: "5%"}}>User not found...</h1>
            }
        </div>
    )
}

export default withRouter(Profile);