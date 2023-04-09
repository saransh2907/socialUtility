import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./style.css";

const Login = ({sendIsloggedIn}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here, such as sending a request to an authentication API
    localStorage.setItem("password", password)
    localStorage.setItem("user", username)
    localStorage.setItem("isLoggedIn", true)
    console.log("Logged in sucessfully")
    setIsLoggedIn(true);
    sendIsloggedIn(true)
    navigate('/');
  };

  let bgImg = "https://img.freepik.com/premium-photo/abstract-blue-background-texture_196038-417.jpg?w=740"

  return isLoggedIn ? (
    <div>
      <p>You are logged in!</p>
    </div>
  ) : (
    <div className="form" style={{marginTop:'7%' ,backgroundImage: `url(${bgImg})`}} onSubmit={handleLogin}>
        <div className="form-head">
            <nav className="bg-dark navbar-dark navbar" style={{width:"100%"}}>
                <div className="row col-12 d-flex justify-content-left text-white">
                    <h3>Welcome to Social Utility</h3>
                </div>
            </nav>
        </div>
        <div className="form-body">
            <div className="row mx-2">
                <label className="form__label" htmlFor="username">Username:{" "}</label>
                <div className="col-sm-7">
                    <input  className="form-control" type="text" placeholder="Username" id="username" value={username} onChange={handleUsernameChange} />
                </div>
            </div>
        </div>
        <div className="form-body">
            <div className="row mx-2">
                <label className="form__label" htmlFor="password">Password:{" "}</label>
                <div className="col-sm-7">
                    <input  className="form-control" type="password" placeholder="Password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
            </div>
        </div>
        <div className="footer">
            <Link className='btn btn-success mx-2' to="/" relative="path" onClick={handleLogin}>Login</Link>
        </div>
    </div>
  );
};

export default Login;
