import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import "./HospitalComponents/HospitalStyle.css"
import Table from 'react-bootstrap/Table'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function ViewConsent() {
  const navigate = useNavigate();
  const token = localStorage.getItem('practitionerAuthToken')
  const headers = { Authorization: `Bearer ${token}` };
  const practitionerAadhar = localStorage.getItem('id');


  const [consentDetails, setConsentDetails] = useState([]);
  const [hospitalName, setHospitalName] = useState('');
  const [patientName, setPatientName] = useState('');

  useEffect(() => {

    if (token === null) {
      navigate("/DoctorLogin");
    }

    else {
      axios.get(`http://localhost:9099/hospital/view-consent/${practitionerAadhar}`,{headers}).then((response) => {
        setConsentDetails(response.data);
      });
    }

  }, []);

  const getHospitalName = (hospitalId) => {
    axios.get(`http://localhost:9099/hospital/practitioner-login/get-hospital/${hospitalId}`, { headers }).then((response) => {
      setHospitalName(response.data);
    }, [])
    return hospitalName;
  }

  const getPatientName = (patientAadhar) => {
    axios.get(`http://localhost:9099/hospital/practitioner-login/get-patient/${patientAadhar}`, { headers }).then((response) => {
      setPatientName(response.data);
    }, [])
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
            <tr key={consent.consentId}>
              <td>{consent.consentId}</td>
              <td>{consent.diseaseName}</td>
              <td>{getHospitalName(consent.hospitalId)}</td>
              <td>{getPatientName(consent.patientAadhar)}</td>
              <td>{consent.status}</td>
              {consent.status === "APPROVED" && (
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