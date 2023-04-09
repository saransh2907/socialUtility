import { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import RegistrationForm from './components/RegistrationForm';
import { ServicesTypesFunc } from './components/ServicesTypes';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const [isLoggedIn , setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"))
  const [userPincode, setUserPincode] = useState(undefined)
  const [navShow, setNavShow] = useState(true)
  const toggleNav = () =>{
    setNavShow(!navShow)
  }

  const handlePincodeSubmit = (pincode) => {
    console.log(`User submitted pincode: ${pincode}`);
    setUserPincode(pincode)
  };

  return (
    <div>
      <Router>
        {navShow ? (<div><Navbar loggedIn={isLoggedIn} setLogIn={setIsLoggedIn}/></div>) : 
        (<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"></nav>) }
        <div style={{marginTop:56}}>
          <Routes>
              <Route path='/login' element={<Login sendIsloggedIn = {setIsLoggedIn}/>}/>
              <Route path='/' element={<Home onPincodeSubmit={handlePincodeSubmit}/>}/>
              <Route path='/categories' element={<ServicesTypesFunc pincode={userPincode}/>}/>
              <Route path='/about' element={<AboutUs/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/signup' element={<RegistrationForm/>}/>
          </Routes>
        </div>
      </Router>
      <span className="mx-1 btn btn-outline-dark" style={{backgroundColor:'Yellow'}} onClick={toggleNav}>
        {navShow?"Show":"Hide"}
      </span>
    </div>
  );
}

export default App;
