import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./HospitalComponents/HospitalStyle.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";


function ConsentRequest() {

  const token = localStorage.getItem('practitionerAuthToken');
  const headers = { Authorization: `Bearer ${token}` };
  const id = localStorage.getItem('id');

  const navigate = useNavigate();
  const [consentId, setConsentId] = useState('');

  const [patientAadhar, setPatientAadhar] = useState('');
  const [diseaseName, setDiseaseName] = useState('');
  const [status, setStatus] = useState('pending');

  const [hospitals, setHospitals] = useState([]);
  const [hospitalId, setHospitalId] = useState('');


  const [patientDetails, setPatient] = useState([]);

  useEffect(() => {
    if (token === null) {
      navigate("/DoctorLogin");
    }
    else {
      axios.get(`http://localhost:9099/hospital/getPatientsByPractitionerAadhar/${id}`, { headers }).then((response) => {
        setPatient(response.data);
      });

      axios.get("http://localhost:9099/hospital/admin-login/hospital-list", { headers }).then((response) => {
        setHospitals(response.data);
      });
    }



  }, []);




  function isNotEmpty(str) {
    return str.trim().length !== 0;

  }
  function containsOnlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]+$/.test(str);
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const consentDetails = { consentId: consentId, hospitalId: hospitalId, practitionerAadhar: id, patientAadhar: patientAadhar, diseaseName: diseaseName, status: status };
    if (isNotEmpty(hospitalId) && isNotEmpty(patientAadhar) && containsOnlyLettersAndSpaces(diseaseName)) {
      axios.post('http://localhost:9099/hospital/request-consent', consentDetails,{headers})
        .then(response => console.log(response))
        .catch(error => console.log("this is an error!"));
      navigate("/DoctorDashboard");
    }
    else {
      toast.error('Please fill in all the required fields with valid input.',
        { position: toast.POSITION.TOP_CENTER });

    }

  };




  return (
    <>


      <Container>
        <ToastContainer />
        <center><h1 className='pageheading'>Request Consent</h1></center>

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicText" >
            {/* <Form.Label>Consent Id</Form.Label> */}
            <Form.Control type="hidden" placeholder="Consent Id" value={consentId} onChange={(event) => setConsentId(event.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Hospital Name</Form.Label>
            <Form.Control as="select" value={hospitalId} onChange={(event) => setHospitalId(event.target.value)} required={true}>
              <option value="">Hospital Name</option>
              {hospitals.map((hospital) => (
                <option key={hospital.id} value={hospital.hospitalId}>{hospital.hospitalName}</option>
              ))}
            </Form.Control>
          </Form.Group>



          <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Patient Name</Form.Label>
            <Form.Control as="select" value={patientAadhar} onChange={(event) => setPatientAadhar(event.target.value)} required={true}>
              <option value="">Patient Name</option>
              {patientDetails.map((patient) => (
                <option key={patient.id} value={patient.patientAadhar}>{patient.patientName}</option>
              ))}
            </Form.Control>
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Disease Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Disease Name"
              value={diseaseName}
              onChange={(event) => setDiseaseName(event.target.value)}
              required={true}
              minLength={3}
              maxLength={50}
            />
            {!isNotEmpty(diseaseName) && <Form.Text className="text-danger">Please enter a disease name</Form.Text>}
            {isNotEmpty(diseaseName) && (diseaseName.length < 3 || diseaseName.length > 50) && <Form.Text className="text-danger">Disease name must be between 3 and 50 characters long</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" placeholder="Pending" readOnly={true} value={status} onChange={(event) => setStatus(event.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit"  >
            Request
          </Button>
        </Form>

      </Container>
    </>


  )

}

export default ConsentRequest;