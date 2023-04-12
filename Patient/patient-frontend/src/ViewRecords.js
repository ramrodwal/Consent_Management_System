import React from 'react'
import Table from 'react-bootstrap/Table'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';



function ViewRecords(){

  const [records,setRecords]=useState([]);

  let patientAadhar="666666666666";

  useEffect(() => {
    axios.get(`http://localhost:9099/hospital/record-mapping/${patientAadhar}`).then((response) => {
      console.log(response);
      setRecords(response.data);
      console.log(records)
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
            <center><h1 className='pageheading'>View Records</h1></center>


            <Table stripped bordered hover variant="dark" size="sm">
  <thead>
    <tr className='tablehead'>
      <th className='tabledata'>Record Id</th>
      <th className='tabledata'>Disease Name</th>  
      <th className='tabledata'>Patient Aadhar</th>
      <th className='tabledata'>Priescription</th>
      <th className='tabledata'>Hospital Id</th>
      <th className='tabledata'>Practitioners Aadhar</th>
      
    </tr>
  </thead>
  <tbody>
  {records.map((record) => (
    <tr key={record.id}>
        <td className='tabledata'>{record.record_id}</td>
        <td className='tabledata'>{record.disease_name}</td>
        <td className='tabledata'>{record.patientAadhar}</td>
        <td className='tabledata'>{record.record}</td>
        <td className='tabledata'>{record.centralHospital.hospitalId}</td>
        <td className='tabledata'>{record.medicalPractitioner.practitionerAadhar}</td>
    </tr>
  ))}
  </tbody>
</Table>
        </>
    )
}

export default ViewRecords;