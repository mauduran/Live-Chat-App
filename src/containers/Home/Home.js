import React, { Component } from 'react';
import BackgroundImage from '../../assets/img/backgroundHome.jpeg';
import './Home.css'
import RegisterForm from '../../components/Home/RegisterForm/RegisterForm';

import { Container } from 'reactstrap';
import HomeMessage from '../../components/Home/HomeMessage/HomeMessage';

export default class Home extends Component {
    render() {
        return (
            <div id="home" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }}>
                <Container style={{display: "flex", height: '97%', maxWidth: '100%', margin: "0", justifyContent: "space-around", alignItems: "center"}}>
                            <HomeMessage id='colRegisterMessage' />

                            <RegisterForm />
                </Container>

            </div>
        )
    }
}
