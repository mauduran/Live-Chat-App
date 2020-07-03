import React from 'react';
import { Form, FormGroup,Container, Row, Col, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom'

function ProfileInfo ({ user }) {
    return(
        <Container id = "containerMyProfile">
            <Form id = "formProfile">
                <Row>
                    <Col id = "PP">
                        <FormGroup>  
                            <br/>
                            <img src = 'https://www.w3schools.com/howto/img_avatar.png' alt = 'imagePP' id = 'imagePP'/>
                        </FormGroup>
                    </Col>
                    <Col id = "ProfileInfo">
                        <FormGroup>
                            <br/><br/>
                            <h1>{user.name}</h1>
                            <h3>@{user.userName}</h3>
                            <h3>{user.status}</h3> 
                            <h3>{user.location}</h3>
                            <h3>Joined June 23rd, 2020</h3>
                            <hr/>
                        </FormGroup> 
                    </Col>
                </Row> 
                <Row>
                    <Col><Button color="primary"style={{width: '100%', }}><i class="fa fa-commenting" aria-hidden="true"></i> Message</Button></Col>
                    <Col><Button color="primary" style={{width: '100%'}}><i class="fa fa-volume-off" aria-hidden="true"></i>Mute</Button></Col>
                    <Col><Button color="primary" style={{width: '100%'}}><i class="fa fa-ban" aria-hidden="true"></i>Block</Button></Col>                
                </Row>
            </Form>
        </Container>
    )
}

export default withRouter(ProfileInfo);