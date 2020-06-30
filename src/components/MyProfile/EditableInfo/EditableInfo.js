import React from 'react'
import { Form, FormGroup, Label, Input, Container, Row, Col, Button  } from 'reactstrap';
import './EditableInfo.css';

const EditableInfo = () => {
    return(
        <Container>
            <Row>
                <Form id = "formEditable">
                    <FormGroup>
                        <Label for="locationProfile">Location</Label>
                        <Input type="text" name="locationProfile" id="locationProfile" placeholder="Enter your location" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="quoteProfile">Quote</Label>
                        <Input type="text" name="quoteProfile" id="quoteProfile" placeholder="Enter your quote" />
                    </FormGroup>      
                </Form>
            </Row>
            <Row id = "rowButtons">
                <Col><Button color="success" style={{width: '100%'}}> Update</Button></Col>
                <Col><Button color="danger" style={{width: '100%'}}>Cancel</Button></Col>
            </Row>
        </Container>
    )
}

export default EditableInfo;