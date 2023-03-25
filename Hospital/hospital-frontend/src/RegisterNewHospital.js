import React from 'react';
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./HospitalComponents/HospitalStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState } from 'react';
import axios from "axios";

function RegisterNewHospital(){

    const [fname, setFname ]= useState();
    const [mname, setMname] = useState('');
    const [lname, setLname] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      const patient = { fname: fname, mname: mname , lname: lname, dob: dob,email:email, username:username, phone:phone, address:address, state: state, city:city, zip:zip, 
      aadhar:aadhar, password:password, confirmPassword:confirmPassword };
      axios.post('http://localhost:9090/api/patients', patient)
          .then(response => console.log(response))
          .catch(error => console.log(error));
  }

    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <Navbar.Brand href="/AdminPostLogin"><img
              alt=""
              src="https://cdn.imgbin.com/21/4/22/imgbin-computer-icons-login-user-system-administrator-admin-L1LTfM47FsD3A2gus0rdy8WpJ.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}Admin</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/RegisterNewHospital">Register New Hospital</Nav.Link>
          <Nav.Link href="/RegisterNewDoctor">Register New Doctor</Nav.Link>
          <Nav.Link href="/HospitalList">Hospital List</Nav.Link>
          <Nav.Link href="/DoctorList">Doctors' List</Nav.Link>
          
        </Nav>
        <Nav>
          <Nav.Link href="/HospitalHome">Logout</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>
        
        <Container>
                <h1>Register New Hospital:</h1>
    <Container className='topCentre'>
    <center><Card className='toplogo'>
      <Card.Img src="https://i.pinimg.com/originals/ea/d0/a4/ead0a499fb2caba4fe1107c1c465bbc6.png" />
  </Card>
  </center>
  
    </Container>
  
  
  <Form onSubmit={handleSubmit}>
    
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>Hospital Name</Form.Label>
  <Form.Control type="text" placeholder="Hospital Name" value={fname}  onChange={(event) => setFname(event.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>Contact Number</Form.Label>
  <Form.Control type="text" placeholder="Contact Number" value={mname}  onChange={(event) => setMname(event.target.value)}/>
  </Form.Group>
  
  
  <Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>Address</Form.Label>
  <Form.Control type="text" placeholder="Enter Address" value={address}  onChange={(event) => setAddress(event.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>State</Form.Label>
  <Form.Control type="text" placeholder="Enter State" value={state}  onChange={(event) => setState(event.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>City</Form.Label>
  <Form.Control type="text" placeholder="Enter City" value={city}  onChange={(event) => setCity(event.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>Zip Code</Form.Label>
  <Form.Control type="text" placeholder="Enter Zip Code" value={zip}  onChange={(event) => setZip(event.target.value)}/>
  </Form.Group>

  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>

</Container>
</>

    )
}

export default RegisterNewHospital;