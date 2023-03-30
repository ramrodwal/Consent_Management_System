import React from 'react';
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./HospitalComponents/HospitalStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import axios from "axios";

function BookAppointmentDoctor(){
  const [patient_id, setPatientId] = useState('');
  const [hospital_id, setHospitalId] = useState({hospital_id: ''});
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9099/hospital/admin-login/hospital-list").then((response) => {
      setHospitals(response.data);
    });
  }, []);

    const handleSubmit = (event) => {
      event.preventDefault();
      const patient = { hospital_id: hospital_id };
      axios.post('http://localhost:9090/api/patients', patient)
          .then(response => console.log(response))
          .catch(error => console.log(error));
  }



    return(
        <>
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <Navbar.Brand href="/"><img
              alt=""
              src="/HospitalHome.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}Hospital Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/BookAppointmentDoctor">Book Appointment</Nav.Link>
          <Nav.Link href="/DoctorLogin">Practitioner's Login</Nav.Link>
          <Nav.Link href="/AdminLogin">Admin Login</Nav.Link>
          
          
        </Nav>
        
      </Navbar.Collapse>
    
  </Navbar>
            <div className='pageheading'>
            <center><h1>Book Appointment</h1></center>
            </div>
        
        <Container>

        <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Hospital Id</Form.Label>
            <Form.Control as="select" value={hospital_id} onChange={(event) => setHospitalId({ hospital_id: event.target.value } )} >
              <option value="">Hospital Id</option>
              {hospitals.map((hospital) => (
                <option key={hospital.id}>{hospital_id}</option>
              ))}
            </Form.Control>
          </Form.Group>
      <br></br>

            <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>Patient Id</Form.Label>
  <Form.Control type="text" placeholder="Enter Patient Id" value={patient_id}  onChange={(event) => setPatientId(event.target.value)}/>
  </Form.Group>
  
  <Button variant="primary" type="submit" >
    Book
  </Button>
  </Container>


  
  
        </>
    );
}

export default BookAppointmentDoctor;