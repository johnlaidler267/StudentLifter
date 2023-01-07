//React components
import React, { useState } from 'react';
import { Card, Container, Button, Form, FloatingLabel } from 'react-bootstrap';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login logic here
    };
    return (
        <Container style={{ width: "80%", height: "85%", backgroundColor: "white", display: "flex", justifyContent: "center" }}>
            <Card style={{ width: "90%", height: "100%", padding: "50px", border: "none" }}>
                <h5><b>CREATE AN ACCOUNT</b></h5>
                <p style={{ fontSize: "10px" }}>Sign up and you’ll be able to manage your account, track orders, save products and access easier returns</p>
                <form onSubmit={handleSubmit}>
                    <h9 style={{ fontSize: "10px" }}>EMAIL* </h9>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <h9 style={{ fontSize: "10px" }}>PASSWORD* </h9>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <h9 style={{ fontSize: "10px" }}>GENDER* </h9>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Gender"
                        className="mb-3"
                    >
                        <Form.Select aria-label="Floating label select example">
                            <option>Choose Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Prefer Not To Say</option>

                        </Form.Select>
                    </FloatingLabel>
                    <h9 style={{ fontSize: "10px" }}>DATE OF BIRTH* </h9>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="date"
                        className="mb-3"
                    >
                        <Form.Control type="date" name='date_of_birth' />
                    </FloatingLabel>
                    <h9 style={{ fontSize: "10px" }}>FIRST NAME* </h9>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <h9 style={{ fontSize: "10px" }}>LAST NAME* </h9>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="I wish to receive email marketing from StudentLifter."
                        style={{ fontSize: "12px" }}
                    />
                    <br />
                    <p style={{ fontSize: "10px" }}>By creating your account, you agree to our Terms and Conditions. For full details of how and why Gymshark uses your personal information, please see our Privacy Notice.</p>
                    <br />
                    <Button variant="dark" style={{ width: "300px", fontSize: "15px" }}>CREATE ACCOUNT</Button>
                    <br></br>
                    <br></br>
                </form>


            </Card >
        </Container >
    );
}

export default Register;