import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';



function ConsentResponse() {
  const [requests, setRequests] = useState([]);
  const [declinedRequests, setDeclinedRequests] = useState([]);
  useEffect(() => {

    axios.get("http://localhost:9092/patient/view-consent/123412341234").then((response) => {
      setRequests(response.data);
      setDeclinedRequests(Array(response.data.length).fill(false));
    });
  }, []);

  const handleDenyRequest  = (event, index) => {
    event.preventDefault();
    const resp = {
      consentId: requests[index].consentId,
      hospitalId: requests[index].hospitalId,
      practitionerAadhar: requests[index].practitionerAadhar,
      patientAadhar: requests[index].patientAadhar,
      diseaseName: requests[index].diseaseName,
      status: "DECLINED",
    };
    const cid = requests[index].consentId;
    console.log("cid");
    console.log(requests);
    console.log(requests[index].consentId);
  
    if (cid) {
      axios
        .post(
          "http://localhost:9092/patient/login/consentManager/responseConsent/" +
            cid,
          resp
        )
        .then((response) => {
          console.log(response);
          // Update the declinedRequests array to set the corresponding index to true
          setDeclinedRequests((prev) => {
            const newDeclinedRequests = [...prev];
            newDeclinedRequests[index] = true;
            return newDeclinedRequests;
          });
        })
        .catch((error) => console.log(error));
        
    } else {
      console.log("Consent ID is undefined.");
    }
  };

  
  return (

    <>


      <center><h1 className='pageheading'>Consent List</h1></center>

      <Table stripped bordered hover variant="dark" size="sm">
        <thead>
          <tr className='tablehead'>

            <th>Consent ID</th>
            <th>Disease_name </th>
            <th>Hospital_id  </th>
            <th>Patient_aadhar</th>
            <th>Practitioner_aadhar</th>
            <th>Status</th>
            <th>Response</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={request.consentId}>
              <td>{request.consentId}</td>
              <td>{request.diseaseName}</td>
              <td>{request.hospitalId}</td>
              <td>{request.patientAadhar}</td>
              <td>{request.practitionerAadhar}</td>
              <td>{request.status}</td>
              {request.status!=="pending"  ? (
                <td>RESPONDED</td>
              ) : (
                <td>
                  <Button variant="success" href="/ApprovedRecords.js">Accept</Button>
                  <Button variant="danger" onClick={(event) => handleDenyRequest(event, index)}>Deny</Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )

}

export default ConsentResponse;