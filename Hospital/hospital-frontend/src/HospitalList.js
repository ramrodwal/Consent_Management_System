import React, { useState , useEffect } from 'react';
import "./HospitalComponents/HospitalStyle.css"
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from "axios";



function HospitalList() {

  const navigate=useNavigate();
  const [hospitals,setHospitals]=useState([]);

  useEffect(() => {

    const token = localStorage.getItem('adminAuthToken')

  
    
        
      if(token===null){
        navigate("/AdminLogin");  
      }
      else{
      const headers = { Authorization: `Bearer ${token}` }; // add token to headers
        axios.get("http://localhost:9099/hospital/admin-login/hospital-list",{headers}).then((response) => {
          setHospitals(response.data);
        });
      }
  
  }, []);

  return (
    <>


    

      <center><h1 className='pageheading'>Hospital List</h1></center>

      <Table stripped bordered hover variant="dark" size="sm">
        <thead>
          <tr className='tablehead'>
            <th>Hospital ID</th>
            <th>Hospital Name</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>State</th>
            <th>City</th>
            <th>ZipCode</th>

          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital)=>(
            <tr key={hospital.id}>
              <td>{hospital.hospitalId}</td>
              <td>{hospital.hospitalName}</td>
              <td>{hospital.contactNumber}</td>
              <td>{hospital.state}</td>
              <td>{hospital.city}</td>
              <td>{hospital.address}</td>
              <td>{hospital.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default HospitalList;