import React from 'react'
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./HospitalComponents/HospitalStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState ,useEffect } from 'react';
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
  const [doctors,setDoctors]=useState([]);

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


  const handleSubmit = (event) => {
    event.preventDefault();
    const recordDetails = { record_id: record_id, patient_aadhar: patient_aadhar, disease_name: disease_name, record: record, centralHospital: { hospital_id: hospital_id.centralHospital.hospital_id }, medicalPractitioner: { practitioner_aadhar: doctor_id.medicalPractitioner.practitioner_aadhar } };
    axios.post('http://localhost:9099/hospital/practitioner-login/add-record', recordDetails)
      .then(response => console.log(response))
      .catch(error => console.log("There is an error!!"));
  }



  return (
    <>

      <center><h1 className='pageheading'>Add Medical Records</h1></center>
      <Container className='formcontainer'>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicText" >
            <Form.Control type="hidden" placeholder="Record Id" value={record_id} onChange={(event) => setRecordId(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Patient Id</Form.Label>
            <Form.Control type="text" placeholder="Patient Id" value={patient_aadhar} onChange={(event) => setPatientAadhar(event.target.value)} />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Disease Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Disease" value={disease_name} onChange={(event) => setDiseaseName(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Record</Form.Label>
            <Form.Control type="text" placeholder="Record" value={record} onChange={(event) => setRecord(event.target.value)} />
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

          <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Doctor Id</Form.Label>
            <Form.Control as="select" value={doctor_id.medicalPractitioner.practitioner_aadhar} onChange={(event) => setDoctorId({ medicalPractitioner: { practitioner_aadhar: event.target.value } })} >
              <option value="">Doctor Id</option>
              {doctors.map((doctor) => (
                <option key={doctor.id}>{doctor.practitioner_aadhar}</option>
              ))}
            </Form.Control>
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