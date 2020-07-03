import React from 'react';
import { withRouter } from 'react-router-dom';
import UserResultCard from '../../components/UserSearch/UserResultCard';
import './UserSearch.css'


const users = [
    {
        userId: 1,
        imgUrl: "https://docs.atlassian.com/aui/5.2-m6/docs/img/user-avatar-blue-96@2x.png",
        name: "John Doe",
        userName: "iamjohn",
        location: "Guadalajara, Jal",
        joined: new Date('10/21/2015'),
        status: "Meaningful Quote goes here"
    },
    {
        userId: 2,
        imgUrl: "https://docs.atlassian.com/aui/5.2-m6/docs/img/user-avatar-blue-96@2x.png",
        name: "Mauricio Duran",
        userName: "mau4duran",
        location: "San Luis Potosí, SLP",
        joined: new Date('06/14/2018'),
        status: "Meaningful Quote goes here"
    },
    {
        userId: 3,
        imgUrl: "https://docs.atlassian.com/aui/5.2-m6/docs/img/user-avatar-blue-96@2x.png",
        name: "Juan Pablo Ramos",
        userName: "jprr44",
        location: "Guadalajara, Jal",
        joined: new Date('08/31/2020'),
        status: "I like big dicks"
    },
    {
        userId: 4,
        imgUrl: "https://docs.atlassian.com/aui/5.2-m6/docs/img/user-avatar-blue-96@2x.png",
        name: "José Francisco González",
        userName: "jsfran",
        location: "Guadalajara, Jal",
        joined: new Date('09/14/2016'),
        status: "Lorem ipsun dolor immet"
    },
    {
        userId: 5,
        imgUrl: "https://docs.atlassian.com/aui/5.2-m6/docs/img/user-avatar-blue-96@2x.png",
        name: "Marcelo Londra",
        userName: "marselop",
        location: "Guadalajara, Jal",
        joined: new Date('09/14/2016'),
        status: "Lorem ipsun dolor immet"
    },
    {
        userId: 6,
        imgUrl: "https://docs.atlassian.com/aui/5.2-m6/docs/img/user-avatar-blue-96@2x.png",
        name: "Marco Galina",
        userName: "marko",
        location: "Guadalajara, Jal",
        joined: new Date('09/14/2016'),
        status: "Lorem ipsun dolor immet"
    },
]

function UserSearch({ match }) {
    const input = (match.params.searchQuery)? match.params.searchQuery.toLowerCase(): "";
    return (
        <div className="userResultsContainer">
            {
                users
                    .filter(user => user.name.toLowerCase().includes(input)
                        || user.userName.toLowerCase().includes(input))
                    .map(user => <UserResultCard key={user.userId}  user={user} />)
            }
        </div>
    )
}

export default withRouter(UserSearch);