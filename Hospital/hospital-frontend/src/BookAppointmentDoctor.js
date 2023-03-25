import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BookAppointmentDoctor(){
    return(
        <>
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <Navbar.Brand href="/HospitalHome">Hospital Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/BookAppointmentDoctor">Book Appointment</Nav.Link>
          <Nav.Link href="/DoctorLogin">Doctors' Login</Nav.Link>
          <Nav.Link href="/AdminLogin">Admin Login</Nav.Link>
          
          
        </Nav>
        
      </Navbar.Collapse>
    
  </Navbar>
            <div className='pageheading'>
            <center><h1>Book Appointment</h1></center>
            </div>
        </>
    );
}

export default BookAppointmentDoctor;