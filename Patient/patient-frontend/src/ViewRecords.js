import React from 'react'
import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function ViewRecords() {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);


  useEffect(() => {

    const fetchRecord = async () => {
      const token = localStorage.getItem('authToken'); // get token from localStorage
      const id = localStorage.getItem('id');
      const headers = { Authorization: `Bearer ${token}` }; // add token to headers

      if (token === null) {
        navigate("/");
      }
      else{
        const { data } = await axios.get(`http://localhost:8765/records/medical-records/${id}`, { headers });
        console.log(data);
        setRecords(data);
      }

    };

    fetchRecord();
  }, []);




  return (
    <>

      <center><h1 className='pageheading'>View Records</h1></center>


      <Table stripped bordered hover variant="dark" size="sm">
        <thead>
          <tr className='tablehead'>
            <th className='tabledata'>Record Id</th>
            <th className='tabledata'>Disease Name</th>
            <th className='tabledata'>Priescription</th>
            <th className='tabledata'>Hospital Name</th>
            <th className='tabledata'>Practitioners Name</th>

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
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default ViewRecords;