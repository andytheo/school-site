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
        </div>
    )
}

export default Portal;
