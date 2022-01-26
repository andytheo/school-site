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

export default function AppNavBar() {

  const [value, setValue] = useState(0);
  const [anchorEl, setanchorEl] = useState(null);

  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  }
  const handleOpenMenu = e => {
    setanchorEl(e.currentTarget);
  }
  const handleCloseMenu = () => {
    setanchorEl(null);
  }

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  console.log(isMatch);

return (
  <>
    <AppBar position="static" style={{backgroundColor: "#161E54"}}>
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/"><img className="logo-img" src="pecuty-royal-logo.png" alt="logo" /></Link>
        </Typography>
        {isMatch ?
          ( <DrawerComponent /> ) : (
            <>
            <Tabs
              TabIndicatorProps={{style: {background:'#FFBD35', alignItems:'center'}}}
              value={value}
              onChange={handleClickTab}
              aria-label="basic tabs example"
              centered>
              <Tab disableRipple className="text-white" label="About"
              onClick={handleOpenMenu} aria-controls='menu'/>
              <Tab disableRipple className="text-white" label="Admissions" to='/admissions' component={Link}/>
              <Tab disableRipple className="text-white" label="Portal" to='/portal' component={Link}/>
              <Tab disableRipple className="text-white" label="Contact" to='/contact' component={Link}/>
            </Tabs>
            </>
          )
        }
      </Toolbar>
    </AppBar>
    <Menu id='menu'
      onClose={handleCloseMenu}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      style={{marginTop: "0px", width: "150px"}}>
      <MenuItem><Link to="/about">Our School</Link></MenuItem>
      <MenuItem>Who we are</MenuItem>
      <MenuItem>Our History</MenuItem>
      <MenuItem>Calendar</MenuItem>
    </Menu>

  </>

);
}
