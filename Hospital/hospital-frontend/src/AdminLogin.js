import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";




function AdminLogin() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isNotEmpty = (value) => {
    return value.trim().length > 0;
  }

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const login = {
      email: email, password: password
    };
    if (isNotEmpty(email) && isValidEmail(email) && isNotEmpty(password)) {

      try {
        const Token = await axios.post('http://localhost:9099/api/auth/admin/authenticate', login)
        localStorage.setItem('adminAuthToken', Token.data.token);

        navigate("/AdminPostLogin");

      } catch (error) {
        console.log("this is an error!!!")
      }


    } else {
      toast.error('Please fill in all the required fields with valid input.',
        { position: toast.POSITION.TOP_CENTER });

    }
  };

  return (


    <>

      <div className='pageheading'>
        <center><h1 className='pageheading'>Admin Login</h1></center>
      </div>





      <Container>
        <ToastContainer />
        <Card>
          <Card.Img class="logo" src="logo.png" />
        </Card>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required={true}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
            />
            {!isNotEmpty(email) && <Form.Text className="text-danger">Please enter an email address</Form.Text>}
            {isNotEmpty(email) && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email) && <Form.Text className="text-danger">Please enter a valid email address</Form.Text>}

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required={true} minLength={8} />
            {!isNotEmpty(password) && <Form.Text className="text-danger">Please enter a password</Form.Text>}
            {isNotEmpty(password) && password.length < 8 && <Form.Text className="text-danger">Password must be at least 8 characters long</Form.Text>}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </Container>


    </>
  );
}

export default AdminLogin;