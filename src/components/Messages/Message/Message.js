import React from 'react'
import './Message.css'
import moment from 'moment';

export default function Message({ message, user }) {
    const additionalClass = (message.sender === user.username) ? 'ownMessage' : ""
    return (
        <div className={`messageContainer ${additionalClass}`}>
            <div className={`message`}>
                {message.sender !== user.username && <span style={{ fontSize: "10px", top: "2px", color:"green" }}>{message.sender}</span>}
                <p>{message.body}</p>
                <span style={{ float: "right", fontSize: "10px" }}>
                    {(moment().isSame(message.date, 'day')) ? moment(message.date).format('HH:mm ') : (moment().isSame(message.date, 'year')) ? moment(message.date).format('MMM DD[,] HH:mm ') : moment(message.date).format('MMM DD YYYY[,] HH:mm ')}
                </span>
            </div>
        </div>
    )
}
