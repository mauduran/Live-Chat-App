import React, { Component } from 'react';
import BackgroundImage from '../../assets/img/backgroundHome.jpeg';
import { Container } from 'reactstrap';
import EditableInfo from '../../components/MyProfile/EditableInfo/EditableInfo'

export default class Home extends Component {
    render() {
        return (
            <div id="Login" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover'}}>
                <Container style={{display: "flex", height: '97%', maxWidth: '100%', margin: "0", justifyContent: "space-around", alignItems: "center"}}>
                    <EditableInfo/>
                </Container>
            </div>
        )
    }
}
