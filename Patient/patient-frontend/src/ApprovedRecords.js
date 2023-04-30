import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function ApprovedRecords() {

  const token = localStorage.getItem('authToken');
  const id = localStorage.getItem('id');
  const headers = { Authorization: `Bearer ${token}` };

  const navigate = useNavigate();

  const [records, setRecords] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    const fetchRecord = async () => {

      
      if (token === null) {
        navigate("/");
      }
      else {
        const { data } = await axios.get(`http://localhost:8765/records/medical-records/${id}`, { headers });
        console.log(data);
        setRecords(data);
      }

    };

    fetchRecord();
  }, []);

  const handleCheckboxChange = (event, recordId) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, recordId]);
    } else {
      setSelectedRows(selectedRows.filter(rowId => rowId !== recordId));
    }
  };

  const location = useLocation();
  const consentId = new URLSearchParams(location.search).get("consentId");


  const [consent, setConsent] = useState({
    cm: {
      consentId: consentId
    }
  })
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('Selected rows:', selectedRows);
    const today = new Date();
    const dateAfterTenDays = new Date();
    dateAfterTenDays.setDate(today.getDate() + 10);

    // Create an array of arrays that represents the selected rows
    const selectedRecords = records
      .filter(record => selectedRows.includes(record.recordId))
      .map(record => ({
        cm: { consentId: consent.cm.consentId },
        recordId: record.recordId,
        practitionerAadhar: record.medicalPractitioner.practitionerAadhar,
        patientAadhar: record.patientAadhar,
        diseaseName: record.diseaseName,
        record: record.record,
        approvedDate: today.toISOString(),
        validity: dateAfterTenDays.toISOString()
      }));

    try {
      const response = await axios.post(
        'http://localhost:8765/consent/approved-records',
        JSON.stringify(selectedRecords), // Serialize the data as a JSON array
        { headers: { 'Content-Type': 'application/json' , ...headers} } // Set the content type to application/json
      );
      console.log("hello");

    } catch (error) {
      console.error(error);
    }
    console.log('Selected records:', selectedRecords);


    navigate(`/ConsentResponse.js`);

  };



  return (
    <>
      <center><h1 className='pageheading'>List of all records</h1></center>
      <form onSubmit={handleFormSubmit}>
        <Table stripped bordered hover variant="dark" size="sm">
          <thead>
            <tr className='tablehead'>
              <th className='tabledata'>Record Id</th>
              <th className='tabledata'>Disease Name</th>
              <th className='tabledata'>Priescription</th>
              <th className='tabledata'>Hospital Name</th>
              <th className='tabledata'>Practitioners Name</th>
              <th className='tabledata'>Select</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td className='tabledata'>{record.recordId}</td>
                <td className='tabledata'>{record.diseaseName}</td>
                <td className='tabledata'>{record.record}</td>
                <td className='tabledata'>{record.centralHospital.hospitalName}</td>
                <td className='tabledata'>{record.medicalPractitioner.fname} {record.medicalPractitioner.mname} {record.medicalPractitioner.lname}</td>
                <td className='tabledata'>
                  <Form.Check
                    aria-label="Select record"
                    checked={selectedRows.includes(record.recordId)}
                    onChange={(event) => handleCheckboxChange(event, record.recordId)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <center>
          <button type="submit" className="btn btn-primary" disabled={selectedRows.length === 0}>
            Submit
          </button>
        </center>
      </form>
    </>
  );
}

export default ApprovedRecords;
