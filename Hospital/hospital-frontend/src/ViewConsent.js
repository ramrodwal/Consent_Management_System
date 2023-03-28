import React from 'react'
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./HospitalComponents/HospitalStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table'

function ViewConsent(){
return(
    <>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
          
          <Nav.Link href="/ConsentRequest">Request Consent</Nav.Link>
          
        </Nav>
        <Nav className="me-auto">
          
          <Nav.Link href="/ViewConsent">View Consent</Nav.Link>
          
        </Nav>
        <Nav pullRight>
          <Nav.Link href="/" >Logout</Nav.Link>
         
        </Nav>

      

      </Navbar.Collapse>
    
  </Navbar>
    
    <center><h1 className='pageheading'>Consent List</h1></center>

            <Table stripped bordered hover variant="dark" size="sm">
  <thead>
    <tr className='tablehead'>
      <th>Patient Name</th>  
      <th>HID</th>
      <th>RID</th>
      <th></th>
      
 
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>1</td>
        <td>ABCD</td>
        <td>12345</td>
        <td className='tabledata'><Button variant="success">Fetch</Button></td>
    </tr>
    <tr>
        <td>2</td>
        <td>ABCD</td>
        <td>12345</td>
        <td className='tabledata'><Button variant="success">Fetch</Button></td>    </tr>
    <tr>
        <td>3</td>
        <td>ABCD</td>
        <td>12345</td>
        <td className='tabledata'><Button variant="success">Fetch</Button></td>    </tr>
    <tr>
        <td>4</td>
        <td>ABCD</td>
        <td>12345</td>
        <td className='tabledata'><Button variant="success">Fetch</Button></td>    </tr>
    <tr>
        <td>5</td>
        <td>ABCD</td>
        <td>12345</td>
        <td className='tabledata'><Button variant="success">Fetch</Button></td>    </tr>
  </tbody>
</Table>
    </>
)
}

export default ViewConsent;