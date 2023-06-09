import React, { useEffect } from 'react';
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./HospitalComponents/HospitalStyle.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

import { useState } from 'react';
import axios from "axios";

function RegisterNewHospital() {

  const navigate = useNavigate();

  const [hospitalId, setHospitalId] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');




  const token = localStorage.getItem('adminAuthToken')


  useEffect(() => {

    if (token === null) {
      navigate("/AdminLogin");
    }
  }, []);

  const isNotEmpty = (value) => {
    return value.trim().length > 0;
  }

  function containsOnlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]+$/.test(str);
  }

  function isValidZipCode(zip) {
    const regex = /^\d{6}(?:[-\s]\d{4})?$/;
    return regex.test(zip);
  }
  function isValidPhoneNumber(number) {
    // Regular expression for matching 10-digit phone number format
    const phoneNumberRegex = /^[0-9]{10}$/;
    return phoneNumberRegex.test(number);
  }
  function containsOnlyLetters(str) {
    return /^[A-Za-z]+$/.test(str);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const hospitalDetails = { hospitalId: hospitalId, hospitalName: hospitalName, contactNumber: contactNumber, state: state, city: city, address: address, zipcode: zipcode };
    if (containsOnlyLetters(hospitalName) && isValidPhoneNumber(contactNumber)
      && containsOnlyLettersAndSpaces(state) && isValidZipCode(zipcode)
      && containsOnlyLettersAndSpaces(city)) {


      const headers = { Authorization: `Bearer ${token}` }; // add token to headers
      // console.log(token)

      await axios.post('http://localhost:9099/hospital/admin-login/register-hospital', hospitalDetails, { headers })
        .then(response => console.log(response))
        .catch(error => console.log(error));

      navigate("/AdminPostLogin");

    } else {
      toast.error('Please fill in all the required fields with valid input.',
        { position: toast.POSITION.TOP_CENTER });

    }
  };


  return (
    <>


      <Container>
        <ToastContainer />
        <h1 className='pageheading'>Register New Hospital:</h1>
        <Container className='topCentre'>
          <center><Card className='toplogo'>
            <Card.Img src="/RegNewHospSignup.jpg" />
          </Card>
          </center>

        </Container>


        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicText" >
            <Form.Control type="hidden" placeholder="Hospital id" value={hospitalId} onChange={(event) => setHospitalId(event.target.value)} />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Hospital Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Hospital Name" value={hospitalName} onChange={(event) => setHospitalName(event.target.value)} required minLength={2} maxLength={50} />
            {!containsOnlyLettersAndSpaces(hospitalName) && <Form.Text className="text-danger">Please enter a hospital name</Form.Text>}
            {containsOnlyLettersAndSpaces(hospitalName) && (hospitalName.length < 2 || hospitalName.length > 50) && <Form.Text className="text-danger">Hospital name should be between 2 to 50 characters long</Form.Text>}
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter Contact Number"
              value={contactNumber}
              onChange={(event) => setContactNumber(event.target.value)}
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit contact number"
            />
            {!isNotEmpty(contactNumber) && <Form.Text className="text-danger">Please enter a contact number</Form.Text>}
            {isNotEmpty(contactNumber) && !isValidPhoneNumber(contactNumber) && <Form.Text className="text-danger">Please enter a valid 10-digit contact number</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Enter State" value={state} onChange={(event) => setState(event.target.value)} required={true} pattern="[A-Za-z ]+" title="Please enter a valid state name" />
            {!isNotEmpty(state) && <Form.Text className="text-danger">Please enter a state name</Form.Text>}
            {isNotEmpty(state) && !containsOnlyLettersAndSpaces(state) && <Form.Text className="text-danger">Please enter a valid state name</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter City" value={city} onChange={(event) => setCity(event.target.value)} required={true} pattern="^[A-Za-z\s]+$" title="Please enter a valid city name" />
            {!isNotEmpty(city) && <Form.Text className="text-danger">Please enter a city name</Form.Text>}
            {isNotEmpty(city) && !containsOnlyLettersAndSpaces(city) && <Form.Text className="text-danger">Please enter a valid city name</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" value={address} onChange={(event) => setAddress(event.target.value)} required={true} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="number" placeholder="Enter Zip Code" value={zipcode} onChange={(event) => setZipcode(event.target.value)} required={true} />
            {!isValidZipCode(zipcode) && <Form.Text className="text-danger">Please enter a valid zip code with 6 digits</Form.Text>}
          </Form.Group>


          <Button variant="primary" type="submit"  >
            Submit
          </Button>


        </Form>

      </Container>
    </>

  )
}

export default RegisterNewHospital;
