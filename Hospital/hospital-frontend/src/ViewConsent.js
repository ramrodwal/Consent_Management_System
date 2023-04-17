import React,{useEffect, useState} from 'react'
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./HospitalComponents/HospitalStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table'
import axios from "axios";

function ViewConsent() {
  let practitionerAadhar='123412341234';

  const [consentDetails,setConsentDetails]=useState([]);

  useEffect(() => {
  
    let practitionerAadhar='123412341234'
    axios.get(`http://localhost:9092/hospital/practitioner-login/view-consent/${practitionerAadhar}`).then((response) => {
      setConsentDetails(response.data);
    });
  }, []);

  return (
    <>

     

      <center><h1 className='pageheading'>Consent List</h1></center>

      <Table stripped bordered hover variant="dark" size="sm">
        <thead>
          <tr className='tablehead'>
            <th>Consent Id</th>
            <th>Disease Name</th>
            <th>Hospital Name</th>
            <th>Patient Name</th>
            <th>Status</th>

          </tr>
        </thead>
        {/* <tbody>
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
        </tbody> */}
        <tbody>
          {consentDetails.map((consent) => (
            <tr key={consent.id}>
              <td>{consent.consentId}</td>
              <td>{consent.diseaseName}</td>
              <td>{consent.hospitalId}</td>
              <td>{consent.patientAadhar}</td>
              <td>{consent.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default ViewConsent;