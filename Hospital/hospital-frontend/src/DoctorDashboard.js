import React , {useState,useEffect} from 'react'
import "./HospitalComponents/HospitalStyle.css"
import Table from 'react-bootstrap/Table'
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




function DoctorDashboard(){
  
  const token = localStorage.getItem('practitionerAuthToken')
  const headers = { Authorization: `Bearer ${token}` };
    const practitionerAadhar=localStorage.getItem('id');
const navigate=useNavigate();
  const [patientDetails,setPatient]=useState([]);

  useEffect(() => {
    

      if(token===null){
        navigate("/DoctorLogin");  
      }
      else{
        axios.get(`http://localhost:9099/hospital/getPatientsByPractitionerAadhar/${practitionerAadhar}`,{headers}).then((response) => {
          setPatient(response.data);
        });
      }

    
  }, []);


return(
    <>
        

  <center><h1 className='pageheading'>Welcome Practitioner</h1></center>

  <Container className="mt-5">
      
        
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Patient"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
            <Button className="rounded-pill" variant="outline-primary">
              Search
            </Button>
          </Form>
          <br></br>

          <Table stripped bordered hover variant="dark" size="sm">
        <thead>
          <tr className='tablehead'>
            <th>Patient Name</th>

          </tr>

        </thead>
        <tbody>
          {patientDetails.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.patientName}</td>
            </tr>
          ))}
        </tbody>
      </Table>

 
        
      
    </Container>

    </>
)

}

export default DoctorDashboard;