import React from 'react'
import Table from 'react-bootstrap/Table'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function ViewRecords(){

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
            <center><h1>View Records</h1></center>


            <Table stripped bordered hover variant="dark" size="sm">
  <thead>
    <tr className='tablehead'>
      <th className='tabledata'>Record List</th>  
      
      
      
 
    </tr>
  </thead>
  <tbody>
    <tr>
        <td className='tabledata'>Record 1</td>

    </tr>
    <tr>
        <td className='tabledata'>Record 2</td>

    </tr>
    <tr>
        <td className='tabledata'>Record 3</td>

    </tr>
    <tr>
        <td className='tabledata'>Record 4</td>

    </tr>
    <tr>
        <td className='tabledata'>Record 5</td>

    </tr>
    <tr>
        <td className='tabledata'>Record 6</td>

    </tr>
  </tbody>
</Table>
        </>
    )
}

export default ViewRecords;