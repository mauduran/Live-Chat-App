import React from 'react'
import './Message.css'
import moment from 'moment';

export default function Message({ message }) {
    const user = 'mau4duran';
    const additionalClass = (message.sender === user) ? 'ownMessage' : ""
    return (
        <div className={`messageContainer ${additionalClass}`}>
            <div className={`message`}>
                {message.sender !== 'mau4duran' && <span style={{ fontSize: "10px", position: "absolute", top: "2px" }}>{message.sender}</span>}
                <p>{message.body}</p>
                <span style={{ float: "right", fontSize: "10px" }}>
                    {(moment().isSame(message.date, 'day')) ? moment(message.date).format('HH:mm ') : (moment().isSame(message.date, 'year')) ? moment(message.date).format('MMM DD[,] HH:mm ') : moment(message.date).format('MMM DD YYYY[,] HH:mm ')}
                </span>
            </div>

        </div>
    )
}
