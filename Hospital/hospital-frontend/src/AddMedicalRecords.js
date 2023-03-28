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

   
  
    return(
        <>

        <center><h1 className='pageheading'>Add Medical Records</h1></center>
        <Container className='formcontainer'>
            <Form>
    
    <Form.Group className="mb-3" controlId="formBasicText" >
    <Form.Label>Hospital Id</Form.Label>
    <Form.Control type="text" placeholder="Hospital Id" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText" >
    <Form.Label>Doctor Id</Form.Label>
    <Form.Control type="text" placeholder="Doctor Id" />
    </Form.Group>
    
    
    <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Patient Id</Form.Label>
    <Form.Control type="text" placeholder="Patient Id" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Record Id</Form.Label>
    <Form.Control type="text" placeholder="Record Id" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Disease Id</Form.Label>
    <Form.Control type="text" placeholder="Disease Id" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Disease</Form.Label>
    <Form.Control type="text" placeholder="Enter Disease" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Record</Form.Label>
    <Form.Control type="text" placeholder="Record" />
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