import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';


export default function Footer() {
  return (
    <MDBFooter className='main-footer text-center text-lg-left'>
      <MDBContainer className='p-4 footer-background'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase text-start'>PECUTY ROYAL INTERNATIONAL ACADEMY</h5>
            <p className="text-start"><LocationOnIcon style={{color: "#FFD523"}}/> 27 Joe Vic cresent, Aso C, Mararaba, Abuja</p>
            <p className="text-start"><LocalPhoneIcon style={{color: "#FFD523"}}/> +234 804 4455 677</p>
            <p className="text-start"><EmailIcon style={{color: "#FFD523"}}/> contact@pecutyroyal.com</p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase text-start'>About</h5>

            <ul className='list-unstyled mb-0 text-start'>
              <li>
                <a href='#!' className='footer-link'>
                  Our Vision
                </a>
              </li>
              <li>
                <a href='#!' className='footer-link'>
                  Our mission
                </a>
              </li>
              <li>
                <a href='#!' className='footer-link'>
                  Our History
                </a>
              </li>
              <li>
                <a href='#!' className='footer-link'>
                  Our Policy
                </a>
              </li>
              <li>
                <a href='#!' className='footer-link'>
                  Anthem
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0 text-start'>Admissions</h5>

            <ul className='list-unstyled text-start text-decoration-none'>
              <li>
                <a href='#!' className='footer-link'>
                  Apply
                </a>
              </li>
              <li>
                <a href='#!' className='footer-link'>
                  Admission criteria
                </a>
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
