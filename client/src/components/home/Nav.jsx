import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
  MDBDropdown
} from 'mdb-react-ui-kit';
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav() {
  const [showNavCentred, setShowNavCentred] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand><Link to="/"><img class="logo-img" src="pecuty-royal-logo.png" alt="logo" /></Link></MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarCenteredExample'
          aria-controls='navbarCenteredExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavCentred(!showNavCentred)}
        >
          <MenuIcon />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavCentred} center id='navbarCenteredExample'>
          <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
            {/* <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page'>
                <Link className="text-decoration-none text-dark" to="/about">ABOUT</Link>
              </MDBNavbarLink>
            </MDBNavbarItem> */}


            <MDBNavbarItem className="dropdown">
              <MDBNavbarLink className="text-decoration-none text-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ABOUT</MDBNavbarLink>
              <MDBDropdown className="dropdown-menu w-25" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/about">Who we are</Link>
              <Link className="dropdown-item" to="#">Our Policy</Link>
              <Link className="dropdown-item" to="#">Anthem</Link>
            </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink><Link className="text-decoration-none text-dark" to="/admissions">ADMISSIONS</Link></MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink><Link className="text-decoration-none text-dark" to="/portal">PORTAL</Link></MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink><Link className="text-decoration-none text-dark" to="/contact">CONTACT</Link></MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>

        <div className="d-none d-sm-none d-lg-block d-xl-block">contact@pecutyroyal.com<br />+234111222333</div>

      </MDBContainer>
    </MDBNavbar>
  );
}
