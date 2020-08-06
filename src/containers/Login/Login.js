import React, { Component } from 'react';
import './Login.css'
import { Container } from 'reactstrap';
import LoginForm from '../../components/Login/LoginForm/LoginForm';
import BackButton from '../../components/BackButton/BackButton';

export default class Home extends Component {
    render() {
        return (
            <div id="LoginForm">
                <Container style={{ display: "flex", height: '100%%', maxWidth: '100%', margin: "0", justifyContent: "space-around", alignItems: "center" }}>
                    <LoginForm id='LoginForm' />
                </Container>
            </div>
        )
    }
}
