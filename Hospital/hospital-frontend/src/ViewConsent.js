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