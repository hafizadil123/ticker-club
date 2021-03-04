import React from 'react';
import logo from '../logo.jpeg'
import { Link } from 'react-router-dom';
import { LTC } from '../constant';
//import Data from '../data.json'


function Home(){
 
    return(
      
   <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Live Email Club</a>
      </div>
      <Link className="btn btn-success my-2 my-sm-0" to="/login" >ticker</Link>
    </div>
  </nav>
  <div className="container-fluid text-center  ">
    <h1 className="font-weight-bold display-4">Aggnett.com</h1>
    <img src={logo} className="rounded-circle" alt="logo" width={100} height={100} />
    <p className="font-weight-bold text-secondary">Select club</p>
    <div className="club font-weight-bold display-5 w-25 mx-auto">
    <Link to="/store" style={{ textDecoration: 'none' }}>{LTC.heading}</Link>
      <br />
      <Link to="/store" style={{ textDecoration: 'none' }}>Live club </Link>
      <br />
      <Link to="/store" style={{ textDecoration: 'none' }}>Live Retail</Link>
      <br />
      <Link to="/store" style={{ textDecoration: 'none' }}>Live Retail Club</Link>
      <br />
      <Link to="/store" style={{ textDecoration: 'none' }}>Live Retail Club</Link>
    </div>
  </div>
</div>

    
    )
}
export default Home;