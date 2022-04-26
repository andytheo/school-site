import React from 'react';
import AppNavBar from '../Navbar/Nav';
import {MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import StepsToApply from '../props/StepsToApply';
import TransparentHeader from '../props/TransparentHeader';
import Footer from '../home/Footer';

const Admissions = () => {
  return (<div>
    <AppNavBar />
    <TransparentHeader
      text="Admission Process"
    />
    <MDBContainer className="mb-5">
    <MDBRow className="container mt-5">
      <MDBCol md='7' className='col-example'>
        <p className="h3 mb-4">Admission Process</p>
        <p>Enroll your child for admission at the start of the term.
         Our administration provides a smooth admission process to help your
        child easily enroll to our school.</p>
        <p>Admission forms can be picked up from our school or easily downloaded from our website.</p>
        <p>We look forward to meeting you.</p>
      </MDBCol>
      <MDBCol md='4' className='col-example'>
        <p className="h3 mb-4">How To Apply</p>
      <StepsToApply
        number="1"
        text="Download an enrollment form online or visit to school."
       />
       <br />
       <StepsToApply
         number="2"
         text="Pay the enrollment fees and fill in students' full information."
        />
        <br />
        <StepsToApply
          number="3"
          text="Submit the filled form and wait for decision on students' acceptance."
         />
      </MDBCol>
    </MDBRow>
    </MDBContainer>
    <Footer />

  </div>)
}

export default Admissions
