import React from 'react';
import './LoginMessage.css';
import { Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';
import Logo from '../Logo/Logo'

const Login = () => {
    return(
        <div id="home">
            <Logo/>
            <Container id = 'containerLogin'>
                <Form>
                    <FormGroup>
                        <Label for="usernameLogin">Username or email</Label>
                        <Input type="text" name="username" id="usernameLogin" placeholder="Enter your username or Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="passwordLogin">Password</Label>
                        <Input type="password" name="passwordLogin" id="passwordLogin" placeholder="Enter your password" />
                    </FormGroup>
                <Button color="primary" id = "LoginButton">Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Login;