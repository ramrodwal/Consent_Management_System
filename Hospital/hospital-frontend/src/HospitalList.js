import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./HospitalComponents/HospitalStyle.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Table from 'react-bootstrap/Table'


function HospitalList(){
    
    return(
        <Container>
            <center><h1>Hospital List</h1></center>

            <Table stripped bordered hover variant="dark" size="sm">
  <thead>
    <tr className='tablehead'>
      <th>Hospital ID</th>  
      <th>Hospital Name</th>
      <th>Contact Number</th>
      <th>Address</th>
      <th>State</th>
      <th>City</th>
      <th>Zip Code</th>
 
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>1</td>
        <td>ABCD</td>
        <td>12345</td>
        <td>asdffg</td>
        <td>Delhi</td>
        <td>New Delhi</td>
        <td>110024</td>
    </tr>
    <tr>
        <td>2</td>
        <td>EFGH</td>
        <td>987928</td>
        <td>ajdhcmk</td>
        <td>Maharashtra</td>
        <td>Mumbai</td>
        <td>765890</td>
    </tr>
    <tr>
        <td>3</td>
        <td>PQRS</td>
        <td>901238</td>
        <td>kjsdiuhn</td>
        <td>Karnataka</td>
        <td>Bangalore</td>
        <td>576809</td>
    </tr>
    <tr>
        <td>4</td>
        <td>WASD</td>
        <td>60981524</td>
        <td>mchbujgxkx</td>
        <td>Goa</td>
        <td>Goa</td>
        <td>314256</td>
    </tr>
    <tr>
        <td>5</td>
        <td>WXYZ</td>
        <td>90870987</td>
        <td>lkjhasd</td>
        <td>Punjab</td>
        <td>Chandigarh</td>
        <td>999112</td>
    </tr>
  </tbody>
</Table>
  </Container> 
    );
}

export default HospitalList;