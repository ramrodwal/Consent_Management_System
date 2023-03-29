import React, { useState , useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import axios from "axios";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';



function AllRequest(){
  const [requests,setRequests]=useState([]);

  useEffect(() => {
    axios.get("http://localhost:9092/hospital/login/view-consents").then((response) => {
      setRequests(response.data);
    });
  }, []);
return(

    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <Navbar.Brand href="/PatientDashboard.js">Patient</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/AllRequest.js">View All Requests</Nav.Link>
          <Nav.Link href="/PatientProfileView.js">View Profile</Nav.Link>
          <Nav.Link href="/ViewRecords.js">View Records</Nav.Link>
          
          
        </Nav>
        <Nav>
          <Nav.Link href="/">Logout</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>

    {/* <center><h1 className='pageheading'>View All Requests</h1></center>

    <Table stripped bordered hover variant="dark" size="sm">
  <thead>
    <tr className='tablehead'>
      <th className='tabledata'>Consent Id</th>  
      <th className='tablehead'></th>
      <th className='tablehead'></th>
      
      
 
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>1</td>
        <td className='tabledata'><Button variant="success">Accept</Button></td>
        <td className='tabledata'><Button variant="danger">Deny</Button></td>

    </tr>
    <tr>
        <td>2</td>
        <td className='tabledata'><Button variant="success">Accept</Button></td>
        <td className='tabledata'><Button variant="danger">Deny</Button></td>

    </tr>
    <tr>
        <td>3</td>
        <td className='tabledata'><Button variant="success">Accept</Button></td>
        <td className='tabledata'><Button variant="danger">Deny</Button></td>

    </tr>
    <tr>
        <td>4</td>
        <td className='tabledata'><Button variant="success">Accept</Button></td>
        <td className='tabledata'><Button variant="danger">Deny</Button></td>

    </tr>
    <tr>
        <td>5</td>
        <td className='tabledata'><Button variant="success">Accept</Button></td>
        <td className='tabledata'><Button variant="danger">Deny</Button></td>

    </tr>
    <tr>
        <td>6</td>
        <td className='tabledata'><Button variant="success">Accept</Button></td>
        <td className='tabledata'><Button variant="danger">Deny</Button></td>

    </tr>
  </tbody>
</Table> */}

<center><h1 className='pageheading'>Consent List</h1></center>

      <Table stripped bordered hover variant="dark" size="sm">
        <thead>
          <tr className='tablehead'>
            <th>Consent ID</th>
            <th>Disease_name </th>
            <th>Hospital_id  </th>
            <th>Patient_aadhar</th>
            <th>Practitioner_aadhar</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request)=>(
            <tr key={request.consent_id}>
              <td>{request.consent_id}</td>
              <td>{request.disease_name}</td>
              <td>{request.hospital_id}</td>
              <td>{request.patient_aadhar}</td>
              <td>{request.practitioner_aadhar}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
)

}

export default AllRequest;