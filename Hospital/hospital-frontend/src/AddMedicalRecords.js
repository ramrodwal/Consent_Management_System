import React from 'react'
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./HospitalComponents/HospitalStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState, useEffect } from 'react';
import axios from "axios";

function AddMedicalRecords() {

  const [record_id, setRecordId] = useState('');
  const [patient_aadhar, setPatientAadhar] = useState('');
  const [disease_name, setDiseaseName] = useState('');
  const [record, setRecord] = useState('');
  const [hospital_id, setHospitalId] = useState({
    centralHospital: {
      hospital_id: ''
    }
  });



  const [doctor_id, setDoctorId] = useState({
    medicalPractitioner: {
      practitioner_aadhar: ''
    }
  });

  const [hospitals, setHospitals] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatient]=useState([]);

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
    const recordDetails = { record_id: record_id, patient_aadhar: patient_aadhar, disease_name: disease_name, record: record, centralHospital: { hospital_id: hospital_id.centralHospital.hospital_id }, medicalPractitioner: { practitioner_aadhar: doctor_id.medicalPractitioner.practitioner_aadhar } };
    axios.post('http://localhost:9099/hospital/practitioner-login/add-record', recordDetails)
      .then(response => console.log(response))
      .catch(error => console.log("There is an error!!"));
    const hid = hospital_id.centralHospital.hospital_id;
    const patient = {
      fname: "vartika", mname: " ", lname: "chaturvedi", age: 23, gender: "female", email: "vartika@gmail.com",
      contactNo: "2345123456", state: "karnataka", city: "bangalore", zipcode: "560100", address: "electronic ",
      patient_aadhar: patient_aadhar, username: "vartika", password: "qwerty12", confirmPassword: "qwerty12"
    };
    const recordDetail = { hospital_id: hid, patient: patient };
    axios.post('http://localhost:8765/records/meta-data', recordDetail)
      .then(response => console.log(response))
      .catch(error => console.log("There is an error!!"));
  }

  function isNotEmpty(value) {
    return value.trim().length !== 0;
  }


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
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicText" >
            <Form.Control type="hidden" placeholder="Record Id" value={record_id} onChange={(event) => setRecordId(event.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Patient Id</Form.Label>
            <Form.Control as="select" value={patient_aadhar} onChange={(event) => setPatientAadhar(event.target.value)}>
              <option value="">Patient Id</option>
              {patients.map((patient) => (
                <option key={patient.id}>{patient.patient_aadhar}</option>
              ))}
            </Form.Control>
            </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Disease Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Disease" value={disease_name} onChange={(event) => setDiseaseName(event.target.value)} required={true} pattern="[A-Za-z ]+" title="Please enter a valid disease name" />
            {!isNotEmpty(disease_name) && <Form.Text className="text-danger">Please enter a disease name</Form.Text>}
            {isNotEmpty(disease_name) && !/^[A-Za-z ]+$/.test(disease_name) && <Form.Text className="text-danger">Please enter a valid disease name</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Prescription</Form.Label>
            <Form.Control type="text" placeholder="Prescription" value={record} onChange={(event) => setRecord(event.target.value)} minLength={5} maxLength={1000} required={true} pattern="^[a-zA-Z0-9 .,-/()\n]+$" title="Please enter a valid prescription" />
            {!isNotEmpty(record) && <Form.Text className="text-danger">Please enter a prescription</Form.Text>}
            {isNotEmpty(record) && (record.length < 5 || record.length > 1000) && <Form.Text className="text-danger">Please enter a prescription between 5 and 1000 characters</Form.Text>}
            {isNotEmpty(record) && !/^[a-zA-Z0-9 .,-/()\n]+$/.test(record) && <Form.Text className="text-danger">Please enter a valid prescription</Form.Text>}
          </Form.Group>



          <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Hospital Id</Form.Label>
            <Form.Control as="select" value={hospital_id.centralHospital.hospital_id} onChange={(event) => setHospitalId({ centralHospital: { hospital_id: event.target.value } })} required={true}>
              <option value="">Hospital Id</option>
              {hospitals.map((hospital) => (
                <option key={hospital.id}>{hospital.hospital_id}</option>
              ))}
            </Form.Control>
            {hospital_id.centralHospital.hospital_id === "" && <Form.Text className="text-danger">Please select a hospital id</Form.Text>}
          </Form.Group>


          <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Doctor Id</Form.Label>
            <Form.Control as="select" value={doctor_id.medicalPractitioner.practitioner_aadhar} onChange={(event) => setDoctorId({ medicalPractitioner: { practitioner_aadhar: event.target.value } })} required={true}>
              <option value="">Doctor Id</option>
              {doctors.map((doctor) => (
                <option key={doctor.id}>{doctor.practitioner_aadhar}</option>
              ))}
            </Form.Control>
            {!doctor_id.medicalPractitioner.practitioner_aadhar && (
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