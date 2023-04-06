import './App.css';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import RegistrationForm from './components/RegistrationForm';
import ServicesTypes from './components/ServicesTypes';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const handlePincodeSubmit = (pincode) => {
    console.log(`User submitted pincode: ${pincode}`);
  };

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home onPincodeSubmit={handlePincodeSubmit}/>}/>
            <Route path='/categories' element={<ServicesTypes/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/signup' element={<RegistrationForm/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
