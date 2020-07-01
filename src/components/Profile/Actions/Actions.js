import React from 'react'
import { Form, FormGroup, Label, Input, Container, Row, Col, Button  } from 'reactstrap';
import './Actions.css';

const Actions = () => {
    return(
        <Container>
            <br/><br/><br/>            
            <Row id = "rowButtons">
                <Col><Button color="primary" style={{width: '100%'}}> Message</Button></Col>
                <Col><Button color="primary" style={{width: '100%'}}>Mute</Button></Col>
                <Col><Button color="primary" style={{width: '100%'}}>Block</Button></Col>
            </Row>
            <br/>
        </Container>
    )
}

export default Actions;