import "./HospitalComponents/HospitalStyle.css"
import Table from 'react-bootstrap/Table'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function DoctorList() {
  const navigate = useNavigate();
  const [practitioners, setPractitioners] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem('adminAuthToken')
    // console.log(token)



    if (token === null) {
      navigate("/AdminLogin");
    }

    else {
      const headers = { Authorization: `Bearer ${token}` }; // add token to headers
      axios.get("http://localhost:9099/hospital/admin-login/practitioner-list", { headers }).then((response) => {
        setPractitioners(response.data);
      });
    }


  }, []);

  return (
    <>


      <center><h1 className="pageheading">Practitioner's List</h1></center>

      <Table stripped bordered hover variant="dark" size="sm">
        <thead>
          <tr className='tablehead'>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>State</th>
            <th>City</th>
            <th>Zip</th>
            <th>Aadhar Number</th>
            <th>Medical License Id</th>
            <th>Specialization</th>
            <th>Qualification</th>
            <th>Hospital Id</th>

          </tr>
        </thead>
        <tbody>
          {practitioners.map((practitioner) => (
            <tr key={practitioner.id}>
              <td>{practitioner.fname}</td>
              <td>{practitioner.mname}</td>
              <td>{practitioner.lname}</td>
              <td>{practitioner.age}</td>
              <td>{practitioner.gender}</td>
              <td>{practitioner.email}</td>
              <td>{practitioner.number}</td>
              <td>{practitioner.address}</td>
              <td>{practitioner.state}</td>
              <td>{practitioner.city}</td>
              <td>{practitioner.zipcode}</td>
              <td>{practitioner.practitionerAadhar}</td>
              <td>{practitioner.medicalLicenseId}</td>
              <td>{practitioner.specialisation}</td>
              <td>{practitioner.qualification}</td>
              <td>{practitioner.centralHospital.hospitalId}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default DoctorList;