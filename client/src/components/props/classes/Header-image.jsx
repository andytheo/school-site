import React from 'react';
import {
  // MDBContainer,
  // MDBIcon
} from 'mdb-react-ui-kit';

export default function HeaderImage(props) {
  return (
    <header>
      <div className={props.headerStyling}>
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <p className="display-3 fw-bold" style={{ position: "absolute", left: 0, bottom: 150, color: "grey"}}>{props.classTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
