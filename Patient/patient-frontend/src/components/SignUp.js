import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';

import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import axios from "axios";

function SignUp() {



  const [fname, setFname] = useState('');
  const [mname, setMname] = useState('');
  const [lname, setLname] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');

  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZip] = useState('');
  const [address, setAddress] = useState('');
  const [patient_aadhar, setAadhar] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const patient = {
      fname: fname, mname: mname, lname: lname, age: age,gender:gender, email: email, username: username, contactNo: contactNo, address: address,
      state: state, city: city, zipcode: zipcode, patient_aadhar: patient_aadhar, password: password, confirmPassword: confirmPassword
    };
    axios.post('http://localhost:8765/patient/register', patient)
      .then(response => console.log(response))
      .catch(error => console.log("this is an error!!!"));
  }
  
  return (
    <Container>
      <Card>
        <Card.Img class="logo" src="logo.png" />
      </Card>
      <h1 class="forgotpass">Sign-Up:</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText" >
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" value={fname} onChange={(event) => setFname(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText" >
          <Form.Label>Middle Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Middle Name" value={mname} onChange={(event) => setMname(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText" >
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" value={lname} onChange={(event) => setLname(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicSelect">
        <Form.Label>Gender</Form.Label>
        <Form.Control as="select" value={gender} onChange={(event) => setGender(event.target.value)}>
          <option value="none">select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </Form.Control>
      </Form.Group>
        <Row id="shiftright">
          <Form.Group className="mb-3" controlId="formBasicText" id="formsamerow">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Age" value={age} onChange={(event) => setAge(event.target.value)} />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(event) => setUsername(event.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Phone Number" value={contactNo} onChange={(event) => setContactNo(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Enter Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Apartment number" value={address} onChange={(event) => setAddress(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="Enter State" value={state} onChange={(event) => setState(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter City" value={city} onChange={(event) => setCity(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="number" placeholder="Enter Zip Code" value={zipcode} onChange={(event) => setZip(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Aadhar Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Aadhar Card Number" value={patient_aadhar} onChange={(event) => setAadhar(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="text" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" href="/">
          Submit
        </Button>
      </Form>

    </Container>
  );

}

export default SignUp;