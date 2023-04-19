import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase.config';
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { useState } from 'react';
import axios from "axios";

const validGenders = ["Male", "Female", "Others"];
const MIN_AGE = 18;
let otp_val;

function SignUp() {

  const navigate = useNavigate();

  const [fname, setFname] = useState('');
  const [mname, setMname] = useState('');
  const [lname, setLname] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');

  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZip] = useState('');
  const [address, setAddress] = useState('');
  const [patientAadhar, setAadhar] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // otp
  const [otp, setOTP] = useState();
  const [otp2,setOtp2]=useState();
  
  // const [otp_val,setOtpVal]=useState();
  const [verified, setVerified] = useState(false);
  const [verified2,setVerified2]=useState(false);


  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          handleOTP();
        },
        'expired-callback': () => { },
      }, auth
      );
    }
  }

  const handleOTP = (event) => {
    event.preventDefault();
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+91" + contactNo;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        toast.success("Otp send successfull to your phone number "+contactNo, { position: toast.POSITION.TOP_CENTER })
      })
      .catch((error) => {
        toast.error("Something went wrong , try again later",{ position: toast.POSITION.TOP_CENTER })
        console.log(error);
      })
  }


  const onSubmitOTP = (event) => {
    event.preventDefault();
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        setVerified(true);
        toast.success("Otp verified successfull", { position: toast.POSITION.TOP_CENTER })
      })
      .catch((error) => {
        setVerified(false)
        toast.error("Invalid Otp Entered",{ position: toast.POSITION.TOP_CENTER })
      })
  }


  const sendEmailOtp=(event)=>{
    event.preventDefault(); 

    otp_val=Math.floor(Math.random()*100000);

   let emailbody=`
    <h1>This mail is regarding otp verification</h1>
    <br>
    <h2>Your OTP is ${otp_val}</h2>
    `;

    if(window.Email){
      window.Email.send({
        SecureToken : "d131c847-cf6e-41e1-b9b0-91b8c1b15d94",
        To : email,
        From : "consentmanagementsystem@gmail.com",
        Subject : "Otp Verification",
        Body : emailbody
      }).then(
        message=>{
          if(message==="OK"){
            toast.success("Otp sent successfully to your email "+email,{position: toast.POSITION.TOP_CENTER});
          }
        }
      );
    }
    else{
      toast.error("SMTPJS library not loaded.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

  }

  const verifyEmailOtp=(event)=>{
    event.preventDefault(); 
    if(otp2==otp_val){
      setVerified2(true);
      toast.success("Otp verified successfull", { position: toast.POSITION.TOP_CENTER })
    }
    else{
      setVerified2(false)
      toast.error("Invalid Otp Entered",{ position: toast.POSITION.TOP_CENTER })
    }

  }

  //otp

  const isNotEmpty = (value) => {
    return value.trim().length > 0;
  }

  const containsOnlyLetters = (value) => {
    return /^[A-Za-z]+$/.test(value);
  }

  function containsOnlyLettersAndSpaces(str) {
    return /^[a-zA-Z\s]*$/.test(str);
  }

  const isValidAge = (value) => {
    return value >= MIN_AGE;
  }
  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  const isValidContactNo = (value) => {
    return /^[0-9]{10}$/.test(value);
  }

  const isValidZip = (zipcode) => {
    const isValidRegex = /^[0-9]{6}$/; // regular expression to check if the zipcode has 6 digits
    return isValidRegex.test(zipcode);
  };

  function isValidAadhar(aadharNumber) {
    // Validate length
    if (aadharNumber.length !== 12) {
      return false;
    }
    return true;
  }


  const isMatchingPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const patient = {
      fname: fname, mname: mname, lname: lname, age: age, gender: gender, email: email, contactNo: contactNo, address: address,
      state: state, city: city, zipcode: zipcode, patientAadhar: patientAadhar, password: password, confirmPassword: confirmPassword
    };
    if (isNotEmpty(fname) && containsOnlyLetters(fname) && isNotEmpty(lname) && containsOnlyLetters(lname)
      && isValidAge(age) && validGenders.includes(gender) && isValidEmail(email) && isValidContactNo(contactNo)
      && containsOnlyLettersAndSpaces(city) && containsOnlyLettersAndSpaces(state) && isValidZip(zipcode)
      && isValidAadhar(patientAadhar) && isMatchingPassword(password, confirmPassword) && verified) {

        axios.post('http://localhost:8765/api/auth/register', patient)
        .then(response => console.log(response))
        .catch(error => console.log("this is an error!!!"));
      navigate("/");


    } else {
      toast.error('Please fill in all the required fields with valid input.',
        { position: toast.POSITION.TOP_CENTER });

    }
  };



  return (
    <Container>
      <ToastContainer />
      <Card>
        <Card.Img class="logo" src="logo.png" />
      </Card>
      <h1 class="forgotpass">Sign-Up:</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" value={fname} onChange={(event) => setFname(event.target.value)} required={true} pattern="[A-Za-z]+" title="Please enter only letters" />
          {!isNotEmpty(fname) && <Form.Text className="text-danger">Please enter a first name</Form.Text>}
          {isNotEmpty(fname) && !containsOnlyLetters(fname) && <Form.Text className="text-danger">Please enter only letters for the first name</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Middle Name" value={mname} onChange={(event) => setMname(event.target.value)} pattern="[A-Za-z]+" title="Please enter only letters" />
          {mname.length > 0 && !containsOnlyLetters(mname) && <Form.Text className="text-danger">Please enter only letters for the middle name</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" value={lname} onChange={(event) => setLname(event.target.value)} required={true} pattern="[A-Za-z]+" title="Please enter only letters" />
          {!isNotEmpty(lname) && <Form.Text className="text-danger">Please enter a last name</Form.Text>}
          {isNotEmpty(lname) && !containsOnlyLetters(lname) && <Form.Text className="text-danger">Please enter only letters for the last name</Form.Text>}
        </Form.Group>

        <Form.Group controlId="formBasicSelect">
          <Form.Label>Gender</Form.Label>
          <Form.Control as="select" value={gender} onChange={(event) => {
            const selectedGender = event.target.value;
            if (validGenders.includes(selectedGender)) {
              setGender(selectedGender);
            }
          }}>
            <option value="none">select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </Form.Control>
        </Form.Group>

        <Row id="shiftright">
          <Form.Group className="mb-3" controlId="formBasicText" id="formsamerow">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Age"
              value={age}
              onChange={(event) => {
                const enteredAge = event.target.value;
                // Check if the entered age is a valid number and greater than or equal to 18, and not null or empty
                if (!isNaN(enteredAge) && enteredAge >= MIN_AGE.toString() && enteredAge !== null && enteredAge !== "") {
                  setAge(parseInt(enteredAge));
                } else {
                  setAge("");
                }
              }}
              required // make the age field required
              min={MIN_AGE} // set the minimum value of the age field to 18
              onInvalid={(event) => event.target.setCustomValidity("Please enter a valid age")} // set custom error message for invalid input
              onBlur={(event) => event.target.setCustomValidity("")} // clear error message on blur
            />
            <Form.Control.Feedback type="invalid">Please enter a valid age.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} required={true} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please enter a valid email address"/>
          {!isNotEmpty(email) && <Form.Text className="text-danger">Please enter an email address</Form.Text>}
          {isNotEmpty(email) && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email) && <Form.Text className="text-danger">Please enter a valid email address</Form.Text>}
          <br/>
          <Button variant="success" type="submit" onClick={sendEmailOtp} style={{fontSize: '15px'}}>Generate Otp</Button>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Enter Otp</Form.Label>
          <Form.Control type="text" placeholder="Enter Otp" value={otp2} onChange={(event) => setOtp2(event.target.value)} required={true} />
          <br />
          <Button variant="success" type="submit" onClick={verifyEmailOtp} style={{fontSize: '15px'}}>Verify Otp</Button>
          {verified2 ? <h5 style={{ color: "green" }}>{email} is verified</h5> : <h5 style={{ color: "red" }}>{email} Verification Required</h5>}
        </Form.Group>
        

        <Form.Group className="mb-3" controlId="formBasicText">

          <Form.Label>Enter Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Phone Number" value={contactNo} onChange={(event) => setContactNo(event.target.value)} pattern="[0-9]{10}" title="Please enter a 10-digit phone number without any spaces or special characters" />
          <br />
          <Button variant="success" type="submit" onClick={handleOTP} style={{fontSize: '15px'}}>Generate Otp</Button>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Enter Otp</Form.Label>
          <Form.Control type="text" placeholder="Enter Otp" value={otp} onChange={(event) => setOTP(event.target.value)} required={true} />
          <br />
          <Button variant="success" type="submit" onClick={onSubmitOTP} style={{fontSize: '15px'}}>Verify Otp</Button>

          {verified ? <h5 style={{ color: "green" }}>{contactNo} is verified</h5> : <h5 style={{ color: "red" }}>{contactNo} Verification Required</h5>}
        </Form.Group>

        <div id="recaptcha-container"></div>


        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Enter Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" value={address} onChange={(event) => setAddress(event.target.value)} required={true} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="Enter State" value={state} onChange={(event) => setState(event.target.value)} required={true} pattern="[A-Za-z ]+" title="Please enter only letters and spaces" />
          {!isNotEmpty(state) && <Form.Text className="text-danger">Please enter a state</Form.Text>}
          {isNotEmpty(state) && !containsOnlyLettersAndSpaces(state) && <Form.Text className="text-danger">Please enter only letters and spaces for the state</Form.Text>}
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter City" value={city} onChange={(event) => setCity(event.target.value)} required={true} pattern="[A-Za-z\s]+" title="Please enter only letters and spaces" />
          {!isNotEmpty(city) && <Form.Text className="text-danger">Please enter a city</Form.Text>}
          {isNotEmpty(city) && !containsOnlyLettersAndSpaces(city) && <Form.Text className="text-danger">Please enter only letters and spaces for the city</Form.Text>}
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="number" placeholder="Enter Zip Code" value={zipcode} onChange={(event) => setZip(event.target.value)} required={true} />
          {!isValidZip(zipcode) && <Form.Text className="text-danger">Please enter a valid zip code with 6 digits</Form.Text>}
        </Form.Group>



        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Aadhar Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Aadhar Card Number"
            value={patientAadhar}
            onChange={(event) => setAadhar(event.target.value)}
            required={true}
            pattern="[0-9]{12}"
            title="Please enter a valid Aadhar Card number"
          />
          {!isNotEmpty(patientAadhar) && <Form.Text className="text-danger">Please enter an Aadhar Card number</Form.Text>}
          {isNotEmpty(patientAadhar) && !isValidAadhar(patientAadhar) && (
            <Form.Text className="text-danger">Please enter a valid Aadhar Card number</Form.Text>
          )}
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required={true} minLength={8} />
          {!isNotEmpty(password) && <Form.Text className="text-danger">Please enter a password</Form.Text>}
          {isNotEmpty(password) && password.length < 8 && <Form.Text className="text-danger">Password must be at least 8 characters long</Form.Text>}
        </Form.Group>



        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required={true} />
          {!isNotEmpty(confirmPassword) && <Form.Text className="text-danger">Please enter a password</Form.Text>}
          {isNotEmpty(confirmPassword) && password !== confirmPassword && <Form.Text className="text-danger">Passwords do not match</Form.Text>}
        </Form.Group>
        {verified && verified2 ?
          <Button variant="primary" type="submit" >
            Submit
          </Button>
          : <Button variant="success">Mobile Number and Email verification required</Button>
        }
        <br />
        <br />
      </Form>

    </Container>
  );

}

export default SignUp;