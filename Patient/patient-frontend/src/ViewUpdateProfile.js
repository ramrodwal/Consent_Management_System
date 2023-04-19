import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";




function ViewUpdateProfile() {

  const navigate = useNavigate();

  const validGenders = ["Male", "Female", "Others"];
  const MIN_AGE = 18;

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
  const [patient, setPatient] = useState('');

  const isNotEmpty = (value) => {
    return value !== undefined && value !== null && value.trim() !== '';
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

  useEffect(() => {
    const fetchPatient = async () => {
      const token = localStorage.getItem('authToken'); // get token from localStorage
      const id = localStorage.getItem('id');
      const headers = { Authorization: `Bearer ${token}` }; // add token to headers

      if (token === null) {
        navigate("/");
      }
      else {
        const { data } = await axios.get(`http://localhost:8765/patient/register/${id}`, { headers });
        console.log(data);
        setPatient(data);
      }

    };

    fetchPatient();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    // console.log(value);
    setPatient((prevData) => ({
      ...prevData,
      [fname]: value,
    })

    );
    console.log(patient.fname);
  };


  const handleUpdate = (event) => {
    console.log('handle update done');
    event.preventDefault();
    console.log('handle update done');
    const updatedPatient = {
      fname: patient.fname, mname: patient.mname, lname: patient.lname, age: patient.age, gender: patient.gender, email: patient.email, contactNo: patient.contactNo, address: patient.address,
      state: patient.state, city: patient.city, zipcode: patient.zipcode, patientAadhar: patient.patientAadhar, password: patient.password, confirmPassword: patient.confirmPassword
    };
    console.log('handle update done');
    // if (isNotEmpty(fname) && containsOnlyLetters(fname) && isNotEmpty(lname) && containsOnlyLetters(lname)
    //   && isValidAge(age) && validGenders.includes(gender) && isValidEmail(email) && isValidContactNo(contactNo)
    //   && containsOnlyLettersAndSpaces(city) && containsOnlyLettersAndSpaces(state) && isValidZip(zipcode)
    //   && isValidAadhar(patientAadhar)) {

    console.log('if condition done');
    const token = localStorage.getItem('authToken'); // get token from localStorage
    const id = localStorage.getItem('id')
    const headers = { Authorization: `Bearer ${token}` };
    const { data } = axios.post(`http://localhost:8765/patient/update/${id}`, { headers });
    console.log('api done');
    setPatient(updatedPatient);
    console.log(updatedPatient);
    // } else {
    //   console.log('no job done');
    //   toast.error('Please fill in all the required fields with valid input.',
    //     { position: toast.POSITION.TOP_CENTER });

    // }
  };


  return (

    <>
      <center><h1 className='pageheading'>Update Profile</h1></center>
      <Container className='formcontainer'>
        <Form onSubmit={handleUpdate} >

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" value={patient.fname} onChange={(event) => setPatient(prevData => ({ ...prevData, fname: event.target.value }))}
              required={true} pattern="[A-Za-z]+" title="Please enter only letters" />
            {!isNotEmpty(patient.fname) && <Form.Text className="text-danger">Please enter a first name</Form.Text>}
            {isNotEmpty(patient.fname) && !containsOnlyLetters(patient.fname) && <Form.Text className="text-danger">Please enter only letters for the first name</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Middle Name" value={patient.mname} onChange={(event) => setPatient(prevData => ({ ...prevData, mname: event.target.value }))} pattern="[A-Za-z]+" title="Please enter only letters" />
            {/* <Form.Text className="text-danger">Please enter only letters for the middle name</Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" value={patient.lname} onChange={(event) => setPatient(prevData => ({ ...prevData, lname: event.target.value }))} required={true} pattern="[A-Za-z]+" title="Please enter only letters" />
            {!isNotEmpty(patient.lname) && <Form.Text className="text-danger">Please enter a last name</Form.Text>}
            {isNotEmpty(patient.lname) && !containsOnlyLetters(patient.lname) && <Form.Text className="text-danger">Please enter only letters for the last name</Form.Text>}
          </Form.Group>

          <Row id="shiftright">
            <Form.Group className="mb-3" controlId="formBasicText" id="formsamerow">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Age"
                value={patient.age}
                onChange={(event) => {
                  const enteredAge = event.target.value;
                  // Check if the entered age is a valid number and greater than or equal to 18, and not null or empty
                  if (!isNaN(enteredAge) && enteredAge >= MIN_AGE.toString() && enteredAge <= 110 && enteredAge !== null && enteredAge !== "") {
                    setPatient(prevData => ({ ...prevData, age: enteredAge }))
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

          <Form.Group controlId="formBasicSelect">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" value={patient.gender} onChange={(event) => {
              const selectedGender = event.target.value;
              if (validGenders.includes(selectedGender)) {
                setPatient(prevData => ({ ...prevData, gender: selectedGender }))
              }
            }}>
              <option value="none">select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={patient.email}
              onChange={(event) => setPatient(prevData => ({ ...prevData, email: event.target.value }))}
              required={true}
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
            />
            {!isNotEmpty(patient.email) && <Form.Text className="text-danger">Please enter an email address</Form.Text>}
            {isNotEmpty(patient.email) && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(patient.email) && <Form.Text className="text-danger">Please enter a valid email address</Form.Text>}

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Enter Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Phone Number" value={patient.contactNo} onChange={(event) => setPatient(prevData => ({ ...prevData, contactNo: event.target.value }))} pattern="[0-9]{10}" title="Please enter a 10-digit phone number without any spaces or special characters" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Enter Address</Form.Label>
            <Form.Control type="text" placeholder="Enter your address" value={patient.address} onChange={(event) => setPatient(prevData => ({ ...prevData, address: event.target.value }))} required={true} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Enter State" value={patient.state} onChange={(event) => setPatient(prevData => ({ ...prevData, state: event.target.value }))} required={true} pattern="[A-Za-z ]+" title="Please enter only letters and spaces" />
            {!isNotEmpty(patient.state) && <Form.Text className="text-danger">Please enter a state</Form.Text>}
            {isNotEmpty(patient.state) && !containsOnlyLettersAndSpaces(patient.state) && <Form.Text className="text-danger">Please enter only letters and spaces for the state</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter City" value={patient.city} onChange={(event) => setPatient(prevData => ({ ...prevData, city: event.target.value }))} required={true} pattern="[A-Za-z\s]+" title="Please enter only letters and spaces" />
            {!isNotEmpty(patient.city) && <Form.Text className="text-danger">Please enter a city</Form.Text>}
            {isNotEmpty(patient.city) && !containsOnlyLettersAndSpaces(patient.city) && <Form.Text className="text-danger">Please enter only letters and spaces for the city</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="number" placeholder="Enter Zip Code" value={patient.zipcode} onChange={(event) => setPatient(prevData => ({ ...prevData, zipcode: event.target.value }))} required={true} />
            {!isValidZip(patient.zipcode) && <Form.Text className="text-danger">Please enter a valid zip code with 6 digits</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Aadhar Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Aadhar Card Number"
              value={patient.patientAadhar}
              onChange={(event) => setPatient(prevData => ({ ...prevData, patientAadhar: event.target.value }))}
              required={true}
              pattern="[0-9]{12}"
              title="Please enter a valid Aadhar Card number"
            />
            {!isNotEmpty(patient.patientAadhar) && <Form.Text className="text-danger">Please enter an Aadhar Card number</Form.Text>}
            {isNotEmpty(patient.patientAadhar) && !isValidAadhar(patient.patientAadhar) && (
              <Form.Text className="text-danger">Please enter a valid Aadhar Card number</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={patient.password} onChange={(event) => setPatient(prevData => ({ ...prevData, password: event.target.value }))} required={true} minLength={8} />
            {!isNotEmpty(patient.password) && <Form.Text className="text-danger">Please enter a password</Form.Text>}
            {isNotEmpty(patient.password) && patient.password.length < 8 && <Form.Text className="text-danger">Password must be at least 8 characters long</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" value={patient.confirmPassword} onChange={(event) => setPatient(prevData => ({ ...prevData, confirmPassword: event.target.value }))} required={true} />
            {!isNotEmpty(patient.confirmPassword) && <Form.Text className="text-danger">Please enter a password</Form.Text>}
            {!isNotEmpty(patient.confirmPassword) && <Form.Text className="text-danger">Passwords do not match</Form.Text>}
          </Form.Group>

          <center>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </center>

        </Form>

      </Container>
    </>
  )
}

export default ViewUpdateProfile;