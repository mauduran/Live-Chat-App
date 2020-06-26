import React from 'react';
import './Register.css';

import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

const Register = () => {
    return(
                    <Container id = "containerRegister" style={{backgroundColor: "#f8f8f8"}}>
                        <Form id = "formRegister">
                            <h1 id = "h1Register">Register</h1>
                            <hr id = "hrRegister"/>
                            <Row id = "rowNames">
                                <Col>
                                    <FormGroup>
                                        <Label for="firstName">Fist Name</Label>
                                        <Input type="text" name="firstName" id="firstName" placeholder="Enter your first name" />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="lastName">Last Name</Label>
                                        <Input type="text" name="lastName" id="lastName" placeholder="Enter your last name" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                            <Col>
                                    <FormGroup>
                                        <Label for="Email">Email</Label>
                                        <Input type="email" name="Email" id="Email" placeholder="Enter your Email" />
                                    </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="username">Username</Label>
                                        <Input type="text" name="username" id="username" placeholder="Enter your username" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password" name="password" id="password" placeholder="Enter your password" />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="confirmPassword">Confirm Password</Label>
                                        <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col>
                                    <Button color = "primary" id = "buttonRegister">Create account</Button>
                                </Col>
                            </Row>
                            <br/>
                        </Form>
                    </Container>
    )
}

export default Register;