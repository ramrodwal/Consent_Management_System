import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import "./HospitalComponents/HospitalStyle.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function AdminPostLogin() {
    return(
        <>
        <center><h1 className='pageheading'>Welcome Admin</h1></center>
        
            <Container>
                
               

<CardGroup  className='topgroup'>
      <Card >
        <a href='/RegisterNewHospital'>
        <Card.Img variant="top" className='Images' src="https://cdn-icons-png.flaticon.com/512/4625/4625853.png" />
        </a>
        <Card.Body>
          
          
        </Card.Body>
        <Card.Footer>
        <h3><b>Register New Hospital</b></h3>
        </Card.Footer> 
        
      </Card>
      <Card>
        <a href='/RegisterNewDoctor'>
        <Card.Img variant="top" className='Images' src="https://cdn-icons-png.flaticon.com/512/3774/3774293.png"  />
        </a>
        <Card.Body>
          
          
        </Card.Body>
        <Card.Footer>
          <h3><b>Register New Doctor</b></h3>
        </Card.Footer>
       
      </Card>
      
    </CardGroup>

    <CardGroup className='topgroup'>
      <Card>
        <a href={'/HospitalList'}>
         <Card.Img variant="top" className='Images' src="https://cdn-icons-png.flaticon.com/512/2840/2840428.png" /> 
         </a>
        <Card.Body>
         
          
        </Card.Body>
        <Card.Footer>
        <h3><b>Hospital List</b></h3>
        </Card.Footer>
      
      </Card>
      <Card>
        <a href="/DoctorList">
        <Card.Img variant="top" className='Images' src="https://www.iconbunny.com/icons/media/catalog/product/2/1/2131.12-doctor-icon-iconbunny.jpg" /> 
        </a>
        <Card.Body>
          
         
        </Card.Body>
        <Card.Footer>
        <h3><b>Doctor's List</b></h3>
        </Card.Footer>
       
      </Card>
      
    </CardGroup>


            </Container>
        </>

    );
}

export default AdminPostLogin;