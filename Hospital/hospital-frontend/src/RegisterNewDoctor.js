import React from 'react';
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./HospitalComponents/HospitalStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState ,useEffect} from 'react';
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
            <Nav.Link href="/DoctorList">Doctors' List</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="/">Logout</Nav.Link>

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

          <Form.Group className="mb-3" controlId="formBasicText" >
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" value={fname} onChange={(event) => setFname(event.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText" >
            <Form.Label>Middle Name</Form.Label>
            <Form.Control type="text" placeholder="Middle Name" value={mname} onChange={(event) => setMname(event.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText" >
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" value={lname} onChange={(event) => setLname(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText" id="formsamerow">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Age" value={age} onChange={(event) => setAge(event.target.value)} />
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
            <Form.Control type="text" placeholder="Email" value={email} required="email" onChange={(event) => setEmail(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" value={number} onChange={(event) => setNumber(event.target.value)} />
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
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" value={address} onChange={(event) => setAddress(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Enter Zip Code" value={zipcode} onChange={(event) => setZipcode(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Aadhar Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Aadhar Card Number" value={practitioner_aadhar} onChange={(event) => setAadhar(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Medical License id</Form.Label>
            <Form.Control type="text" placeholder="Medical License Id" value={medical_license_id} onChange={(event) => setMedicalLicense(event.target.value)} />
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
            <Form.Control type="text" placeholder="Qualification" value={qualification} onChange={(event) => setQualification(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />
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