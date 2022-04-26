import React from 'react';

import {MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';


const StepsToApply = (props) => {
  return (<div>
    <MDBCard style={{
        maxWidth: '22rem',
        backgroundColor: "#161E54",
        color: "white"
      }}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md='3' className='col-example'>
            <MDBCardTitle className="steps-to-apply">{props.number}</MDBCardTitle>
          </MDBCol>
          <MDBCol md='9' className='col-example'>
            <MDBCardText>
              {props.text}
            </MDBCardText>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  </div>)
}

export default StepsToApply;
