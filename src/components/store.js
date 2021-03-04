import React from 'react';
import { Link } from 'react-router-dom';
import { LTC } from '../constant';


function Store(){
    return(
      <div className="main">
  {/* Another variation with a button */}
  <div className="form-group search">
    <span className="fa fa-search form-control-feedback" />
    <input type="text" className="form-control font-weight-bold " placeholder="Live Retail Club" />
    <br />
    <input type="text" className="input-name font-weight-bold" placeholder="Input Full Name Here!" />
  </div>
  <div className="store">
    <h5>2- Select Store Type:</h5>
  </div>
  <div className="store-box mx-auto">
    {LTC.categories && LTC.categories.map(item => <><Link to="/role" style={{ textDecoration: 'none' }}>{item.name}</Link><br /></>)}
  </div>
</div>


    );
}
export default Store;