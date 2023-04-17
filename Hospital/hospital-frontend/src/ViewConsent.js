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
  const [hospitalName,setHospitalName]=useState('');
  const [patientName,setPatientName]=useState('');

  useEffect(() => {
  
    let practitionerAadhar='123412341234'
    axios.get(`http://localhost:9092/hospital/practitioner-login/view-consent/${practitionerAadhar}`).then((response) => {
      setConsentDetails(response.data);
    });
  }, []);

  const getHospitalName=(hospitalId)=>{
    axios.get(`http://localhost:9099/hospital/practitioner-login/get-hospital/${hospitalId}`).then((response)=>{
      setHospitalName(response.data);
    },[])
    return hospitalName;
  }

  const getPatientName=(patientAadhar)=>{
    axios.get(`http://localhost:9099/hospital/practitioner-login/get-patient/${patientAadhar}`).then((response)=>{
      setPatientName(response.data);
    },[])
    return patientName;
  }

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
            <th>Fetch</th>

          </tr>
        </thead>
        
        <tbody>
          {consentDetails.map((consent) => (
            <tr key={consent.id}>
              <td>{consent.consentId}</td>
              <td>{consent.diseaseName}</td>
              <td>{getHospitalName(consent.hospitalId)}</td>
              <td>{getPatientName(consent.patientAadhar)}</td>
              <td>{consent.status}</td>
              {consent.status==="APPROVED" && (
                <tr>
                  <div className='text-center'>
                    <Button href={`/ViewApprovedRecords/?consentId=${consent.consentId}`}>Fetch</Button>
                  </div>
                </tr>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default ViewConsent;