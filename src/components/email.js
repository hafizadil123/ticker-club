import React from 'react';
import { Link } from 'react-router-dom';


function Email(){
    return(
<div className="container bootdey">
  <div className="email-app">
    <main>
      <p className="text-center">New Message</p>
      <form>
        <div className="form-row mb-3">
          <label htmlFor="to" className="col-2 col-sm-1 col-form-label">To:</label>
          <div className="col-10 col-sm-11">
            <input type="email" className="form-control" id="to" placeholder="To" />
          </div>
        </div>
        <div className="form-row mb-3">
          <label htmlFor="cc" className="col-2 col-sm-1 col-form-label">CC:</label>
          <div className="col-10 col-sm-11">
            <input type="email" className="form-control" id="cc" placeholder="CC" />
          </div>
        </div>
        <div className="form-row mb-3">
          <label htmlFor="bcc" className="col-2 col-sm-1 col-form-label">BCC:</label>
          <div className="col-10 col-sm-11">
            <input type="email" className="form-control" id="bcc" placeholder="BCC" />
          </div>
        </div>
      </form>
     
          <div className="form-group mt-4 ml-5">
            <textarea className="form-control" id="message" name="body" rows={12} placeholder="Click here to reply" defaultValue={""} />
          </div>
          <div className="form-group ml-5 ">
            <Link type="submit" className="btn btn-success mr-2">Send Email</Link>
            <Link type="submit" className="btn btn-danger" to="/">Exit</Link>
          </div>
        
    </main>
  </div>
</div>

    

    );
}
export default Email;