import React from 'react';
import './UserResultCard.css';

export default function UserResultCard({ user }) {
    return (
        <div className="userResultCard">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="user profile" />
            <div className="userInfo">
                <h1>{user.name}</h1>
                <h2>@{user.userName}</h2>
                <h2>{user.location}</h2>
            </div>

            <button className="btn btn-info">View Profile</button>

        </div>
    )
}
