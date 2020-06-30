import React from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import BackgroundImage from '../../../assets/img/backgroundHome.jpeg';
import Logo from './'

const Login = () => {
    return(
        <div id="home" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }}>
            <Container id = 'containerLogin'>
                <Form>
                    <FormGroup>
                        <Label for="usernameLogin">Username or email</Label>
                        <Input type="text" name="username" id="usernameLogin" placeholder="Enter your username or password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="passwordLogin">Password</Label>
                        <Input type="password" name="passwordLogin" id="passwordLogin" placeholder="Enter your password" />
                    </FormGroup>
                <Button>Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Login;