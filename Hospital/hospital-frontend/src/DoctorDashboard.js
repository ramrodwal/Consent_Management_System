import React from 'react'
import "./HospitalComponents/HospitalStyle.css"
import Table from 'react-bootstrap/Table'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function DoctorDashboard(){

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

  <center><h1 className='pageheading'>Welcome Doctor</h1></center>

  <Container className="mt-5">
      
        
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Patient"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
            <Button className="rounded-pill" variant="outline-primary">
              Search
            </Button>
          </Form>
          <br></br>

          <Table stripped bordered hover variant="dark" size="sm">
        <thead>
          <tr className='tablehead'>
            <th>Patient Name</th>
            <th>Patient Id</th>
            

          </tr>

        </thead>
        <tbody>
          <tr>
         <td>Patient one</td>
         <td>Id 1</td>
         </tr>
         <tr>
         <td>Patient two</td>
         <td>Id 2</td>
         </tr>
         <tr>
         <td>Patient three</td>
         <td>Id 3</td>
         </tr>
         <tr>
         <td>Patient four</td>
         <td>Id 4</td>
         </tr>
         <tr>
         <td>Patient five</td>
         <td>Id 5</td>
         </tr>
        </tbody>
      </Table>

    <center><Button variant="primary" type="submit" >
    Submit
  </Button>
  </center>
        
      
    </Container>

    </>
)

}

export default DoctorDashboard;