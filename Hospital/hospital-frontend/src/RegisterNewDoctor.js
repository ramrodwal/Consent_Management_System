import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./HospitalComponents/HospitalStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { auth } from './firebase.config';

import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import React, { useState, useEffect } from 'react';
import axios from "axios";


function RegisterNewDoctor() {

  const navigate = useNavigate();
  
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
  const [practitionerAadhar, setAadhar] = useState('');
  const [medicalLicenseId, setMedicalLicense] = useState('');
  const [specialisation, setSpecialisation] = useState('');
  const [qualification, setQualification] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hospitalId, setHospitalId] = useState({
    centralHospital: {
      hospitalId: ''
    }
  });

  //otp
  
  const [otp, setOTP] = useState();
  
  const [verified, setVerified] = useState(false);
  
  
  const onCaptchVerify=()=>{
    if(!window.recaptchaVerifier){
      window.recaptchaVerifier=new RecaptchaVerifier('recaptcha-container',{
        'size':'invisible',
        'callback':(response)=>{
          handleOTP();
        },
        'expired-callback':()=>{},
      },auth
      );
    }
  }

  const handleOTP = () => {
    onCaptchVerify();

    const appVerifier=window.recaptchaVerifier;
    const formatPh="+91"+number;
    signInWithPhoneNumber(auth,formatPh,appVerifier)
      .then((confirmationResult)=>{
        window.confirmationResult=confirmationResult;
        toast.success("Otp send successfull",{ position: toast.POSITION.TOP_CENTER })
      })
      .catch((error)=>{
        toast.error("Something went wrong , try again later",{ position: toast.POSITION.TOP_CENTER })
        console.log(error);
      })
    }
   
  
  const onSubmitOTP = () => {
    window.confirmationResult
      .confirm(otp)
      .then(async (res)=>{
        console.log(res);
        setVerified(true);
        toast.success("Otp verified successfull",{ position: toast.POSITION.TOP_CENTER })
      })
      .catch((error)=>{
        toast.error("Invalid Otp Entered",{ position: toast.POSITION.TOP_CENTER })
        console.log(error);
      })
  }
    //otp
    
    const [hospitals, setHospitals] = useState([]);


    useEffect(() => {
      axios.get("http://localhost:9099/hospital/admin-login/hospital-list").then((response) => {
        setHospitals(response.data);
      });
    }, []);


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
    const isValidAge = (value) => {
      return value >= 21;
    }
    function containsOnlyLetters(str) {
      return /^[A-Za-z]+$/.test(str);
    }

    function containsOnlyLettersAndSpaces(str) {
      return /^[A-Za-z\s]+$/.test(str);
    }

    function isValidZipCode(zip) {
      const regex = /^\d{6}(?:[-\s]\d{4})?$/;
      return regex.test(zip);
    }

    function isValidAadharNumber(aadhar) {
      const aadharRegex = /^\d{12}$/;
      return aadharRegex.test(aadhar);
    }


    const handleSubmit = (event) => {
      event.preventDefault();
      const practitionerDetails = {
        fname: fname, mname: mname, lname: lname, age: age, gender: gender, email: email, username: username, number: number, state: state, city: city, address: address,
        zipcode: zipcode, practitionerAadhar: practitionerAadhar, medicalLicenseId: medicalLicenseId, specialisation: specialisation, qualification: qualification, password: password, confirmPassword: confirmPassword, centralHospital: { hospitalId: hospitalId.centralHospital.hospitalId }
      };
      if (isValidEmail(email) && isValidPhoneNumber(number) && isValidAadharNumber(practitionerAadhar)
        && (password === confirmPassword) && containsOnlyLetters(fname) && containsOnlyLetters(lname)
        && containsOnlyLettersAndSpaces(specialisation) && isValidAge(age) && isValidZipCode(zipcode) && containsOnlyLettersAndSpaces(state)
        && containsOnlyLettersAndSpaces(city)) {

        axios.post('http://localhost:9099/hospital/admin-login/signup', practitionerDetails)
          .then(response => console.log(response))
          .catch(error => console.log("There is an error!!"));

        navigate("/");
      } else {
        toast.error('Please fill in all the required fields with valid input.',
          { position: toast.POSITION.TOP_CENTER });

      }
    };



    return (
      <>
        <ToastContainer />

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
              <Nav.Link href="/RegisterNewDoctor">Register New Practitioner</Nav.Link>
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
              {(age < 21) && <Form.Text className="text-danger">Please enter a valid age above 21 </Form.Text>}
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
              <Form.Label>Enter Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Phone Number" value={number} onChange={(event) => setNumber(event.target.value)} pattern="[0-9]{10}" title="Please enter a 10-digit phone number without any spaces or special characters" />
              <br/>
              <Button variant="success" type="submit" onClick={handleOTP}>Generate Otp</Button>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Enter Otp</Form.Label>
              <Form.Control type="text" placeholder="Enter Otp" value={otp} onChange={(event) => setOTP(event.target.value)} required={true}/>
              <br/>
              <Button variant="success" type="submit" onClick={onSubmitOTP}>Verify Otp</Button>
              {verified ? <h3 style={{ color: "green" }}>verified</h3> : <h3 style={{ color: "red" }}>Not verified</h3>}
            </Form.Group>

            <div id="recaptcha-container"></div>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter State" value={state} onChange={(event) => setState(event.target.value)} required={true} pattern="[A-Za-z]+" title="Please enter only letters" />
              {!isNotEmpty(state) && <Form.Text className="text-danger">Please enter a state</Form.Text>}
              {isNotEmpty(state) && !containsOnlyLettersAndSpaces(state) && <Form.Text className="text-danger">Please enter a valid state</Form.Text>}
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
              <Form.Control type="text" placeholder="Enter Zip Code" value={zipcode} onChange={(event) => setZipcode(event.target.value)} required={true} pattern="^\d{6}(?:[-\s]\d{4})?$" title="Please enter a valid zip code" />
              {!isNotEmpty(zipcode) && <Form.Text className="text-danger">Please enter a zip code</Form.Text>}
              {isNotEmpty(zipcode) && !isValidZipCode(zipcode) && <Form.Text className="text-danger">Please enter a valid zip code</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Aadhar Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Aadhar Card Number" value={practitionerAadhar} onChange={(event) => setAadhar(event.target.value)} />
              {!isNotEmpty(practitionerAadhar) && <Form.Text className="text-danger">Please enter an Aadhar card number</Form.Text>}
              {isNotEmpty(practitionerAadhar) && !isValidAadharNumber(practitionerAadhar) && <Form.Text className="text-danger">Please enter a valid Aadhar card number</Form.Text>}
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Medical License id</Form.Label>
              <Form.Control type="text" placeholder="Medical License Id" value={medicalLicenseId} onChange={(event) => setMedicalLicense(event.target.value)} required={true} />
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
              <Form.Label>Select Hospital Name</Form.Label>
              <Form.Control as="select" value={hospitalId.centralHospital.hospitalId} onChange={(event) => setHospitalId({ centralHospital: { hospitalId: event.target.value } })} >
                <option value="">Hospital Name</option>
                {hospitals.map((hospital) => (
                  <option key={hospital.id} value={hospital.hospitalId}>{hospital.hospitalName}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <br></br>
            <br></br>
            {verified ?
              <Button variant="success" type="submit" >
                Submit
              </Button>
              :
              null
            }

          </Form>
          <br>
          </br>

        </Container>
      </>
    );

  }

  export default RegisterNewDoctor;