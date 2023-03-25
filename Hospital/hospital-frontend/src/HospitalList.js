import React from 'react';
import "./HospitalComponents/HospitalStyle.css"
import Table from 'react-bootstrap/Table'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function HospitalList(){
    
    return(
        <>


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
        <Navbar.Brand href="/AdminPostLogin">Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/RegisterNewHospital">Register New Hospital</Nav.Link>
            <Nav.Link href="/RegisterNewDoctor">Register New Doctor</Nav.Link>
            <Nav.Link href="/HospitalList">Hospital List</Nav.Link>
            <Nav.Link href="/DoctorList">Doctors' List</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="/HospitalHome">Logout</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>


            <center><h1>Hospital List</h1></center>

            <Table stripped bordered hover variant="dark" size="sm">
  <thead>
    <tr className='tablehead'>
      <th>Hospital ID</th>  
      <th>Hospital Name</th>
      <th>Contact Number</th>
      <th>Address</th>
      <th>State</th>
      <th>City</th>
      <th>Zip Code</th>
 
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>1</td>
        <td>ABCD</td>
        <td>12345</td>
        <td>asdffg</td>
        <td>Delhi</td>
        <td>New Delhi</td>
        <td>110024</td>
    </tr>
    <tr>
        <td>2</td>
        <td>EFGH</td>
        <td>987928</td>
        <td>ajdhcmk</td>
        <td>Maharashtra</td>
        <td>Mumbai</td>
        <td>765890</td>
    </tr>
    <tr>
        <td>3</td>
        <td>PQRS</td>
        <td>901238</td>
        <td>kjsdiuhn</td>
        <td>Karnataka</td>
        <td>Bangalore</td>
        <td>576809</td>
    </tr>
    <tr>
        <td>4</td>
        <td>WASD</td>
        <td>60981524</td>
        <td>mchbujgxkx</td>
        <td>Goa</td>
        <td>Goa</td>
        <td>314256</td>
    </tr>
    <tr>
        <td>5</td>
        <td>WXYZ</td>
        <td>90870987</td>
        <td>lkjhasd</td>
        <td>Punjab</td>
        <td>Chandigarh</td>
        <td>999112</td>
    </tr>
  </tbody>
</Table>
  </> 
    );
}

export default HospitalList;