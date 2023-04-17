import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import axios from "axios";

export default function ViewApprovedRecords() {

    const location=useLocation();
    const [records,setRecords]=useState([]);
    const [patientName,setPatientName]=useState('');
    const consentId = new URLSearchParams(location.search).get("consentId");
    
    useEffect(()=>{
        axios.get(`http://localhost:9092/hospital/approved-records/${consentId}`)
            .then((response)=>{
                setRecords(response.data);
            })
            .catch(error=>{
                console.log(error);
            });
    },[])
    
    const getPatientName=(patientAadhar)=>{
        axios.get(`http://localhost:9099/hospital/practitioner-login/get-patient/${patientAadhar}`).then((response)=>{
          setPatientName(response.data);
        },[])
        return patientName;
      }


  return (
    <>
    <center><h1 className='pageheading'>Approved Records List</h1></center>
    <Table stripped bordered hover variant="dark" size="sm">
        <thead>
          <tr className='tablehead'>
            <th>Consent Id</th>
            <th>Record Id</th>
            <th>Prescription</th>
            <th>Patient Name</th>
            <th>Disease Name</th>
            <th>Approved Date</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.recordId}>
              <td>{record.cm.consentId}</td>
              <td>{record.recordId}</td>
              <td>{record.record}</td>
              <td>{getPatientName(record.patientAadhar)}</td>
              <td>{record.diseaseName}</td>
              <td>{record.approvedDate}</td>
            </tr>
          ))}
        </tbody>
        </Table>
    </>
  )
}
