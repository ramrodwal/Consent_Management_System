import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import "./HospitalComponents/HospitalStyle.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function AdminPostLogin() {
    return(
        <>
        <center><h1 className='pageheading'>Welcome Admin</h1></center>
        
            
                
               
        <Container className='admincontainer'>
        <CardGroup>
      <Card >
        <a className="patientdashboardcard" href="/RegisterNewHospital">
        <Card.Img variant="top" src="/RegisterNewHospital(1).jpg" className='admindashboardcard' />
        </a>
        <Card.Body>
          <Card.Title>Register New Hospital</Card.Title>
        </Card.Body>
       
      </Card>
      <Card >
        <a className="patientdashboardcard" href="/RegisterNewDoctor">
        <Card.Img variant="top" src="/RegisterNewDoctor(1).jpg" className='admindashboardcard'/>
        </a>
        <Card.Body>
          <Card.Title>Register New Medical Practitioner</Card.Title>
         
        </Card.Body>
        
      </Card>
    </CardGroup>

    <CardGroup>
      
      <Card >
        <a className="patientdashboardcard" href="/HospitalList">
        <Card.Img variant="top" src="/HospitalList(1).jpg"  className='admindashboardcard'/>
        </a>
        <Card.Body>
          <Card.Title>Hospital List</Card.Title>
       
        </Card.Body>
       
      </Card>

      <Card >
        <a className="patientdashboardcard" href="/DoctorList">
        <Card.Img variant="top" src="/DoctorList(1).jpg" className='admindashboardcard'/>
        </a>
        <Card.Body>
          <Card.Title>Medical Practitioner's List</Card.Title>
       
        </Card.Body>
       
      </Card>
    </CardGroup>


            </Container>

    


           
        </>

    );
}

export default AdminPostLogin;