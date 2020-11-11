import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Register({
    name,
    nameError,
    onNameChange,
    email,
    emailError,
    onEmailChange,
    password,
    passwordError,
    onPasswordChange,
    passwordConfirmation,
    onPasswordConfirmationChange,
    onRegisterClick
}) {
    return (
        <div className="container">
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" placeholder="Your name" value={name} onChange={onNameChange} />
                            <p className="text-danger">{nameError}</p>
                        </FormGroup>
                    </Col>
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
                    <Col md={6}>
                        <FormGroup>
                            <Label for="password_confirmation">Password Confirmation</Label>
                            <Input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirm your password" value={passwordConfirmation} onChange={onPasswordConfirmationChange} />
                        </FormGroup>
                    </Col>
                </Row>
                <Button color="success" onClick={onRegisterClick}>Register</Button>
            </Form>
        </div>
    );
}

export default Register;
