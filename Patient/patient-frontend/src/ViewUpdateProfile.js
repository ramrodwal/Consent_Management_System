import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";




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
        <center><h1 className='pageheading'>View/Update Profile</h1></center>
        <Container className='formcontainer'>
        <Form>

    
  
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>First Name</Form.Label>
  <Form.Control type="text" placeholder="First Name"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>Middle Name</Form.Label>
  <Form.Control type="text" placeholder="Middle Name"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>Last Name</Form.Label>
  <Form.Control type="text" placeholder="Last Name"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>Age</Form.Label>
  <Form.Control type="text" placeholder="Age"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>Gender</Form.Label>
  <Form.Control type="text" placeholder="Gender"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>Email</Form.Label>
  <Form.Control type="text" placeholder="Email" readOnly={true}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>Contact Number</Form.Label>
  <Form.Control type="text" placeholder="Contact Number"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>Address</Form.Label>
  <Form.Control type="text" placeholder="Address"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>State</Form.Label>
  <Form.Control type="text" placeholder="State"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>City</Form.Label>
  <Form.Control type="text" placeholder="City"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>Zipcode</Form.Label>
  <Form.Control type="text" placeholder="Zipcode"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>Aadhar Number</Form.Label>
  <Form.Control type="text" placeholder="Aadhar Number" readOnly={true}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText" >
  <Form.Label>Username</Form.Label>
  <Form.Control type="text" placeholder="Username" readOnly={true}/>
  </Form.Group>
  
  

  
</Form>
        <center>
        <button type="submit" className="btn btn-primary">
              Update
            </button>
            </center>
            </Container>
    </>
)
}

export default ViewUpdateProfile;