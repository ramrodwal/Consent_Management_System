import React from "react";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function PatientDashboard(){
    return (
        <>
            <h1>Welcome Patient Name</h1>
            <container>
                <h3>Your records</h3>
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
      )}


            </container>

        </>
  );

}

export default PatientDashboard;