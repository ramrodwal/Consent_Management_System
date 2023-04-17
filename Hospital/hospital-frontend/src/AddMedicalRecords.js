import React from 'react'
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./HospitalComponents/HospitalStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

function AddMedicalRecords() {
  const navigate = useNavigate();

  const [recordId, setRecordId] = useState('');
  const [patientAadhar, setPatientAadhar] = useState('');
  const [diseaseName, setDiseaseName] = useState('');
  const [record, setRecord] = useState('');
  const [hospitalId, setHospitalId] = useState({
    centralHospital: {
      hospitalId: ''
    }
  });



  const [practitionerAadhar, setDoctorId] = useState({
    medicalPractitioner: {
      practitionerAadhar: ''
    }
  });

  const [hospitals, setHospitals] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatient]=useState([]);

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
  function isNotEmpty(value) {
    return value.trim().length !== 0;
  }
  useEffect(() => {
    axios.get("http://localhost:9099/hospital/admin-login/hospital-list").then((response) => {
      setHospitals(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:9099/hospital/admin-login/practitioner-list").then((response) => {
      setDoctors(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:9099/hospital/get-patients").then((response) => {
      setPatient(response.data);
    });
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    const recordDetails = { recordId: recordId, patientAadhar: patientAadhar, diseaseName: diseaseName, record: record, centralHospital: { hospitalId: hospitalId.centralHospital.hospitalId }, medicalPractitioner: { practitionerAadhar: practitionerAadhar.medicalPractitioner.practitionerAadhar } };
    if(isValidAadhar(patientAadhar) && isNotEmpty(diseaseName) && containsOnlyLettersAndSpaces(diseaseName) && isNotEmpty(record)){
      axios.post('http://localhost:9099/hospital/practitioner-login/add-record', recordDetails)
      .then(response => console.log(response))
      .catch(error => console.log("There is an error!!"));
    const hid = hospitalId.centralHospital.hospitalId;
    const patient = {
      fname: "vartika", mname: " ", lname: "chaturvedi", age: 23, gender: "female", email: "vartika@gmail.com",
      contactNo: "2345123456", state: "karnataka", city: "bangalore", zipcode: "560100", address: "electronic ",
      patientAadhar: patientAadhar, username: "vartika", password: "qwerty12", confirmPassword: "qwerty12"
    };
    const recordDetail = { hospitalId: hid, patient: patient };
    axios.post('http://localhost:8765/records/meta-data', recordDetail)
      .then(response => console.log(response))
      .catch(error => console.log("There is an error!!"));

      navigate("/DoctorDashboard");
    }
    else {
      toast.error('Please fill in all the required fields with valid input.',
         { position: toast.POSITION.TOP_CENTER});
      
      }
    
  };

 


  return (
    <>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="/ConsentRequest">Request Consent</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/ViewConsent">View Consent</Nav.Link>
          </Nav>
          <Nav className="me-auto">

            <Nav.Link href="/AddMedicalRecords">Add Medical Records</Nav.Link>

          </Nav>
          <Nav pullRight>
            <Nav.Link href="/DoctorLogin" >Logout</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Navbar>

      <center><h1 className='pageheading'>Add Medical Records</h1></center>
      <Container className='formcontainer'>
        <ToastContainer />
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicText" >
            <Form.Control type="hidden" placeholder="Record Id" value={recordId} onChange={(event) => setRecordId(event.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Patient Name</Form.Label>
            <Form.Control as="select" value={patientAadhar} onChange={(event) => setPatientAadhar(event.target.value)}>
              <option>Patient Name</option>
              {patients.map((patient) => (
                <option value={patient.patientAadhar}>{patient.patientName}</option>
              ))}
            </Form.Control>
            </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Disease Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Disease" value={diseaseName} onChange={(event) => setDiseaseName(event.target.value)} required={true} pattern="[A-Za-z ]+" title="Please enter a valid disease name" />
            {!isNotEmpty(diseaseName) && <Form.Text className="text-danger">Please enter a disease name</Form.Text>}
            {isNotEmpty(diseaseName) && !/^[A-Za-z ]+$/.test(diseaseName) && <Form.Text className="text-danger">Please enter a valid disease name</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Prescription</Form.Label>
            <Form.Control type="text" placeholder="Prescription" value={record} onChange={(event) => setRecord(event.target.value)} minLength={5} maxLength={1000} required={true} pattern="^[a-zA-Z0-9 .,-/()\n]+$" title="Please enter a valid prescription" />
            {!isNotEmpty(record) && <Form.Text className="text-danger">Please enter a prescription</Form.Text>}
            {isNotEmpty(record) && (record.length < 5 || record.length > 1000) && <Form.Text className="text-danger">Please enter a prescription between 5 and 1000 characters</Form.Text>}
            {isNotEmpty(record) && !/^[a-zA-Z0-9 .,-/()\n]+$/.test(record) && <Form.Text className="text-danger">Please enter a valid prescription</Form.Text>}
          </Form.Group>



          <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Hospital Name</Form.Label>
            <Form.Control as="select"  value={hospitalId.centralHospital.hospitalId} onChange={(event) => setHospitalId({ centralHospital: { hospitalId: event.target.value } })} required={true}>
              <option value="">Hospital Name</option>
              {hospitals.map((hospital) => (
                <option key={hospital.id} value={hospital.hospitalId}>{hospital.hospitalName}</option>
              ))}
            </Form.Control>
            {hospitalId.centralHospital.hospitalId === "" && <Form.Text className="text-danger">Please select a hospital id</Form.Text>}
          </Form.Group>


          <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Doctor Id</Form.Label>
            <Form.Control as="select" value={practitionerAadhar.medicalPractitioner.practitionerAadhar} onChange={(event) => setDoctorId({ medicalPractitioner: { practitionerAadhar: event.target.value } })} required={true}>
              <option value="">Doctor Id</option>
              {doctors.map((doctor) => (
                <option key={doctor.id}>{doctor.practitionerAadhar}</option>
              ))}
            </Form.Control>
            {!practitionerAadhar.medicalPractitioner.practitionerAadhar && (
              <Form.Text className="text-danger">
                Please select a doctor id
              </Form.Text>
            )}
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