import React, { Component } from 'react';
import BackgroundImage from '../../assets/img/backgroundHome.jpeg';
import PP from '../../components/MyProfile/PP/PP'
import ProfileInfo from '../../components/MyProfile/ProfileInfo/ProfileInfo'
import EditableInfo from '../../components/MyProfile/EditableInfo/EditableInfo'
import { Form, FormGroup,Container, Row, Col } from 'reactstrap';
import './MyProfile.css'
import LoginMessage from '../../components/LoginMessage/LoginMessage';



export default class Home extends Component {
    render() { 
        return (
            <div id="MyPrifile" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover'}}>
                <Container id = "containerMyProfile">
                        <Form id = "formProfile">
                            <Row>
                                <Col>
                                    <FormGroup>  
                                        <PP/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <ProfileInfo/>
                                    </FormGroup> 
                                </Col>
                            </Row> 
                            <Row>
                                <Col><EditableInfo/></Col>
                            </Row>
                        </Form>
                    </Container>
                    <LoginMessage/>
            </div>
        )
    } 
}
