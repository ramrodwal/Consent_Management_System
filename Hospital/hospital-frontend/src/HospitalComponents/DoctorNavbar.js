import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const DoctorNavbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    //   console.log("ho raha hai call")
    localStorage.removeItem('practitionerAuthToken');
    localStorage.removeItem('id');
    localStorage.removeItem('hospitalId');
    navigate("/DoctorLogin");
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Navbar.Brand href="/DoctorDashboard">Practitioner</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/ConsentRequest">Request Consent</Nav.Link>
            <Nav.Link href="/ViewConsent">View Consent</Nav.Link>
            <Nav.Link href="/AddMedicalRecords">Add Medical Records</Nav.Link>


          </Nav>
          <Nav>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </>
  )
}
export default DoctorNavbar;
