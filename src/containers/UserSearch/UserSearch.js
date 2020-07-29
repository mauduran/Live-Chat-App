import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import UserResultCard from '../../components/UserSearch/UserResultCard';
import './UserSearch.css'
import BackButton from '../../components/BackButton/BackButton'

// const users = [
//     {
//         userId: 1,
//         imgUrl: "https://docs.atlassian.com/aui/5.2-m6/docs/img/user-avatar-blue-96@2x.png",
//         name: "John Doe",
//         username: "iamjohn",
//         location: "Guadalajara, Jal",
//         joined: new Date('10/21/2015'),
//         status: "Meaningful Quote goes here"
//     },
//     {
//         userId: 2,
//         imgUrl: "https://docs.atlassian.com/aui/5.2-m6/docs/img/user-avatar-blue-96@2x.png",
//         name: "Mauricio Duran",
//         username: "mau4duran",
//         location: "San Luis Potosí, SLP",
//         joined: new Date('06/14/2018'),
//         status: "Meaningful Quote goes here"
//     },
//     {
//         userId: 3,
//         imgUrl: "https://docs.atlassian.com/aui/5.2-m6/docs/img/user-avatar-blue-96@2x.png",
//         name: "Juan Pablo Ramos",
//         username: "jprr44",
//         location: "Guadalajara, Jal",
//         joined: new Date('08/31/2020'),
//         status: "I like big dicks"
//     },
//     {
//         userId: 4,
//         imgUrl: "https://docs.atlassian.com/aui/5.2-m6/docs/img/user-avatar-blue-96@2x.png",
//         name: "José Francisco González",
//         username: "jsfran",
//         location: "Guadalajara, Jal",
//         joined: new Date('09/14/2016'),
//         status: "Lorem ipsun dolor immet"
//     },
//     {
//         userId: 5,
//         imgUrl: "https://docs.atlassian.com/aui/5.2-m6/docs/img/user-avatar-blue-96@2x.png",
//         name: "Marcelo Londra",
//         username: "marselop",
//         location: "Guadalajara, Jal",
//         joined: new Date('09/14/2016'),
//         status: "Lorem ipsun dolor immet"
//     },
//     {
//         userId: 6,
//         imgUrl: "https://docs.atlassian.com/aui/5.2-m6/docs/img/user-avatar-blue-96@2x.png",
//         name: "Marco Galina",
//         username: "marko",
//         location: "Guadalajara, Jal",
//         joined: new Date('09/14/2016'),
//         status: "Lorem ipsun dolor immet"
//     },
// ]


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