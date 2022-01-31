import React from 'react';
import {
  // MDBContainer,
  // MDBIcon
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";

export default function App() {
  return (
    <header>
      <div className='p-5 text-center bg-image intro'>
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <p className="display-3 fw-bold" style={{marginTop: "10%"}}>PECUTY ROYAL INT'L ACADEMY</p>
              <p>The perfect learning environment for your child.</p>
              <Link to="/admissions"><button className="btn btn-rounded btn-lg mt-5" style={{backgroundColor: "#161E54", color: "white"}}>Enroll Now</button></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
