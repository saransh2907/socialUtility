import React, { useEffect, useState } from "react";
import "./style.css";


function RegistrationForm() {
    const [user, setUser] = useState(null)
    const userEx ={fName:"Saransh", lName :"Gupta", email:"saranshgupta713@gmail.com", gender:"Male", password: "abc12345"}
    useEffect ( ()=>{
        setUser(userEx)
        console.log(user)
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 
    let bgImg = "https://img.freepik.com/premium-photo/abstract-blue-background-texture_196038-417.jpg?w=740"
    return (
    <div className="form" style={{marginTop:'7%' ,backgroundImage: `url(${bgImg})`}}>
      <div className="form-head">
        <nav className="bg-dark navbar-dark navbar" style={{width:"100%"}}>
            <div className="row col-12 d-flex justify-content-left text-white">
                <h3>Sign Up</h3>
            </div>
        </nav>
      </div>
      <div className="form-body">
        <div className="row mx-2">
          <label className="form__label" htmlFor="firstName">First Name{" "}</label>
          <div className="col-sm-7"><input  className="form-control" type="text" placeholder="First Name" id="firstName" /></div>
        </div>
        <div className="row mx-2">
          <label className="form__label" htmlFor="lastName">Last Name{" "}</label>
          <div className="col-sm-7"><input  className="form-control" type="text" placeholder="Last Name" id="lastName" /></div>
        </div>
        <div className="row mx-2" style={{color:"white"}}>
          <label className="form__label" htmlFor="gender">Gender{" "}</label>
          <div className="col-sm-3">Male   <input className="radio-dark" type="radio" name="gender" id="male"/></div>
          <div className="col-sm-3">Female <input className="radio-dark" type="radio" name="gender" id="female"/></div>
        </div>
        {/* <div className="row mx-2">
          <label className="form__label" htmlFor="game">Skills{""}</label>
          <div className="col-sm-7 input-group mb-2">
            <input type="text" className="form-control" placeholder="Enter Your Skills" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-dark" type="button" id="button-addon2" style={{padding:0, width:"60px"}}>+Skills</button>
          </div>
        </div> */}
        <div className="row mx-2" style={{color:"white"}}>
          <label className="form__label" htmlFor="dob">Date of Birth{" "}</label>
          <div className="col-sm-7 input-group date" id="datepicker">
            <input className="form-control" type="date" id="dob" name="dob"/>
          </div>
        </div>
        <div className="row mx-2">
          <label className="form__label" htmlFor="email">Email{" "}</label>
            <div className="col-sm-1"><span className="input-group-text" id="basic-addon1" style={{width:"40px"}}>@</span></div>
            <div className="col-sm-6"><input  className="form-control" type="text" placeholder="Email" id="email" /></div>
        </div>
        <div className="row mx-2">
            <label className="form__label" htmlFor="typePhone">Contact Number</label>
            <div className="col-sm-7"><input type="number" id="typePhone" className="form-control"/></div>
        </div>
        <div className="row mx-2">
          <label className="form__label" htmlFor="password">Password{" "}</label>
          <div className="col-sm-7"><input className="form-control" type="password" id="password" placeholder="Password"/></div>
        </div>
        <div className="row mx-2">
          <label className="form__label" htmlFor="confirmPassword">Confirm Password{" "}</label>
          <div className="col-sm-7"><input className="form-control" type="password" id="confirmPassword" placeholder="Confirm Password"/></div>
        </div>
      </div>
      <div className="footer">
        <button type="submit" className="btn btn-dark">Register</button>
      </div>
    </div>
  );
}
export default RegistrationForm;
