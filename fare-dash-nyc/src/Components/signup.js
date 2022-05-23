import { Row, Button, Label, Input, FormGroup, Col, Form } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8081/register";

function SignUp() {
  const navigate = useNavigate()
  const [signupForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    displayName: "",
  });
  const handleSignupFormChange = (event) => {
    event.preventDefault();
    setSignUpForm({
      ...signupForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(signupForm),
    });
    const data = await response.json();
    console.log(data.token)
    navigate("/explore", {replace: true})
  };


  return (
    <div>
      <Form onSubmit={handleRegistration}>
        <h1>CREATE ACCOUNT</h1>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                onChange={handleSignupFormChange}
                id="firstNae"
                name="firstName"
                placeholder="enter first name"
                type="name"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                onChange={handleSignupFormChange}
                id="lastName"
                name="lastName"
                placeholder="enter last name"
                type="name"
              />
            </FormGroup>
          </Col>
        </Row>

        <Col md={6}>
          <FormGroup>
            <Label for="displayName">Display Name</Label>
            <Input
              onChange={handleSignupFormChange}
              id="displayName"
              name="displayName"
              placeholder="enter your display name"
              type="displayName"
            />
          </FormGroup>
        </Col>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                onChange={handleSignupFormChange}
                id="email"
                name="email"
                placeholder="example@gmail.com"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                onChange={handleSignupFormChange}
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
              />
            </FormGroup>
          </Col>
        </Row>

          <Button type="submit" >Create Account</Button>
      </Form>
    </div>
  );
}

export default SignUp;
