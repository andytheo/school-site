import React from 'react';
import AppNavBar from '../Navbar/Nav';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Portal = () => {
    return (
        <div>
            <AppNavBar />
            
            
              <div className='p-5 text-center portal-background'>
                <MDBCard background='light' className='mt-5 portal-center' style={{ margin: '0 auto'}}>
                  <ul className="nav nav-pills mt-3 mb-3 justify-content-center" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Staff</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Parents</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Student</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"></div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"></div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"></div>
                  </div>
                 <MDBCardBody>
                   <MDBCardTitle><AccountCircleIcon style={{fontSize: "5rem"}} className="mb-3" /></MDBCardTitle>
                   <MDBCardText>
                     <p>Log in to your account</p>
                         <MDBInput placeholder='Email' id='typeEmail' type='email' className="mb-4"/>
                         <MDBInput placeholder='Password' id='typePassword' type='password' />
                   </MDBCardText>
                   <div className="d-grid gap-2 mb-4 mt-4">
                     <MDBBtn style={{backgroundColor: '#161E54'}}>Log in</MDBBtn>
                   </div>
                   <a className="">Forgot password?</a>
                 </MDBCardBody>
               </MDBCard>
              </div>
        </div>
    )
}

export default Portal;
