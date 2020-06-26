import React, { Component } from 'react';
import BackgroundImage from '../../assets/img/backgroundHome.jpeg';
import './Home.css'
import Register from '../../components/Home/Register/Register';

import { Container } from 'reactstrap';
import HomeMessage from '../../components/Home/HomeMessage/HomeMessage';

export default class Home extends Component {
    render() {
        return (
            <div id="home" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }}>
                <Container style={{display: "flex", height: '97%', maxWidth: '100%', margin: "0", justifyContent: "space-around", alignItems: "center"}}>
                            <HomeMessage id='colRegisterMessage' />

                            <Register />
                </Container>

                <div style={{color: "#aaa",  height:"3%", width: "100%", backgroundColor: "#383838", textAlign: "center"}}>
                    Created by Mauricio Durán & Juan Pablo Ramos
                </div>
            </div>
        )
    }
}
