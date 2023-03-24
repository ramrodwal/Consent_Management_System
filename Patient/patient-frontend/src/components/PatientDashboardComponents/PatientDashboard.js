import React from "react";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { IconName } from "react-icons/fa";

function PatientDashboard(){
    return (
        <>
        <Container>
            <h1 className="patientdashboard">Welcome!</h1>
            
                {/* <h3>Your records</h3>
                <br>
                </br>
                Sugar Reports{' '}
                <Button variant="primary">View</Button>{' '}
                <Button variant="secondary">Update</Button>{' '}
                <Button variant="warning">Download PDF</Button>{' '}
                <Button variant="danger">Delete</Button>{' '}

                {['Consent'].map(
        (variant) => (
          <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
          >
            <Dropdown.Item eventKey="1">Doctor 1</Dropdown.Item>
            <Dropdown.Item eventKey="2">Doctor 2</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        ),
      )} */}

<CardGroup className="patientcard">
      <Card >
        <a className="patientdashboardcard">
        <Card.Img variant="top" src="/consent.png"  />
        </a>
        <Card.Body>
          <Card.Title>View All Requests</Card.Title>
        </Card.Body>
       
      </Card>
      <Card >
        <a className="patientdashboardcard">
        <Card.Img variant="top" src="/profile.png" />
        </a>
        <Card.Body>
          <Card.Title>View/Update Profile</Card.Title>
         
        </Card.Body>
        
      </Card>
      <Card >
        <a className="patientdashboardcard">
        <Card.Img variant="top" src="/records.jpg" />
        </a>
        <Card.Body>
          <Card.Title>View Records</Card.Title>
       
        </Card.Body>
       
      </Card>
    </CardGroup>


            </Container>

        </>
  );

}

export default PatientDashboard;
