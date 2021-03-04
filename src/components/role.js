import React from 'react';
import { Link } from 'react-router-dom';


function Role(){
    return(
       <div className="container ">
  <div className="row col-12 mx-auto mt-5">
    <div className="form-group has-search">
      <span className="fa fa-search form-control-feedback" />
      <input type="text" className="form-control font-weight-bold " placeholder="Live Retail Club" /> 
    </div>
  </div>
  <div className="row col-12 mx-auto mt-5">
    <div className="col-6 mx-auto text-center ">
      <div className="creator font-weight-bold w-75">
        <a className="bg-dark text-light " style={{ textDecoration: 'none' }} href="#" >Creators</a>
        <br />   
        <br />     
        <Link to="/email" style={{ textDecoration: 'none' }}>Full Name</Link>
        <br />
        <Link to="/email" style={{ textDecoration: 'none' }}>Full Name</Link>
        
        <br />
        <Link to="/email" style={{ textDecoration: 'none' }}>Full Name</Link>
        
        <br />
        <Link to="/email" style={{ textDecoration: 'none' }}>Full Name</Link>
        
        <br />
        <Link to="/email" style={{ textDecoration: 'none' }}>Full Name</Link>
        
        <br />
        <Link to="/email" style={{ textDecoration: 'none' }}>Full Name</Link>
      </div>
    </div>
    <div className="col-6 mx-auto text-center">
      <div className="creator font-weight-bold w-75">
        <a className="bg-secondary text-light" style={{ textDecoration: 'none' }} href="#">Stores</a>
        <br />
        <br /> 
        <Link to="/email" style={{ textDecoration: 'none' }}>Full Name</Link>
        
        <br />
        <Link to="/email" style={{ textDecoration: 'none' }}>Full Name</Link>
        
        <br />
        <Link to="/email" style={{ textDecoration: 'none' }}>Full Name</Link>
        
      </div>
    </div>
  </div>
</div>

    );
}
export default Role;