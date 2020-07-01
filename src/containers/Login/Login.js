import React, { Component } from 'react';
import './Login.css'
import { Container } from 'reactstrap';
import LoginMessage from '../../components/Login/LoginMessage/LoginMessage';

export default class Home extends Component {
    render() {
        return (
            <div id="Login">
                <Container style={{display: "flex", height: '97%', maxWidth: '100%', margin: "0", justifyContent: "space-around", alignItems: "center"}}>
                            <LoginMessage id = 'LoginMessage'/>
                </Container>
            </div>
        )
    }
}
