import React, { Component } from 'react';
import PP from '../../components/MyProfile/PP/PP'
import ProfileInfo from '../../components/MyProfile/ProfileInfo/ProfileInfo'
import EditableInfo from '../../components/MyProfile/EditableInfo/EditableInfo'
import { Form, FormGroup,Container, Row, Col } from 'reactstrap';
import './MyProfile.css'


export default class Home extends Component {
    render() { 
        return (
            <div id="MyProfile">
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
                                <Col><EditableInfo/></Col>
                            </Row>
                        </Form>
                    </Container>
            </div>
        )
    } 
}
