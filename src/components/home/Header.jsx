import React from 'react';
import {
  // MDBContainer,
  // MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <header>
      <div
        className='p-5 text-center bg-image intro'>
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <p className="display-3 fw-bold" style={{marginTop: "10%"}}>PECUTY ROYAL INT'L ACADEMY</p>
              <p>The perfect learning environment for your child.</p>
              <button className="btn btn-rounded btn-lg btn-success mt-5">Enrol Now</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
