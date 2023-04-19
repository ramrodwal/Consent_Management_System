import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

  const AdminNavbar = () => {
    const navigate = useNavigate();
    const handleLogout=() =>{
    //   console.log("ho raha hai call")
      localStorage.removeItem('adminAuthToken');
      localStorage.removeItem('id');
      navigate("/");
    }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <Navbar.Brand href="/AdminPostLogin">Admin</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/RegisterNewHospital">Register New Hospital</Nav.Link>
          <Nav.Link href="/RegisterNewDoctor">Register New Practitiioner</Nav.Link>
          <Nav.Link href="/HospitalList">Hospital List</Nav.Link>
          <Nav.Link href="/DoctorList">Practitioner List</Nav.Link>
          
        </Nav>
        <Nav>
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>
    </>
  )
}
export default AdminNavbar;
