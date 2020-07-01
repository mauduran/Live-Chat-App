import React, { Component } from 'react';
import BackgroundImage from '../../assets/img/backgroundHome.jpeg';
import PP from '../../components/Profile/PP/PP'
import ProfileInfo from '../../components/Profile/ProfileInfo/ProfileInfo'
import Actions from '../../components/Profile/Actions/Actions';
import { Form, FormGroup,Container, Row, Col } from 'reactstrap';
import './Profile.css'

export default class Home extends Component {
    render() { 
        return (
            <div id="Profile" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover'}}>
                <Container id = "containerMyProfile">
                        <Form id = "formProfile">
                            <Row>
                                <Col id = "PP">
                                    <FormGroup>  
                                        <PP/>
                                    </FormGroup>
                                </Col>
                                <Col id = "ProfileInfo">
                                    <FormGroup>
                                        <ProfileInfo/>
                                    </FormGroup> 
                                </Col>
                            </Row> 
                            <Row>
                                <Col><Actions/></Col>
                            </Row>
                        </Form>
                    </Container>
            </div>
        )
    } 
}
