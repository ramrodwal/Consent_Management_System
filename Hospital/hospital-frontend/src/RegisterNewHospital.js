import React from 'react';
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./HospitalComponents/HospitalStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

import { useState } from 'react';
import axios from "axios";

function RegisterNewHospital() {


  const [hospital_id, setHospitalId] = useState('');
  const [hospital_name, setHospitalName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const hospitalDetails = { hospital_id: hospital_id, hospital_name: hospital_name, contactNumber: contactNumber, state: state, city: city, address: address, zipcode: zipcode };
    axios.post('http://localhost:9099/hospital/admin-login/register-hospital', hospitalDetails)
      .then(response => console.log(response))
      .catch(error => console.log("There is an error!!"));
  }

  const isNotEmpty = (value) => {
    return value.trim().length > 0;
  }

  const isValidZip = (zipcode) => {
    const isValidRegex = /^[0-9]{6}$/; // regular expression to check if the zipcode has 6 digits
    return isValidRegex.test(zipcode);
  };

  return (
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

            <Nav.Link href="/" className='navright'>Logout</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Navbar>

      <Container>
        <h1 className='pageheading'>Register New Hospital:</h1>
        <Container className='topCentre'>
          <center><Card className='toplogo'>
            <Card.Img src="https://i.pinimg.com/originals/ea/d0/a4/ead0a499fb2caba4fe1107c1c465bbc6.png" />
          </Card>
          </center>

        </Container>


        <Form onClick={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicText" >
            <Form.Control type="hidden" placeholder="Hospital id" value={hospital_id} onChange={(event) => setHospitalId(event.target.value)} />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Hospital Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Hospital Name" value={hospital_name} onChange={(event) => setHospitalName(event.target.value)} required minLength={2} maxLength={50} />
            {!isNotEmpty(hospital_name) && <Form.Text className="text-danger">Please enter a hospital name</Form.Text>}
            {isNotEmpty(hospital_name) && (hospital_name.length < 2 || hospital_name.length > 50) && <Form.Text className="text-danger">Hospital name should be between 2 to 50 characters long</Form.Text>}
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter Contact Number"
              value={contactNumber}
              onChange={(event) => setContactNumber(event.target.value)}
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit contact number"
            />
            {!isNotEmpty(contactNumber) && <Form.Text className="text-danger">Please enter a contact number</Form.Text>}
            {isNotEmpty(contactNumber) && !/^[0-9]{10}$/.test(contactNumber) && <Form.Text className="text-danger">Please enter a valid 10-digit contact number</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Enter State" value={state} onChange={(event) => setState(event.target.value)} required={true} pattern="[A-Za-z ]+" title="Please enter a valid state name" />
            {!isNotEmpty(state) && <Form.Text className="text-danger">Please enter a state name</Form.Text>}
            {isNotEmpty(state) && !/^[A-Za-z ]+$/.test(state) && <Form.Text className="text-danger">Please enter a valid state name</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter City" value={city} onChange={(event) => setCity(event.target.value)} required={true} pattern="^[A-Za-z\s]+$" title="Please enter a valid city name" />
            {!isNotEmpty(city) && <Form.Text className="text-danger">Please enter a city name</Form.Text>}
            {isNotEmpty(city) && !/^[A-Za-z\s]+$/.test(city) && <Form.Text className="text-danger">Please enter a valid city name</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" value={address} onChange={(event) => setAddress(event.target.value)} required = {true} />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Enter Zip Code" value={zipcode} onChange={(event) => setZipcode(event.target.value)} />
          </Form.Group> */}

<Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="number" placeholder="Enter Zip Code" value={zipcode} onChange={(event) => setZipcode(event.target.value)} required={true} />
          {!isValidZip(zipcode) && <Form.Text className="text-danger">Please enter a valid zip code with 6 digits</Form.Text>}
        </Form.Group>

          <Link to='/AdminPostLogin'>
            <Button variant="primary" type="submit"  >
              Submit
            </Button>
          </Link>

        </Form>

      </Container>
    </>

  )
}

export default RegisterNewHospital;