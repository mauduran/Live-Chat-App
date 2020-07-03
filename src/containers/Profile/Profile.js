import React from 'react';
import BackgroundImage from '../../assets/img/backgroundHome.jpeg';
import ProfileInfo from '../../components/Profile/ProfileInfo'
import './Profile.css'
import { withRouter } from 'react-router-dom';


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

function Profile({ match }) {
    const input = (match.params.searchQuery)? match.params.searchQuery: "";
    return (
        <div className="Profile">
            {
                users
                    .filter(user => user.name.includes(input))
                    .map(user => <ProfileInfo key={user.userId}  user={user} />)
            }
        </div>
    )
}

export default withRouter(Profile)