import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import CallIcon from '@mui/icons-material/Call';
import {Link} from "react-router-dom";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';


const useStyles = makeStyles({
  list: {
  width: 300
},
fullList: {
  width: "auto"
},
paper: {
  background: "#161E54",
  paddingTop: 50,
  color: "white"
}
});

export default function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [openAbout, setOpenAbout] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleAboutClick = () => {
    setOpenAbout(!openAbout);
  };

    return (
        <div>
            <Drawer
              onClose={() => setOpenDrawer(false)}
              open={openDrawer}
              classes={{ paper: classes.paper }}
              >
              <List style={{ width: "250px"}}>


              <ListItemButton to='/' component={Link}>
                <ListItemIcon>
                  <HomeIcon style={{color: "gold"}}/>
                </ListItemIcon>
                <ListItemText primary="Home" style={{color: "white"}}/>
              </ListItemButton>

                <ListItemButton onClick={handleAboutClick}>
                  <ListItemIcon>
                    <InfoIcon style={{color: "gold"}}/>
                  </ListItemIcon>
                  <ListItemText primary="About" style={{color: "white"}} />
                  {openAbout ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse style={{color: "white"}} in={openAbout} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} to='/about' component={Link}>
                      <ListItemIcon>
                        <StarBorder style={{color: "gold"}} />
                      </ListItemIcon>
                      <ListItemText primary="Our History" style={{color: "white"}} />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding>

                    <ListItemButton sx={{ pl: 4 }} to='/about' component={Link}>
                      <ListItemIcon>
                        <StarBorder style={{color: "gold"}} />
                      </ListItemIcon>
                      <ListItemText primary="Staff" style={{color: "white"}} />
                    </ListItemButton>

                   <ListItemButton sx={{ pl: 4 }} to='/anthem' component={Link}>
                      <ListItemIcon>
                        <StarBorder style={{color: "gold"}} />
                      </ListItemIcon>
                      <ListItemText primary="Anthem" style={{color: "white"}} />
                    </ListItemButton>
                  </List>
                </Collapse>


                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <SchoolIcon style={{color: "gold"}} />
                  </ListItemIcon>
                  <ListItemText primary="Admissions" style={{color: "white"}} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse style={{color: "white"}} in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} to='/admissions' component={Link}>
                      <ListItemIcon>
                        <StarBorder style={{color: "gold"}} />
                      </ListItemIcon>
                      <ListItemText primary="Enroll" style={{color: "white"}} />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding>

                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder style={{color: "gold"}} />
                      </ListItemIcon>
                      <ListItemText primary="Prospectus" style={{color: "white"}} />
                    </ListItemButton>
                  </List>
                </Collapse>

                <ListItemButton to='/contact' component={Link}>
                  <ListItemIcon>
                    <CallIcon style={{color: "gold"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Contact" style={{color: "white"}}/>
                </ListItemButton>

                 <ListItemButton to='/media' component={Link}>
                  <ListItemIcon>
                    <InsertPhotoIcon style={{color: "gold"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Media" style={{color: "white"}}/>
                </ListItemButton>

                <ListItemButton to='/portal' component={Link}>
                  <ListItemIcon>
                    <LoginIcon style={{color: "gold"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Portal" style={{color: "white"}} />
                </ListItemButton>
              </List>
            </Drawer>
            <IconButton style={{color: "#fff"}} onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
            </IconButton>
        </div>
    )
}
