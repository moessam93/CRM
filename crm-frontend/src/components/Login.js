import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import Axios from 'axios';

const Login = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const loginUser = async (e) => {
        Axios({
            method: "POST",
            data: {
              email: loginEmail,
              password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/login",
          });
    }

    return (
        <div>
            <Form onSubmit={loginUser}>
                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setLoginEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-0" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>setLoginPassword(e.target.value)} />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login