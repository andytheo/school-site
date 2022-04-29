import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DrawerComponent from './Drawer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Link} from "react-router-dom";
import Dropdown from './Dropdown';
import AboutDropdown from './AboutDropdown';
import '../../css/Navbar.css';


export default function AppNavBar() {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [aboutDropdown, setAboutDropdown] = useState(false);

  const handleClick = () => setClick(!click);
//  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }

  // About Dropdown 
const onAboutEnter = () => {
    if (window.innerWidth < 960) {
      setAboutDropdown(false);
    } else {
      setAboutDropdown(true);
    }
  }

  const onAboutLeave = () => {
    if (window.innerWidth < 960) {
      setAboutDropdown(false);
    } else {
      setAboutDropdown(false);
    }
  }


  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

return (
  <>
    <AppBar position="static" style={{backgroundColor: "#161E54"}}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/"><img className="logo-img" src="pecuty-royal-logo.png" alt="logo" /></Link>
        </Typography>
        {isMatch ?
          ( <DrawerComponent className='display-menu'/> ) : (
            <>
            <div className='main-menu-icon' onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>
        <ul className={click ? 'main-nav-menu active' : 'main-nav-menu'}>
          <li className='main-nav-item' 
            onMouseEnter={onAboutEnter}
            onMouseLeave={onAboutLeave}>
            <Link to='/about' className='main-nav-links'
            onClick='{closeMobileMenu}'>
              About <i className='fa fa-caret-down' />
              {aboutDropdown && <AboutDropdown/>}
            </Link>
          </li>
          <li className='main-nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Link to='/admissions' className='main-nav-links'
            onClick='{closeMobileMenu}'>
              Admissions <i className='fa fa-caret-down' />
            </Link>
            {dropdown && <Dropdown/>}
          </li>
          <li className='main-nav-item'>
            <Link to='/contact' className='main-nav-links'
            onClick='{closeMobileMenu}'>
              Contact
            </Link>
          </li>
          <li className='main-nav-item'>
            <Link to='/media' className='main-nav-links'
            onClick='{closeMobileMenu}'>
              Media
            </Link>
          </li>
          <li className='main-nav-item'>
            <Link to='/portal' className='main-nav-links'
            onClick='{closeMobileMenu}'>
              Portal
            </Link>
          </li>
        </ul>
            </>
          )
        }
      </Toolbar>
    </AppBar>
    {/* <Menu anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        getContentAnchorEl={null}>
      <MenuItem><Link to="/about">Our School</Link></MenuItem>
      <MenuItem>Who we are</MenuItem>
      <MenuItem>Our History</MenuItem>
      <MenuItem>Calendar</MenuItem>
    </Menu> */}

  </>

)

  }