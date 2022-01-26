import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import SendIcon from '@mui/icons-material/Send';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {Link} from "react-router-dom";



const useStyles = makeStyles({
  list: {
  width: 250
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

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

    return (
        <div>
            <Drawer
              onClose={() => setOpenDrawer(false)}
              open={openDrawer}
              classes={{ paper: classes.paper }}
              >
              <List style={{ width: "50vw"}}>


              <ListItemButton>
                <ListItemIcon>
                  <SendIcon style={{color: "gold"}}/>
                </ListItemIcon>
                <ListItemText primary="Home" style={{color: "white"}} to='/' component={Link}/>
              </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon style={{color: "gold"}}/>
                  </ListItemIcon>
                  <ListItemText primary="About" style={{color: "white"}} to='/about' component={Link}/>
                </ListItemButton>

                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon style={{color: "gold"}} />
                  </ListItemIcon>
                  <ListItemText primary="Admissions" style={{color: "white"}} to='/admissions' component={Link}/>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse style={{color: "white"}} in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
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

                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon style={{color: "gold"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Contact" style={{color: "white"}} to='/contact' component={Link}/>
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon style={{color: "gold"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Portal" style={{color: "white"}} to='/portal' component={Link}/>
                </ListItemButton>
              </List>
            </Drawer>
            <IconButton style={{backgroundColor: "#FFBD35", color: "#161E54"}} onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
            </IconButton>
        </div>
    )
}
