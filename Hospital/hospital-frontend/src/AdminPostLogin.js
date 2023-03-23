import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./HospitalComponents/HospitalStyle.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function AdminPostLogin() {
    return(
        <>
        <center><h1>Admin Post Login</h1></center>
        
            <Container>
                
               

<CardGroup  className='topgroup'>
      <Card >
        <Card.Img variant="top" className='Images' src="https://cdn-icons-png.flaticon.com/512/746/746821.png" />
        <Card.Body>
          
          
        </Card.Body>
        <Card.Footer>
        <h3><b>Register New Hospital</b></h3>
        </Card.Footer> 
        
      </Card>
      <Card>
        <Card.Img variant="top" className='Images' src="https://img.freepik.com/premium-vector/doctor-nurse-with-patient-files_1639-36846.jpg?w=2000" />
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
         <Card.Img variant="top" className='Images' src="https://cdn-icons-png.flaticon.com/512/4228/4228725.png" /> 
         </a>
        <Card.Body>
         
          
        </Card.Body>
        <Card.Footer>
        <h3><b>Hospital List</b></h3>
        </Card.Footer>
      
      </Card>
      <Card>
        <Card.Img variant="top" className='Images' src="https://img.freepik.com/premium-vector/male-doctor-holding-clipboard_43633-7151.jpg?w=2000" /> 
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