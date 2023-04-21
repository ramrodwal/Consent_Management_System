import React from 'react'
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./HospitalComponents/HospitalStyle.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

function AddMedicalRecords() {
  const token = localStorage.getItem('practitionerAuthToken')
  const navigate = useNavigate();
  const headers = { Authorization: `Bearer ${token}` };


    const id=localStorage.getItem('id');
    const hid=localStorage.getItem('hospitalId');


  const [recordId, setRecordId] = useState('');
  const [patientAadhar, setPatientAadhar] = useState('');
  const [diseaseName, setDiseaseName] = useState('');
  const [record, setRecord] = useState('');
  const [hospitalId, setHospitalId] = useState({
    centralHospital: {
      hospitalId: hid
    }
  });



  const [practitionerAadhar, setDoctorId] = useState({
    medicalPractitioner: {
      practitionerAadhar: ''
    }
  });

  const [hospitals, setHospitals] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatient] = useState([]);

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

    if (token === null) {
      navigate("/DoctorLogin");
    }
    else {
      axios.get("http://localhost:9099/hospital/admin-login/hospital-list", { headers }).then((response) => {
        setHospitals(response.data);
      });

      axios.get("http://localhost:9099/hospital/admin-login/practitioner-list", { headers }).then((response) => {
        setDoctors(response.data);
      });

      axios.get(`http://localhost:9099/hospital/getPatientsByPractitionerAadhar/${id}`, { headers }).then((response) => {
        setPatient(response.data);
      });
    }




  }, []);




  const handleSubmit = (event) => {
    event.preventDefault();
    const recordDetails = { recordId: recordId, patientAadhar: patientAadhar, diseaseName: diseaseName, record: record, centralHospital: { hospitalId: hospitalId.centralHospital.hospitalId }, medicalPractitioner: { practitionerAadhar: id } };
    if (isValidAadhar(patientAadhar) && isNotEmpty(diseaseName) && containsOnlyLettersAndSpaces(diseaseName) && isNotEmpty(record)) {
      axios.post('http://localhost:9099/hospital/practitioner-login/add-record', recordDetails, { headers })

        .then(response => console.log(response))
        .catch(error => console.log("There is an error!!"));

      const patient = {
        fname: "vartika", mname: " ", lname: "chaturvedi", age: 23, gender: "female", email: "vartika@gmail.com",
        contactNo: "2345123456", state: "karnataka", city: "bangalore", zipcode: "560100", address: "electronic ",
        patientAadhar: patientAadhar, username: "vartika", password: "qwerty12", confirmPassword: "qwerty12"
      };
      const recordDetail = { hospitalId: hospitalId.centralHospital.hospitalId, patient: patient };
      axios.post('http://localhost:9099/hospital/add-metaData-patientSide', recordDetail,{headers})

        .then(response => console.log(response))
        .catch(error => console.log("There is an error!!"));

      navigate("/DoctorDashboard");
    }
    else {
      toast.error('Please fill in all the required fields with valid input.',
        { position: toast.POSITION.TOP_CENTER });

    }

  };




  return (
    <>



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