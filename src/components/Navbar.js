import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({loggedIn, setLogIn}) {
  const appName = process.env.REACT_APP_NAME
  const [selected, setSelected] =useState("home")

  const onClickHome = () =>{setSelected('Home')}
  const onClickCategories = () =>{setSelected('Categories')}
  const onClickProfile = () =>{setSelected('Profile')}
  const onClickAbout = () =>{setSelected('About')}
  const onClickSignup = () =>{setSelected('Signup')}

  const handleLogout =()=>{
    localStorage.setItem("isLoggedIn", false)
    setLogIn(false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid" onClick={onClickHome}>
        <img src="https://i.pinimg.com/736x/b8/ab/5f/b8ab5f1d7497ed7a684fbc458b141383.jpg" alt="" width="30" height="30"/>
        <Link to="/" relative="path" className={"navbar-brand mx-2"} 
			style={{fontFamily : "cursive", fontStyle: "italic"}}>{appName}</Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
				<li className={"nav-item"+ selected==='Categories'?'Active':''}>
					<div onClick={onClickCategories} >
						<Link to="/categories" relative="path" className="nav-link">Categories</Link>
					</div>
				</li>
				{ loggedIn && 
					<li className={"nav-item"+ selected==='Profile'?'Active':'' }>
						<div onClick={onClickProfile}>
						<Link to="/profile" relative="path" className="nav-link" >Profile</Link>
						</div>
					</li>
				}
				<li className={"nav-item"+ selected==='About'?'Active':''}>
					<div onClick={onClickAbout}>
						<Link to="/about" relative="path" className="nav-link">About</Link>
					</div>
				</li>
            </ul>
        </div>
        <form className="topnav-right" >
        {!loggedIn? (
        	<>	<Link className='btn btn-success mx-2' to="/login" relative="path">Login</Link>
            	<Link className='btn btn-success mx-2' to="/signup" relative="path" onClick={onClickSignup}>Signup</Link>
          	</>) : (<span className='btn btn-success mx-2' relative="path" onClick={handleLogout}>Logout</span>)
        }
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
