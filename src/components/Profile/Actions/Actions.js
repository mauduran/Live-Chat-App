import React from 'react'
import { Form, FormGroup, Label, Input, Container, Row, Col, Button  } from 'reactstrap';
import './Actions.css';

const Actions = () => {
    return(
        <Container>
            <br/><br/><br/>            
            <Row id = "rowButtons">
                <Col><Button color="primary"style={{width: '100%', }}><i class="fa fa-commenting" aria-hidden="true"></i> Message</Button></Col>
                <Col><Button color="primary" style={{width: '100%'}}><i class="fa fa-volume-off" aria-hidden="true"></i>Mute</Button></Col>
                <Col><Button color="primary" style={{width: '100%'}}><i class="fa fa-ban" aria-hidden="true"></i>Block</Button></Col>
            </Row>
            <br/>
        </Container>
    )
}

export default Actions;