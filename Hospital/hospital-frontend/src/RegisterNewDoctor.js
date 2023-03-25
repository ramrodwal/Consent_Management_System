import React from 'react';
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./HospitalComponents/HospitalStyle.css"

import { useState } from 'react';
import axios from "axios";

function RegisterNewDoctor(){

    
    const [fname, setFname ]= useState();
    const [mname, setMname] = useState('');
    const [lname, setLname] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      const patient = { fname: fname, mname: mname , lname: lname, dob: dob,email:email, username:username, phone:phone, address:address, state: state, city:city, zip:zip, 
      aadhar:aadhar, password:password, confirmPassword:confirmPassword };
      axios.post('http://localhost:9090/api/patients', patient)
          .then(response => console.log(response))
          .catch(error => console.log(error));
  }
  // state = { otp: '' };

  // const handleChange = (otp) => this.setState({ otp });
return(
    
<Container>

    <Container className='topCentre'>
        <center>
    <Card className='toplogo'>
      <Card.Img src="https://cdn-icons-png.flaticon.com/512/3891/3891530.png" />
  </Card>
  </center>
    </Container>
  
  <h1 class="forgotpass">Doctors' Sign-Up:</h1>
  <Form onSubmit={handleSubmit}>
    
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>First Name</Form.Label>
  <Form.Control type="text" placeholder="First Name" value={fname}  onChange={(event) => setFname(event.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>Middle Name</Form.Label>
  <Form.Control type="text" placeholder="Middle Name" value={mname}  onChange={(event) => setMname(event.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>Last Name</Form.Label>
  <Form.Control type="text" placeholder="Last Name" value={lname}  onChange={(event) => setLname(event.target.value)}/> 
  </Form.Group>
  <Row id="shiftright">
  <Form.Group className="mb-3" controlId="formBasicText" id="formsamerow">
  <Form.Label>DOB</Form.Label>
  <Form.Control type="date" placeholder="DOB" value={dob}  onChange={(event) => setDob(event.target.value)}/>
  </Form.Group>
  <Form.Group controlId="formBasicSelect">
        <Form.Label>Gender</Form.Label>
        <Form.Control as="select" value={gender} onChange={(event) => setDob(event.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </Form.Control>
      </Form.Group>


  
  </Row>   
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="text" placeholder="Email" value={email}  onChange={(event) => setEmail(event.target.value)}/>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>Username</Form.Label>
  <Form.Control type="text" placeholder="Username" value={username}  onChange={(event) => setUsername(event.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>Phone Number</Form.Label>
  <Form.Control type="text" placeholder="Phone Number" value={phone}  onChange={(event) => setPhone(event.target.value)}/>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>Address</Form.Label>
  <Form.Control type="text" placeholder="Enter Address" value={address}  onChange={(event) => setAddress(event.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>State</Form.Label>
  <Form.Control type="text" placeholder="Enter State" value={state}  onChange={(event) => setState(event.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>City</Form.Label>
  <Form.Control type="text" placeholder="Enter City" value={city}  onChange={(event) => setCity(event.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>Zip Code</Form.Label>
  <Form.Control type="text" placeholder="Enter Zip Code" value={zip}  onChange={(event) => setZip(event.target.value)}/>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>Medical License id</Form.Label>
  <Form.Control type="text" placeholder="Medical License Id" value={zip}  onChange={(event) => setZip(event.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>Hospital Name</Form.Label>
  <Form.Control type="text" placeholder="Hospital Name" value={zip}  onChange={(event) => setZip(event.target.value)}/>
  </Form.Group>
  <Form.Group controlId="formBasicSelect">
        <Form.Label>Specialization</Form.Label>
        <Form.Control as="select" value={gender} onChange={(event) => setDob(event.target.value)}>
          <option value="Neuro">Neuro</option>
          <option value="Gyna">Gyna</option>
          <option value="Uro">Uro</option>
        </Form.Control>
      </Form.Group>

 
    

  <Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>Aadhar Number</Form.Label>
  <Form.Control type="text" placeholder="Enter Aadhar Card Number" value={aadhar}  onChange={(event) => setAadhar(event.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="text" placeholder="Password" value={password}  onChange={(event) => setPassword(event.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Confirm Password</Form.Label>
  <Form.Control type="text" placeholder="Confirm Password" value={confirmPassword}  onChange={(event) => setConfirmPassword(event.target.value)}/>
  </Form.Group>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>

</Container>
);

}

export default RegisterNewDoctor;