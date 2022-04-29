import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

import {Link} from "react-router-dom";


export default function Footer() {
  return (
    <MDBFooter className='main-footer text-center text-lg-left'>
      <MDBContainer className='p-4 footer-background'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase text-start'>PECUTY ROYAL INTERNATIONAL ACADEMY</h5>
            <a href='' className='footer-number'><LocationOnIcon style={{color: "#FFD523"}}/> 27 Joe Vic cresent, Aso C, Mararaba, Abuja</a>
            <a href='tel:08104000083' className='footer-number'><LocalPhoneIcon style={{color: "#FFD523"}}/> +234 810 4000 083</a>
            <a href='tel:08130106622' className="footer-number" style={{textAlign: "left"}}><LocalPhoneIcon style={{color: "#FFD523"}}/> +234 813 0106 622</a>
            <a href='mailto:info@pecutyroyalacademy.com' rel='noopener noreferrer'
            className="footer-email"><EmailIcon style={{color: "#FFD523"}}/> info@pecutyroyalacademy.com</a><br />
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase text-start'>About</h5>

            <ul className='list-unstyled mb-0 text-start'>
              <li>
                <Link to="/" className='footer-link'>
                  Our Vision
                </Link>
              </li>
              <li>
                <Link to="/" className='footer-link'>
                  Our mission
                </Link>
              </li>
              <li>
                <Link to="/about" className='footer-link'>
                  Our History
                </Link>
              </li>
              <li>
                <Link to="/" className='footer-link'>
                  Our Policy
                </Link>
              </li>
              <li>
                <Link to="/anthem" className='footer-link'>
                  Anthem
                </Link>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0 text-start'>Admissions</h5>

            <ul className='list-unstyled text-start text-decoration-none'>
              <li>
                <Link to="/admissions" className='footer-link'>
                  Apply
                </Link>
              </li>
              <li>
                <Link to="/admissions" className='footer-link'>
                  Admission criteria
                </Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <span>Copyright &copy; {new Date().getFullYear()}{' '} Pecuty Royal Int'l Academy.
        All rights reserved</span>
      </div>
    </MDBFooter>
  );
}
