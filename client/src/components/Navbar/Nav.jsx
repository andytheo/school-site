import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import BasicTabs from './Tab'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DrawerComponent from './Drawer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Link} from "react-router-dom";
import Dropdown from './Dropdown';
import '../../css/Navbar.css';


export default function AppNavBar() {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
          <li className='main-nav-item'>
            <Link to='/about' className='main-nav-links'
            onClick='{closeMobileMenu}'>
              About
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