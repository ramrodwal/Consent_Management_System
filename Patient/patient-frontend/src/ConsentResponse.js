import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function ConsentResponse() {
  const token = localStorage.getItem('authToken')
  const navigate = useNavigate();
  const headers = { Authorization: `Bearer ${token}` };
  const id=localStorage.getItem('id');
  
  //const id = localStorage.getItem('id');

  const [requests, setRequests] = useState([]);
  const [declinedRequests, setDeclinedRequests] = useState([]);
  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
    else {

      axios.get(`http://localhost:8765/consent/view-consent/${id}`,{ headers }).then((response) => {

        setRequests(response.data);
        setDeclinedRequests(Array(response.data.length).fill(false));
      });
    }

  }, []);

  const handleDenyRequest = (event, index) => {
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
          "http://localhost:8765/consent/update-status/" +
          cid,
          resp,{headers}
        )
        .then((response) => {
          console.log(response);
          // Update the declinedRequests array to set the corresponding index to true
          setRequests((prevRequests) => {
            const newRequests = [...prevRequests];
            newRequests[index].status = "DECLINED";
            return newRequests;
          });
          // navigate(`/ConsentResponse.js`);
        })
        .catch((error) => console.log(error));

    } else {
      console.log("Consent ID is undefined.");
    }
  };
  const handleAcceptRequest = (event, index) => {
    event.preventDefault();
    const resp = {
      consentId: requests[index].consentId,
      hospitalId: requests[index].hospitalId,
      practitionerAadhar: requests[index].practitionerAadhar,
      patientAadhar: requests[index].patientAadhar,
      diseaseName: requests[index].diseaseName,
      status: "APPROVED",
    };
    const cid = requests[index].consentId;
    // console.log("cid");
    // console.log(requests);
    // console.log(requests[index].consentId);

    if (cid) {
      axios
        .post(
          "http://localhost:8765/consent/update-status/" +
          cid,
          resp, {headers}
        )
        .then((response) => {
          console.log(response);
          // Update the declinedRequests array to set the corresponding index to true
          setDeclinedRequests((prev) => {
            const newDeclinedRequests = [...prev];
            newDeclinedRequests[index] = true;
            return newDeclinedRequests;
          });
          navigate(`/ApprovedRecords.js?consentId=${requests[index].consentId}`);
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
              {request.status !== "pending" ?
                (
                  request.status === "APPROVED" ?

                    <Button variant="danger" onClick={(event) => handleDenyRequest(event, index)}>Revoke</Button> :

                    <td>RESPONDED</td>
                ) : (
                  <td>
                    <Button onClick={(event) => handleAcceptRequest(event, index)}>Accept</Button>
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