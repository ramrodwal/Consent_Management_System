import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';
import axios from 'react';



function ApprovedRecords(){

  const [records, setRecords] = useState([]);


  useEffect(() => {

    const fetchRecord = async () => {
      const token = localStorage.getItem('authToken'); // get token from localStorage
      const id = localStorage.getItem('id');
      const headers = { Authorization: `Bearer ${token}` }; // add token to headers
      const { data } = await axios.get(`http://localhost:9099/hospital/record-mapping/${id}`, { headers });
      console.log(data);
      setRecords(data); 
    };
  
    fetchRecord();
  }, []);

return(
    <>
    <center><h1 className='pageheading'>List of all records</h1></center>
    <Table stripped bordered hover variant="dark" size="sm">
    <thead>
          <tr className='tablehead'>
            <th className='tabledata'>Record Id</th>
            <th className='tabledata'>Disease Name</th>
            <th className='tabledata'>Patient Aadhar</th>
            <th className='tabledata'>Priescription</th>
            <th className='tabledata'>Hospital Id</th>
            <th className='tabledata'>Practitioners Aadhar</th>

          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td className='tabledata'>{record.record_id}</td>
              <td className='tabledata'>{record.disease_name}</td>
              <td className='tabledata'>{record.patientAadhar}</td>
              <td className='tabledata'>{record.record}</td>
              <td className='tabledata'>{record.centralHospital.hospitalId}</td>
              <td className='tabledata'>{record.medicalPractitioner.practitionerAadhar}</td>
              <td className='tabledata'><Form.Check aria-label="option 1" /></td>
            </tr>
          ))}
        </tbody>
  {/* <tbody>
    <tr>
        <td className='tabledata'>1</td>
        <td className='tabledata'><Form.Check aria-label="option 1" /></td>
        
        

    </tr>
    <tr>
        <td className='tabledata'>2</td>
        <td className='tabledata'><Form.Check aria-label="option 1" /></td>
       

    </tr>
    <tr>
        <td className='tabledata'>3</td>
        <td className='tabledata'><Form.Check aria-label="option 1" /></td>
     

    </tr>
    <tr>
        <td className='tabledata'>4</td>
        <td className='tabledata'><Form.Check aria-label="option 1" /></td>
        

    </tr>
    <tr>
        <td className='tabledata'>5</td>
        <td className='tabledata'><Form.Check aria-label="option 1" /></td>
        

    </tr>
    <tr>
        <td className='tabledata'>6</td>
        <td className='tabledata'><Form.Check aria-label="option 1" /></td>
       

    </tr>
  </tbody> */}
</Table>
<center><button type="submit" className="btn btn-primary">
              Submit
            </button>
            </center>
    </>
)
}

export default ApprovedRecords;