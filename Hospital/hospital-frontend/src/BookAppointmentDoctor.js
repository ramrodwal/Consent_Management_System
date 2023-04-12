import React from 'react';
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./HospitalComponents/HospitalStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BookAppointmentDoctor() {
  const navigate = useNavigate();

  const [patientAadhar, setPatientId] = useState('');
  const [patientName,setPatientName]=useState('');
  const [practitionerName,setPractitionerName]=useState('');
  const [hospitals, setHospitals] = useState([]);
  const [hospitalId, setHospitalId] = useState({
    centralHospital1: {
      hospitalId: ''
    }
  });

  useEffect(() => {
    axios.get("http://localhost:9099/hospital/admin-login/hospital-list").then((response) => {
      setHospitals(response.data);
    });
  }, []);

 

  const isNotEmpty = (value) => {
    return value.trim().length > 0;
  }

  function isValidAadhar(aadharNumber) {
    // Validate length
    if (aadharNumber.length !== 12) {
      return false;
    }
    return true;
  }

  function containsOnlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]+$/.test(str);
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    const patient = { centralHospital1: { hospital_id: hospital_id.centralHospital1.hospital_id }, patientAadhar: patientAadhar };
    if(isNotEmpty(hospital_id.centralHospital1.hospital_id) && isValidAadhar(patientAadhar) &&containsOnlyLettersAndSpaces(patientName) 
    && containsOnlyLettersAndSpaces(practitionerName)){

      axios.post('http://localhost:9099/hospital/add-patient', patient)
      .then(response => console.log(response))
      .catch(error => console.log(error));
      navigate("/");
    }
   else {
    toast.error('Please fill in all the required fields with valid input.',
       { position: toast.POSITION.TOP_CENTER});
    
    }
  };

  return (
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
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Hospital Name</Form.Label>
            <Form.Control as="select" value={hospitalId.centralHospital1.hospitalId} onChange={(event) => setHospitalId({ centralHospital1: { hospitalId: event.target.value } })}>
              <option>Hospital Name</option>
              {hospitals.map((hospital) => (
                <option value={hospital.hospitalId}>{hospital.hospitalName}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <br></br>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Patient Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Aadhar Card Number"
              value={patientAadhar}
              onChange={(event) => setPatientId(event.target.value)}
              required={true}
              pattern="[0-9]{12}"
              title="Please enter a valid patient Id"
            />
            {!isNotEmpty(patientAadhar) && <Form.Text className="text-danger">Please enter a Patient Id</Form.Text>}
            {isNotEmpty(patientAadhar) && !isValidAadhar(patientAadhar) && (
              <Form.Text className="text-danger">Please enter a valid patient Id</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Patient Name</Form.Label>
          <Form.Control
              type="text"
              placeholder="Enter Patient Name"
              value={patientName}
              onChange={(event) => setPatientName(event.target.value)}
              required={true}
              title="Please enter a valid patient Id"
            />
            {!isNotEmpty(patientName) && <Form.Text className="text-danger">Please enter a Patient Name</Form.Text>}
            {isNotEmpty(patientName) && !isValidAadhar(patientName) && !containsOnlyLettersAndSpaces(patientName) && (
              <Form.Text className="text-danger">Please enter a valid patient Name</Form.Text>
            )}
            </Form.Group>
          <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Practitioner Name</Form.Label>
            <Form.Control as="select" value={practitionerName} onChange={(event) => setPractitionerName(event.target.value)}>
              <option>Practitioner Name</option>
              {/* {practioners.map((practitionerName) => (
                <option value={practionerAadhar}>{practitionerName}</option>
              ))} */}
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" >
            Book
          </Button>
        </form>
      </Container>




    </>
  );
}

export default BookAppointmentDoctor;