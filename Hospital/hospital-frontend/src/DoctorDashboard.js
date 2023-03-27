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
          
          <Nav.Link href="/ViewConsent">Request Consent</Nav.Link>
          
        </Nav>
        <Nav className="me-auto">
          
          <Nav.Link href="/ViewConsent">View Consent</Nav.Link>
          
        </Nav>
        <Nav pullRight>
          <Nav.Link href="/HospitalHome" >Logout</Nav.Link>
         
        </Nav>

      

      </Navbar.Collapse>
    
  </Navbar>

  <center><h1>Welcome Doctor</h1></center>

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

    <center><Button variant="primary" type="submit" >
    Submit
  </Button>
  </center>
        
      
    </Container>

    </>
)

}

export default DoctorDashboard;