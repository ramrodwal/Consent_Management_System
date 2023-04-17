import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useLocation } from "react-router-dom";


function ApprovedRecords() {
  const [records, setRecords] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    const fetchRecord = async () => {
      const token = localStorage.getItem('authToken');
      const id = localStorage.getItem('id');
      const headers = { Authorization: `Bearer ${token}` };
      const { data } = await axios.get(`http://localhost:9099/hospital/record-mapping/${id}`, { headers });
      console.log(data);
      setRecords(data); 
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Selected rows:', selectedRows);
    // Do something with the selected rows, e.g. delete them
    console.log(consentId);
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
              <th className='tabledata'>Patient Aadhar</th>
              <th className='tabledata'>Priescription</th>
              <th className='tabledata'>Hospital Id</th>
              <th className='tabledata'>Practitioners Aadhar</th>
              <th className='tabledata'>Select</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td className='tabledata'>{record.recordId}</td>
                <td className='tabledata'>{record.diseaseName}</td>
                <td className='tabledata'>{record.patientAadhar}</td>
                <td className='tabledata'>{record.record}</td>
                <td className='tabledata'>{record.centralHospital.hospitalId}</td>
                <td className='tabledata'>{record.medicalPractitioner.practitionerAadhar}</td>
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
