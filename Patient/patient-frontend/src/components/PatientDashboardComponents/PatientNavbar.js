import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const PatientNavbar = () => {
  return (
    <>
      {/* <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/Profile.js" activeStyle>
            Profile
          </MenuLink>
          <MenuLink to="/Notification.js" activeStyle>
            Notifications
          </MenuLink>
          <MenuLink to="/Appointments.js" activeStyle>
            Appointments
          </MenuLink>
        </Menu>
      </PrimaryNav> */}
     <Navbar className='patientnavbar' variant="dark">
        <Container>
          <Navbar.Brand href="#home" >Consent Management Portal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="/">Logout </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
export default PatientNavbar
