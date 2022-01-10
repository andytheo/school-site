import React from 'react';
import Nav from '../home/Nav';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Footer from "../home/Footer";
// import Header from '../home/Header';

const Portal = () => {
    return (
        <div>
            <Nav />
              <div className='p-5 text-center portal-background'>
                <MDBCard background='light' className='mt-5 portal-center' style={{ margin: '0 auto'}}>

                 <MDBCardBody>
                   <MDBCardTitle><AccountCircleIcon style={{fontSize: "5rem"}} className="mb-3 mt-3" /></MDBCardTitle>
                   <MDBCardText>
                     <p>Log in to your account</p>
                         <MDBInput placeholder='Email' id='typeEmail' type='email' className="mb-4"/>
                         <MDBInput placeholder='Password' id='typePassword' type='password' />
                   </MDBCardText>
                   <div className="d-grid gap-2 mb-4 mt-4">
                     <MDBBtn style={{backgroundColor: '#161E54'}}>Log in</MDBBtn>
                   </div>
                   {/* <button className="btn btn-primary">Log in</button> */}
                 </MDBCardBody>
               </MDBCard>
              </div>
              <Footer />
        </div>
    )
}

export default Portal;
