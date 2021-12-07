// import React, { Component } from "react";
import React from "react";
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import Nav from '../home/Nav';
import Footer from '../home/Footer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

import TransparentHeader from '../props/TransparentHeader';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div>
    <Nav />
    <TransparentHeader
      text="Contact Us"
    />
    <MDBContainer className="mb-5">
      <MDBRow className='mb-3 mt-5 container'>
        <MDBCol md='8' className='col-example'>
          <form>

  <div class="form-outline mb-4">
    <label class="form-label" for="form4Example1">Name</label>
    <input type="text" id="form4Example1" class="form-control" />
  </div>

  <div class="form-outline mb-4">
    <label class="form-label" for="form4Example2">Email address</label>
    <input type="email" id="form4Example2" class="form-control" />
  </div>

  <div class="form-outline mb-4">
    <label class="form-label" for="form4Example3">Message</label>
    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
  </div>

  <div class="form-check d-flex justify-content-center mb-4">
    <input
      class="form-check-input me-2"
      type="checkbox"
      value=""
      id="form4Example4"
      checked
    />
    <label class="form-check-label" for="form4Example4">
      Send me a copy of this message
    </label>
  </div>

  <button type="submit" class="btn btn-primary btn-block mb-4">Send Message</button>
</form>
{/* <FontAwesomeIcon icon="check-square" />
    Your <FontAwesomeIcon icon="coffee" /> is hot and ready! */}
        </MDBCol>


        <MDBCol size='6' md='4' className='col-example'>
          <p className="h3">Location</p>
          {/* <FontAwesomeIcon icon={['fab', 'apple']} />
          <FontAwesomeIcon icon={["fab", "exclamation"]} /> */}
          <p><LocationOnIcon /> 27 Joe Vic cresent, Aso C, Mararaba, Abuja</p>

          <p className="h4">Phone</p>
          <p><LocalPhoneIcon /> +234 801 1122 233</p>
          <p><LocalPhoneIcon /> +234 804 4455 677</p>

          <p className="h4">Email</p>
          <p><EmailIcon /> contact@pecutyroyal.com</p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      <Footer />
    </div>
  );
}
