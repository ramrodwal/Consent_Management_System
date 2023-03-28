import React, { useState , useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function AllRequest(){
  const [requests,setRequests]=useState([]);

  useEffect(() => {
    axios.get("http://localhost:9092/hospital/admin-login/hospital-list").then((response) => {
      setHospitals(response.data);
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
          <Nav.Link href="/ViewUpdateProfile.js">View/Update Profile</Nav.Link>
          <Nav.Link href="/ViewRecords.js">View Records</Nav.Link>
          
          
        </Nav>
        <Nav>
          <Nav.Link href="/">Logout</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>

    <center><h1>View All Requests</h1></center>

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
</Table>
    </>
)

}

export default AllRequest;