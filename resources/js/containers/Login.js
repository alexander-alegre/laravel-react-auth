import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Login({ email, emailError, onEmailChange, password, passwordError, onPasswordChange, onLoginClick }) {
    return (
        <div className="container">
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Your email" value={email} onChange={onEmailChange} />
                            <p className="text-danger">{emailError}</p>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Your password" value={password} onChange={onPasswordChange} />
                            <p className="text-danger">{passwordError}</p>
                        </FormGroup>
                    </Col>
                </Row>
                <Button color="success" onClick={onLoginClick}>Sign in</Button>
            </Form>
        </div>
    );
}

export default Login;
