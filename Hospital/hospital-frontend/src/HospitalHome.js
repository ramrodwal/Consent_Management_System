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
    <Card.Img variant="top" className='Images' src="https://media.istockphoto.com/id/1286487110/vector/appointment-booking-calendar-vector-illustration.jpg?s=612x612&w=0&k=20&c=K26phQ_nb0tu7Ezx9Fvf_43_5J-bOkufOUf_HfqNlXA=" />
    </a>
    <Card.Body>
      
      
    </Card.Body>
    <Card.Footer>
    <h3><b>Book an appointment</b></h3>
    </Card.Footer> 
    
  </Card>
  <Card>
    <a href='/DoctorLogin'>
    <Card.Img variant="top" className='Images' src="https://img.freepik.com/premium-vector/doctor-icon-avatar-white_136162-58.jpg?w=2000" />
    </a>
    <Card.Body>
      
      
    </Card.Body>
    <Card.Footer>
      <h3><b>Doctor's Login</b></h3>
    </Card.Footer>
   
  </Card>

  <Card>
    <a href='/AdminLogin'>
    <Card.Img variant="top" className='Images' src="https://static.vecteezy.com/system/resources/previews/003/190/658/original/line-icon-for-back-office-vector.jpg" />
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