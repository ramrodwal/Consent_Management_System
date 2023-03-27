import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ViewUpdateProfile(){
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
        <center><h1>View/Update Profile</h1></center>
        <button type="submit" className="btn btn-primary">
              Update
            </button>
    </>
)
}

export default ViewUpdateProfile;