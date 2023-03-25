import React from 'react';
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./HospitalComponents/HospitalStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState } from 'react';
import axios from "axios";

function BookAppointmentDoctor(){const [fname, setFname ]= useState();
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
      
      <Navbar.Brand href="/HospitalHome"><img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGgyT3J650KbeCUJAxvyYv7xwkd_5F1i108zeySI&s"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}Hospital Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/BookAppointmentDoctor">Book Appointment</Nav.Link>
          <Nav.Link href="/DoctorLogin">Doctors' Login</Nav.Link>
          <Nav.Link href="/AdminLogin">Admin Login</Nav.Link>
          
          
        </Nav>
        
      </Navbar.Collapse>
    
  </Navbar>
            <div className='pageheading'>
            <center><h1>Book Appointment</h1></center>
            </div>
        
        <Container>

            <Form.Group controlId="formBasicSelect">
        <Form.Label>Hospital List</Form.Label>
        <Form.Control as="select" value={gender} onChange={(event) => setDob(event.target.value)}>
          <option value="Male">Hospital One</option>
          <option value="Female">Hospital Two</option>
          <option value="Others">Hospital Three</option>
        </Form.Control>
      </Form.Group><br></br>

            <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>Patient Id</Form.Label>
  <Form.Control type="text" placeholder="Enter Patient Id" value={fname}  onChange={(event) => setFname(event.target.value)}/>
  </Form.Group>
  
  <Button variant="primary" type="submit" >
    Book
  </Button>
  </Container>


  
  
        </>
    );
}

export default BookAppointmentDoctor;