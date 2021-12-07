import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter style={{backgroundColor: "#161E54", color: "white"}} className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase text-start'>PECUTY ROYAL INTERNATIONAL ACADEMY</h5>

            <p className="text-start">27 Joe Vic cresent, Aso C, Mararaba, Abuja</p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase text-start'>About</h5>

            <ul className='list-unstyled mb-0 text-start'>
              <li>
                <a href='#!' className='text-light text-decoration-none'>
                  Our Vision
                </a>
              </li>
              <li>
                <a href='#!' className='text-light text-decoration-none'>
                  Our mission
                </a>
              </li>
              <li>
                <a href='#!' className='text-light text-decoration-none'>
                  Our History
                </a>
              </li>
              <li>
                <a href='#!' className='text-light text-decoration-none'>
                  Our Policy
                </a>
              </li>
              <li>
                <a href='#!' className='text-light text-decoration-none'>
                  Anthem
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0 text-start'>Admissions</h5>

            <ul className='list-unstyled text-start text-decoration-none'>
              <li>
                <a href='#!' className='text-light text-decoration-none'>
                  Apply
                </a>
              </li>
              <li>
                <a href='#!' className='text-light text-decoration-none'>
                  Admission criteria
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()}{' '}
        <a href='https://pecutyroyal.com/'>
          Pecuty Royal
        </a>
      </div>
    </MDBFooter>
  );
}
