import React,{useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';

function PatientDashboard(){
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      const token = localStorage.getItem('authToken'); // get token from localStorage
      const id = localStorage.getItem('id');
      const headers = { Authorization: `Bearer ${token}` }; // add token to headers
      const { data } = await axios.get(`http://localhost:8765/patient/view-dashboard/${id}`, { headers });
      console.log(data);
      setPatient(data); 
    };
  
    fetchPatient();
  },[]);

  if (!patient) {
    return <div>
      <h1 style={{textAlign:"center"}}>
        Cannot Access The Page!
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button href="/">Login</Button>
      </div>
      <h5 style={{textAlign:"center"}}>Don't have an account? <a href="/SignUp.js"> Sign Up</a></h5>
    
      
    </div>;
  }
    return (
        <>
        <Container>
            <h1 className="patientdashboard">Welcome {patient.fname} {patient.lname} !</h1>
            
                {/* <h3>Your records</h3>
                <br>
                </br>
                Sugar Reports{' '}
                <Button variant="primary">View</Button>{' '}
                <Button variant="secondary">Update</Button>{' '}
                <Button variant="warning">Download PDF</Button>{' '}
                <Button variant="danger">Delete</Button>{' '}

                {['Consent'].map(
        (variant) => (
          <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
          >
            <Dropdown.Item eventKey="1">Doctor 1</Dropdown.Item>
            <Dropdown.Item eventKey="2">Doctor 2</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        ),
      )} */}

<CardGroup className="patientcard">
      <Card >
        <a className="patientdashboardcard" href="/AllRequest.js">
        <Card.Img variant="top" src="/consent.png"  />
        </a>
        <Card.Body>
          <Card.Title>View All Requests</Card.Title>
        </Card.Body>
       
      </Card>
      <Card >
        <a className="patientdashboardcard" href="/PatientProfileView.js">
        <Card.Img variant="top" src="/profile.png" />
        </a>
        <Card.Body>
          <Card.Title>ViewProfile</Card.Title>
         
        </Card.Body>
        
      </Card>
      <Card >
        <a className="patientdashboardcard" href="/ViewRecords.js">
        <Card.Img variant="top" src="/records.jpg" />
        </a>
        <Card.Body>
          <Card.Title>View Records</Card.Title>
       
        </Card.Body>
       
      </Card>
    </CardGroup>


            </Container>

        </>
  );

}

export default PatientDashboard;
