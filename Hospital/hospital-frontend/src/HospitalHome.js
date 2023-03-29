import React from "react";
import Container from 'react-bootstrap/esm/Container';
import "./HospitalComponents/HospitalStyle.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';




function HospitalHome(){
    return(
        <>
        <div className="pageheading">
        <center><h1 className="pageheading">Hospital Home</h1></center><br></br>
        </div>
        <Container>
            
           

<CardGroup  className='topgroup'>
  <Card>
    <a href='/BookAppointmentDoctor'>
    <Card.Img variant="top" className='Images' src="/BookAppointment.jpg" />
    </a>
    <Card.Body>
      
      
    </Card.Body>
    <Card.Footer>
    <h3><b>Book an appointment</b></h3>
    </Card.Footer> 
    
  </Card>
  <Card>
    <a href='/DoctorLogin'>
    <Card.Img variant="top" className='Images' src="/DoctorLogin.jpg" />
    </a>
    <Card.Body>
      
      
    </Card.Body>
    <Card.Footer>
      <h3><b>Practitioner's Login</b></h3>
    </Card.Footer>
   
  </Card>

  <Card>
    <a href='/AdminLogin'>
    <Card.Img variant="top" className='Images' src="/AdminLogin.jpg" />
    </a>
    <Card.Body>
      
      
    </Card.Body>
    <Card.Footer>
      <h3><b>Admin Login</b></h3>
    </Card.Footer>
   
  </Card>
  
</CardGroup>
            </Container>

        </>

    );
}

export default HospitalHome;