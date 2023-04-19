import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const PatientNavbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("ho raha hai call")
    localStorage.removeItem('authToken');
    localStorage.removeItem('id');
    navigate("/");
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Navbar.Brand href="/PatientDashboard.js">Patient</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Consentresponse.js">View All Requests</Nav.Link>
            <Nav.Link href="/PatientProfileView.js">View Profile</Nav.Link>
            <Nav.Link href="/ViewRecords.js">View Records</Nav.Link>


          </Nav>
          <Nav>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </>
  )
}
export default PatientNavbar
