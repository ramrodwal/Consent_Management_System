import React, { Fragment } from 'react';
import Header from "./components/Header";
import Homepage from './components/Homepage';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';


import Navigation from './components/DashboardComponents/Navigation';
import Content from './components/DashboardComponents/Content';
import { BrowserRouter as Router, Routes, Route, Redirect,} from "react-router-dom";


function Home(){
    return (
      <>
        <Header />
        <Homepage />
      </>
    );
}
function LoginPage(){
  return (
    <>
      <Header />
      <Login />
    </>
  );
}
function ForgotPass(){
  return (
    <>
      <Header />
      <ForgotPassword />
    </>
  );
}
function SignUpPage(){
  return (
    <>
      <Header />
      <SignUp />
    </>
  );
}
function DashboardPage(){
  return(
    <>
    <Navigation />
    <Content />
    </>
  );
}
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path={"/"} element={<Home />}></Route> 
        <Route exact path={"/Login.js"} element={<LoginPage />}></Route>
        <Route exact path={"/ForgotPassword.js"} element={<ForgotPass />}></Route>
        <Route exact path={"/SignUp.js"} element={<SignUpPage />}></Route>
        <Route exact path={"/Dashboard.js"} element={<DashboardPage />}></Route>
        </Routes>
      </Router>           
    </div>
    
  );
}

export default App;