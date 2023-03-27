import React from 'react'
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./HospitalComponents/HospitalStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState } from 'react';
import axios from "axios";

function AddMedicalRecords(){

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

        <center><h1 className='pageheading'>Add Medical Records</h1></center>
        <Container>
            <Form onSubmit={handleSubmit}>
    
    <Form.Group className="mb-3" controlId="formBasicText" >
    <Form.Label>Hospital Id</Form.Label>
    <Form.Control type="text" placeholder="Hospital Id" value={fname}  onChange={(event) => setFname(event.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText" >
    <Form.Label>Doctor Id</Form.Label>
    <Form.Control type="text" placeholder="Doctor Id" value={mname}  onChange={(event) => setMname(event.target.value)}/>
    </Form.Group>
    
    
    <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Patient Id</Form.Label>
    <Form.Control type="text" placeholder="Patient Id" value={address}  onChange={(event) => setAddress(event.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Record Id</Form.Label>
    <Form.Control type="text" placeholder="Record Id" value={state}  onChange={(event) => setState(event.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Disease Id</Form.Label>
    <Form.Control type="text" placeholder="Disease Id" value={city}  onChange={(event) => setCity(event.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Disease</Form.Label>
    <Form.Control type="text" placeholder="Enter Disease" value={zip}  onChange={(event) => setZip(event.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Record</Form.Label>
    <Form.Control type="text" placeholder="Record" value={zip}  onChange={(event) => setZip(event.target.value)}/>
    </Form.Group>
   
    
  <center>
    <Button variant="primary" type="submit" >
      Submit
    </Button>
    </center>
  </Form>
  
  </Container>
        </>
    )
}

export default AddMedicalRecords;