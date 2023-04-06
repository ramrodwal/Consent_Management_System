import React,{ useState ,useEffect} from 'react';
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./HospitalComponents/HospitalStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";


function ConsentRequest() {

  const navigate = useNavigate();
  const [consent_id, setConsentId] = useState('');
  const [hospital_id, setHospitalId] = useState('');
  const [practitioner_aadhar, setPractitionerAadhar] = useState('');
  const [patient_aadhar, setPatientAadhar] = useState('');
  const [disease_name, setDiseaseName] = useState('');
  const [status, setStatus] = useState('pending');
  const [patientDetails, setDetails]=useState([]);

  useEffect(() => {
    axios.get("http://localhost:9099/hospital/get-patients").then((response) => {
      setDetails(response.data);
    });
  }, []);

  function isNotEmpty(str) {
    return str.trim().length !== 0;

  }
  function containsOnlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]+$/.test(str);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const consentDetails = { consent_id: consent_id, hospital_id: hospital_id, practitioner_aadhar: practitioner_aadhar, patient_aadhar: patient_aadhar, disease_name: disease_name, status: status };
   if(isNotEmpty(hospital_id) && isNotEmpty(practitioner_aadhar) && isNotEmpty(patient_aadhar) && containsOnlyLettersAndSpaces(disease_name)){
    axios.post('http://localhost:9092/hospital/practitioner-login/view-patient/consent', consentDetails)
    .then(response => console.log(response))
    .catch(error => console.log("this is an error!"));
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

      <Container>
        <ToastContainer />
        <center><h1 className='pageheading'>Request Consent</h1></center>

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicText" >
             {/* <Form.Label>Consent Id</Form.Label> */}
  <Form.Control type="hidden"  placeholder="Consent Id" value={consent_id}  onChange={(event) => setConsentId(event.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText" >
            <Form.Label>Hospital Id</Form.Label>
            <Form.Control type="text" placeholder="Hospital Id" value={hospital_id} onChange={(event) => setHospitalId(event.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Practitioner Aadhar</Form.Label>
            <Form.Control type="text" placeholder="Practitioner Aadhar" value={practitioner_aadhar} onChange={(event) => setPractitionerAadhar(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Patient Id</Form.Label>
            <Form.Control as="select" value={patient_aadhar} onChange={(event) => setPatientAadhar(event.target.value)}>
              <option value="">Patient Id</option>
              {patientDetails.map((patient) => (
                <option key={patient.id}>{patient.patientAadhar}</option>
              ))}
            </Form.Control>
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Disease Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Disease Name" 
          value={disease_name} 
          onChange={(event) => setDiseaseName(event.target.value)}
          required={true}
          minLength={3}
          maxLength={50}
        />
        {!isNotEmpty(disease_name) && <Form.Text className="text-danger">Please enter a disease name</Form.Text>}
        {isNotEmpty(disease_name) && (disease_name.length < 3 || disease_name.length > 50) && <Form.Text className="text-danger">Disease name must be between 3 and 50 characters long</Form.Text>}
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