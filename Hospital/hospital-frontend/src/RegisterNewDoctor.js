import React from 'react';
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./HospitalComponents/HospitalStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState, useEffect } from 'react';
import axios from "axios";



function RegisterNewDoctor() {


  const [fname, setFname] = useState();
  const [mname, setMname] = useState('');
  const [lname, setLname] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [practitioner_aadhar, setAadhar] = useState('');
  const [medical_license_id, setMedicalLicense] = useState('');
  const [specialisation, setSpecialisation] = useState('');
  const [qualification, setQualification] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hospital_id, setHospitalId] = useState({
    centralHospital: {
      hospital_id: ''
    }
  });

  const [hospitals, setHospitals] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:9099/hospital/admin-login/hospital-list").then((response) => {
      setHospitals(response.data);
    });
  }, []);



  const handleSubmit = (event) => {
    event.preventDefault();
    const practitionerDetails = {
      fname: fname, mname: mname, lname: lname, age: age, gender: gender, email: email, username: username, number: number, state: state, city: city, address: address,
      zipcode: zipcode, practitioner_aadhar: practitioner_aadhar, medical_license_id: medical_license_id, specialisation: specialisation, qualification: qualification, password: password, confirmPassword: confirmPassword, centralHospital: { hospital_id: hospital_id.centralHospital.hospital_id }
    };
    axios.post('http://localhost:9099/hospital/admin-login/signup', practitionerDetails)
      .then(response => console.log(response))
      .catch(error => console.log("There is an error!!"));
  }

  function isValidEmail(email) {
    // Regular expression for matching email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(number) {
    // Regular expression for matching 10-digit phone number format
    const phoneNumberRegex = /^[0-9]{10}$/;
    return phoneNumberRegex.test(number);
  }

  function isNotEmpty(str) {
    return str.trim() !== '';
  }

  function containsOnlyLetters(str) {
    return /^[A-Za-z]+$/.test(str);
  }

  function containsOnlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]+$/.test(str);
  }

  function isValidZipCode(zip) {
    const regex = /^\d{5}(?:[-\s]\d{4})?$/;
    return regex.test(zip);
  }

  function isValidAadharNumber(aadhar) {
    const aadharRegex = /^\d{12}$/;
    return aadharRegex.test(aadhar);
  }









  return (
    <>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Navbar.Brand href="/AdminPostLogin"><img
          alt=""
          src="/Admin.jpg"
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
            <Nav.Link href="/DoctorList">Practitioner's List</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="/AdminLogin">Logout</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <Container>

        <Container className='topCentre'>
          <center>
            <Card className='toplogo'>
              <Card.Img src="/NewDoctorSignup.jpg" />
            </Card>
          </center>
        </Container>
        <br></br>
        <br></br>

        <h1 class="forgotpass">Medical Practitioner's Sign-Up:</h1>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" value={fname} onChange={(event) => setFname(event.target.value)} required={true} pattern="[A-Za-z]+" title="Please enter only letters" maxLength={50} />
            {!fname && <Form.Text className="text-danger">Please enter a first name</Form.Text>}
            {fname && !/^[a-zA-Z]+$/.test(fname) && <Form.Text className="text-danger">Please enter only letters for the first name</Form.Text>}
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Middle Name" value={mname} onChange={(event) => setMname(event.target.value)} maxLength={50} />
            {mname && !/^[a-zA-Z]+$/.test(mname) && <Form.Text className="text-danger">Please enter only letters for the middle name</Form.Text>}
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" value={lname} onChange={(event) => setLname(event.target.value)} required={true} pattern="[A-Za-z]+" title="Please enter only letters" maxLength={50} />
            {!lname && <Form.Text className="text-danger">Please enter a last name</Form.Text>}
            {lname && !/^[a-zA-Z]+$/.test(lname) && <Form.Text className="text-danger">Please enter only letters for the last name</Form.Text>}
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText" id="formsamerow">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter Age" value={age} onChange={(event) => setAge(event.target.value)} min={1} max={120} />
            {(age < 21 || age > 120) && <Form.Text className="text-danger">Please enter a valid age between 21 and 120</Form.Text>}
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

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(event) => setEmail(event.target.value)} required={true} />
            {email && !isValidEmail(email) && <Form.Text className="text-danger">Please enter a valid email address</Form.Text>}
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} required={true} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter Phone Number" value={number} onChange={(event) => setNumber(event.target.value)} pattern="[0-9]{10}" title="Please enter a 10-digit phone number without any spaces or special characters" />
            {!isNotEmpty(number) && <Form.Text className="text-danger">Please enter a phone number</Form.Text>}
            {isNotEmpty(number) && !isValidPhoneNumber(number) && <Form.Text className="text-danger">Please enter a valid 10-digit phone number</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Enter State" value={state} onChange={(event) => setState(event.target.value)} required={true} pattern="[A-Za-z]+" title="Please enter only letters" />
            {!isNotEmpty(state) && <Form.Text className="text-danger">Please enter a state</Form.Text>}
            {isNotEmpty(state) && !containsOnlyLetters(state) && <Form.Text className="text-danger">Please enter only letters for the state</Form.Text>}
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter City" value={city} onChange={(event) => setCity(event.target.value)} required={true} pattern="[A-Za-z ]+" title="Please enter only letters and spaces" />
            {!isNotEmpty(city) && <Form.Text className="text-danger">Please enter a city</Form.Text>}
            {isNotEmpty(city) && !containsOnlyLettersAndSpaces(city) && <Form.Text className="text-danger">Please enter only letters and spaces for the city</Form.Text>}
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" value={address} onChange={(event) => setAddress(event.target.value)} required={true} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Enter Zip Code" value={zipcode} onChange={(event) => setZipcode(event.target.value)} required={true} pattern="^\d{5}(?:[-\s]\d{4})?$" title="Please enter a valid zip code" />
            {!isNotEmpty(zipcode) && <Form.Text className="text-danger">Please enter a zip code</Form.Text>}
            {isNotEmpty(zipcode) && !isValidZipCode(zipcode) && <Form.Text className="text-danger">Please enter a valid zip code</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Aadhar Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Aadhar Card Number" value={practitioner_aadhar} onChange={(event) => setAadhar(event.target.value)} />
            {!isNotEmpty(practitioner_aadhar) && <Form.Text className="text-danger">Please enter an Aadhar card number</Form.Text>}
            {isNotEmpty(practitioner_aadhar) && !isValidAadharNumber(practitioner_aadhar) && <Form.Text className="text-danger">Please enter a valid Aadhar card number</Form.Text>}
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Medical License id</Form.Label>
            <Form.Control type="text" placeholder="Medical License Id" value={medical_license_id} onChange={(event) => setMedicalLicense(event.target.value)} required={true} />
          </Form.Group>

          <Form.Group controlId="formBasicSelect">
            <Form.Label>Specialization</Form.Label>
            <Form.Control as="select" value={specialisation} onChange={(event) => setSpecialisation(event.target.value)}>
              <option value="none">select</option>
              <option value="Neuro">Neuro</option>
              <option value="Gyna">Gyna</option>
              <option value="Uro">Uro</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Qualification</Form.Label>
            <Form.Control type="text" placeholder="Qualification" value={qualification} onChange={(event) => setQualification(event.target.value)} maxLength={50} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required={true} minLength={8} />
            {!isNotEmpty(password) && <Form.Text className="text-danger">Please enter a password</Form.Text>}
            {isNotEmpty(password) && password.length < 8 && <Form.Text className="text-danger">Password must be at least 8 characters long</Form.Text>}
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required minLength={8} />
            {!isNotEmpty(confirmPassword) && <Form.Text className="text-danger">Please enter a password</Form.Text>}
            {isNotEmpty(confirmPassword) && confirmPassword !== password && <Form.Text className="text-danger">Passwords do not match</Form.Text>}
          </Form.Group>


          <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Hospital Id</Form.Label>
            <Form.Control as="select" value={hospital_id.centralHospital.hospital_id} onChange={(event) => setHospitalId({ centralHospital: { hospital_id: event.target.value } })} >
              <option value="">Hospital Id</option>
              {hospitals.map((hospital) => (
                <option key={hospital.id}>{hospital.hospital_id}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <br></br>

          <Button variant="success" type="submit" >
            Submit
          </Button>
        </Form>
        <br>
        </br>

      </Container>
    </>
  );

}

export default RegisterNewDoctor;