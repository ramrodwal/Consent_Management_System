import axios from 'axios';
import React, { useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Content(){

    const [patients, setPatients] = useState([]);


  const handleClick = () => {
    axios.get('http://localhost:9090/api/patient')
      .then(response => setPatients(response.data))
      .catch(error => console.log(error));
  };

    return(
        <>
        <Container className="showpatientbutton">
        <Button onClick={handleClick} variant="outline-success" >Show Patient Name</Button>{' '}
        <table border="1px">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient =>
            <tr key={patient.id}>
              <td>{patient.fname}</td>
              <td>{patient.mname}</td>
              <td>{patient.lname}</td>

            </tr>
          )}
        </tbody>
      </table>
        </Container> 
        </>
    );
}

export default Content;