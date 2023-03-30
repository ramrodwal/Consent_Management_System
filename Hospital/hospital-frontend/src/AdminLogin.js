import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";



function AdminLogin(){

  const[admin_id,setAdminId]=useState('');
  const [username, setUsername]=useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const hospitalDetails = { admin_id:admin_id, username: username,password: password};
    axios.post('http://localhost:9099/hospital/admin-login', hospitalDetails)
        .then(response => console.log(response))
        .catch(error => console.log(error));
}
    return(

      
        <>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <Navbar.Brand href="/"><img
              alt=""
              src="/HospitalHome.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}Hospital Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/BookAppointmentDoctor">Book Appointment</Nav.Link>
          <Nav.Link href="/DoctorLogin">Practitioner's Login</Nav.Link>
          <Nav.Link href="/AdminLogin">Admin Login</Nav.Link>
          
          
        </Nav>
        
      </Navbar.Collapse>
    
  </Navbar>
            <div className='pageheading'>
            <center><h1 className='pageheading'>Admin Login</h1></center>
            </div>
        <Container className='formcontainernew' > 
            <Form className='formpad'>

            <Form.Group className="mb-3" controlId="formBasicText" >
            <Form.Control type="hidden" value={admin_id} onChange={(event)=>setAdminId(event.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText" >
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" value={username} onChange={(event)=>setUsername(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={username} onChange={(event)=>setUsername(event.target.value)}/>
            </Form.Group>
            </Form>
            <br></br>
            <center>
        <button type="submit" className="btn btn-primary">
              Login
            </button>
            </center>

            </Container>
        </>
    );
}

export default AdminLogin;