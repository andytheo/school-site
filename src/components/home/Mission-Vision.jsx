import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function MissionVision() {
  return (
    <MDBRow className="mt-5" style={{margin: "0 160px"}}>

        <div className="text-center text-dark h3 mt-2 mb-5 underline">Objectives</div>
      <MDBCol md='6' className='col-example p-5 mb-5' style={{backgroundColor: "#E6E6E6"}}>
        <p className="text-center h3 mb-3 underline">Mission Statement</p>
        <ul className="">
          <li>Utmost discipline.</li>
          <li>To raise good leaders of tomorrow with integrity.</li>
          <li>
            Organizing seminar(s) and excursion(s) to improve imbeded
            talent(s) of every child.
          </li>
          <li>Personal and academic integrity; eradicating dishonesty.</li>
          <li>
            Respect ethical standards of the school and the nation at large.
          </li>
        </ul>
      </MDBCol>
      <MDBCol md='6' className='col-example p-5 mb-5' style={{backgroundColor: "#88E0EF"}}>
        <p className="text-center h3 mb-3 underline">Vision Statement</p>
        <ul className="">
          <li>Total commitment to knowledge and excellence.</li>
          <li>To bring out the best of every child.</li>
          <li>To inculcate discipline and respect.</li>
          <li>
            To build and maintain love, peace and integrity in every child.
          </li>
          <li>To inculcate confidence and self reliance in every child.</li>
          <li>To bring out talent(s) imbedded in every child.</li>
          <li>
            To eradicate inferiority complex in individual child so as to
            face challenge with boldness and confidence.
          </li>
        </ul>
      </MDBCol>
    </MDBRow>
  );
}
