import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { clubNames, roles } from '../constant';



function Login(){
  const [country, setCountry] = useState('');

  const responseGoogle = (response) => {
    console.log(response);
  }

  const responseFacebook = (response) => {
    console.log(response);
  }

  const handleFormSubmit = (e,data) => {
    e.preventDefault();
  } 
return(
  
<div className="login-box">
  <h2>Ticker</h2>
     
  <form onSubmit={(e)=>handleFormSubmit(e)}>
    <div className="row">
    <div className="form-group col-md-6">
    <label htmlFor="fullName">Full Name</label>
    <input type="text" className="form-control" id="fullName" placeholder="Enter Full Name" />
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="eamil" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  </div>
 
 <div className="row">
 <div className="form-group col-md-6">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" placeholder="Password" />
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="city">Enter City Name</label>
    <input type="text" className="form-control" id="city" placeholder="Enter City" />
  </div> 

 </div>
 <div className="row">
 <div class="form-group col-md-6">
    <label for="clubName">Select Role</label>
    <select class="form-control" id="clubName">
      <option></option>
        {roles.map(item =><option value={item.value}>{item.name}</option>)}
    </select>
  </div>
  <div class="form-group col-md-6">
    <label for="clubName">Select Club</label>
    <select class="form-control" id="clubName">
      <option></option>
      {clubNames.map(item => <option value={item.value}>{item.name}</option>)}
    </select>
  </div>

 </div>
 
 <div className="form-group">
  <CountryDropdown
    value={country}
    classes="country"
    onChange={(val) => setCountry(val)} />
   
  </div>

  <div className="form-group">
    <label htmlFor="occupation">Enter Your Occupation</label>
    <input type="text" className="form-control" id="occupation" placeholder="Enter Occupation" />
  </div>
  <div className="form-group">
    <label htmlFor="city">Enter Your University</label>
    <input type="university" className="form-control" id="university" placeholder="Enter University Name" />
  </div>
  <div className="row">
<div className="col-md-6">
<GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Singup with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    classes="custom-style"
  />,

</div>
<div className="col-md-6">
<FacebookLogin
    appId="1088597931155576"
    fields="name,email,picture"
    onClick={() => {}}
    textButton="Signup Facebook"
    callback={responseFacebook} />,
  </div>
  </div>
  
  <div className="center">
  
  <button type="submit" className="btn btn-primary">
  Register
  </button>
  </div>
</form>
</div>

);
}

export default Login;