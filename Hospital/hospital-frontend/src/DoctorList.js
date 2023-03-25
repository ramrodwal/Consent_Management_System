import React from 'react';
import "./HospitalComponents/HospitalStyle.css"
import Table from 'react-bootstrap/Table'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function DoctorList(){
    
    return(
       <>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <Navbar.Brand href="/AdminPostLogin"><img
              alt=""
              src="https://cdn.imgbin.com/21/4/22/imgbin-computer-icons-login-user-system-administrator-admin-L1LTfM47FsD3A2gus0rdy8WpJ.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}Admin</Navbar.Brand>
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
            <center><h1>Doctors' List</h1></center>

            <Table stripped bordered hover variant="dark" size="sm">
  <thead>
    <tr className='tablehead'>
      <th>First Name</th>  
      <th>Middle Name</th>
      <th>Last Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Email</th>
      <th>Contact Number</th>
      <th>Address</th>
      <th>State</th>
      <th>City</th>
      <th>Zip</th>
      <th>Aadhar Number</th>
      <th>Medical License Id</th>
      <th>Specialization</th>
      <th>Qualification</th>
      <th>Hospital Id</th>
 
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>F Name</td>
        <td>M Name</td>
        <td>L Name</td>
        <td>44</td>
        <td>Male</td>
        <td>asd@alk.com</td>
        <td>1029384756</td>
        <td>axcvgy</td>
        <td>Delhi</td>
        <td>New Delhi</td>
        <td>110024</td>
        <td>22003399448</td>
        <td>90812</td>
        <td>Neuro</td>
        <td>UG</td>
        <td>330984</td>
    </tr>
    <tr>
        <td>F Name Two</td>
        <td>M Name Two</td>
        <td>L Name Two</td>
        <td>47</td>
        <td>Female</td>
        <td>ddf@alk.com</td>
        <td>444584756</td>
        <td>mmkdhgy</td>
        <td>Punjab</td>
        <td>Chandigarh</td>
        <td>990082</td>
        <td>998749448</td>
        <td>637499</td>
        <td>Gyna</td>
        <td>UG</td>
        <td>990081</td>
    </tr>
    <tr>
        <td>F Name Three</td>
        <td>M Name Three</td>
        <td>L Name Three</td>
        <td>52</td>
        <td>Male</td>
        <td>lio@alk.com</td>
        <td>4563384756</td>
        <td>mxcbgh</td>
        <td>Maharashtra</td>
        <td>Mumbai</td>
        <td>110024</td>
        <td>8810298376</td>
        <td>23894</td>
        <td>Ortho</td>
        <td>PG</td>
        <td>739254</td>
    </tr>
    <tr>
        <td>F Name Four</td>
        <td>M Name Four</td>
        <td>L Name Four</td>
        <td>32</td>
        <td>Female</td>
        <td>fde@alk.com</td>
        <td>2325431223</td>
        <td>byewqyt</td>
        <td>Karnataka</td>
        <td>Bangalore</td>
        <td>665512</td>
        <td>5642317656</td>
        <td>23476</td>
        <td>Neuro</td>
        <td>PG</td>
        <td>786512</td>
    </tr>
    <tr>
        <td>F Name Five</td>
        <td>M Name Five</td>
        <td>L Name Five</td>
        <td>37</td>
        <td>Male</td>
        <td>mlp@alk.com</td>
        <td>90123847</td>
        <td>vewqlo</td>
        <td>Uttar Pradesh</td>
        <td>Lucknow</td>
        <td>709123</td>
        <td>7364528901</td>
        <td>65100</td>
        <td>Gyna</td>
        <td>UG</td>
        <td>882367</td>
    </tr>
    <tr>
        <td>F Name Six</td>
        <td>M Name Six</td>
        <td>L Name Six</td>
        <td>44</td>
        <td>Male</td>
        <td>asd@alk.com</td>
        <td>1029384756</td>
        <td>axcvgy</td>
        <td>Delhi</td>
        <td>New Delhi</td>
        <td>110024</td>
        <td>22003399448</td>
        <td>90812</td>
        <td>Neuro</td>
        <td>UG</td>
        <td>330984</td>
    </tr>
    
  </tbody>
</Table>
</>
    );
}

export default DoctorList;