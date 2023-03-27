import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState } from 'react';
import axios from "axios";

function DoctorLogin(){

  const [username, setUsername]=useState('');
    const [password, setPassword] = useState('');
    

    const handleSubmit = (event) => {
      event.preventDefault();
      const hospitalDetails = { username: username,password: password};
      axios.post('http://localhost:9099/hospital/admin-login/register-hospital', hospitalDetails)
          .then(response => console.log(response))
          .catch(error => console.log(error));
  }

    return(
        <>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <Navbar.Brand href="/HospitalHome"><img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGgyT3J650KbeCUJAxvyYv7xwkd_5F1i108zeySI&s"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}Hospital Home</Navbar.Brand>
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
            <center><h1>Doctor's Login</h1></center>
            </div>

            <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username" value={username}  onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              value={password}  onChange={(event) => setPassword(event.target.value)}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          
        </div>
      </form>
    </div>
        </>
    );
}

export default DoctorLogin;