import { useState } from 'react';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import RegistrationForm from './components/RegistrationForm';
import { ServicesTypesFunc } from './components/ServicesTypes';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
// import backgroundImage from './stubs/Constants'

function App() {
    const [isLoggedIn , setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"))
    const [userPincode, setUserPincode] = useState(undefined)
    const [navShow, setNavShow] = useState(true)
    const toggleNav = () =>{
        setNavShow(!navShow)
    }
    // let bgImg = backgroundImage;

    return (
        // <div className= "full-screen w3r-dot gradient-background" >
        <div className= "full-screen gradient-with-dots" >
            <Router>
                {navShow ? (<div className='my-component'><Navbar loggedIn={isLoggedIn} setLogIn={setIsLoggedIn}/></div>) : 
                (<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"></nav>) }
                <div className='my-component' style={{marginTop:56}}>
                    <Routes>
                        <Route path='/login' element={<Login  sendIsloggedIn = {setIsLoggedIn}/>}/>
                        <Route path='/' element={<Home uPincode={userPincode} setUserPincode={setUserPincode}/>}/>
                        <Route path='/categories' element={<ServicesTypesFunc pincode={userPincode}/>}/>
                        <Route path='/about' element={<AboutUs/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/signup' element={<RegistrationForm/>}/>
                    </Routes>
                </div>
            </Router>
            <button className="my-component btn btn-outline-dark" onClick={toggleNav}
				style={{backgroundColor:'black', position:'fixed', left:"90px", bottom:"80px", color:"white"}}>
                {navShow?"Hide":"Show"}
            </button>
        </div>
    );
}

export default App;
