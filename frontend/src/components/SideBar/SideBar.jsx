import * as React from 'react';
import {useContext} from 'react'
import {AppBar, Toolbar, InputBase, Avatar, IconButton, Drawer, CssBaseline, Box, Typography, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Grid  } from '@mui/material'
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import './SideBar.css';
import { makeStyles } from "@mui/styles";
import {minWidth } from '@mui/system';
import { Navigate, NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import mayur from '../../assets/profile.png'
import { Context } from '../../context/Context';

const drawerWidth = '240px';

const useStyles = makeStyles((theme) => ({
  search: {  
    display: "flex",
    height: 35,
    alignItems: "center",
    backgroundColor: "#cfd8dc",
    "&:hover": {
      backgroundColor: "#cfd8dc",
    },
    borderRadius: 8,
    marginRight: theme.spacing(3),
    marginLeft: 0, 
},
profile:{
  display: "flex",
  alignItems: "center",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("sm")]:{
      display: "none",
  }
},
}));

function ResponsiveDrawer(props)
 {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles({});
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <>
  <div className='Drawer'>  
    <Toolbar className="SideBarItem">
    <img className="logo" src={logo} alt="logo" />
    <Typography variant="h6" color="#000000">EventTick</Typography>
    </Toolbar>
    <List >
          <NavLink to="/" className='Navlink' style={{ textDecoration: 'none' }}>
            <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon  >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z"/></svg>
              </ListItemIcon>
              <ListItemText  ><Typography >Homepage</Typography></ListItemText>
            </ListItemButton>
          </ListItem>
          </NavLink>

          <a target="_blank" href="http://localhost:4000/signuptest">
           <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon  >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm7-16c4.97 0 9 4.043 9 9.031V20H3v-8.969C3 6.043 7.03 2 12 2zM9.5 21h5a2.5 2.5 0 1 1-5 0z"/></svg>
              </ListItemIcon>
              <ListItemText  ><Typography >Add Event</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          </a>

          <NavLink to="/404" className='Navlink' style={{ textDecoration: 'none' }}>
            <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon  >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm7-16c4.97 0 9 4.043 9 9.031V20H3v-8.969C3 6.043 7.03 2 12 2zM9.5 21h5a2.5 2.5 0 1 1-5 0z"/></svg>
              </ListItemIcon>
              <ListItemText  ><Typography >Notifications</Typography></ListItemText>
            </ListItemButton>
          </ListItem>
          </NavLink>
          
          <NavLink to="/404" className='Navlink' style={{ textDecoration: 'none' }}>
            <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon  >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655z"/></svg>
              </ListItemIcon>
              <ListItemText  ><Typography >Messages</Typography></ListItemText>
            </ListItemButton>
          </ListItem>
          </NavLink>

          <a target="_blank" href="https://github.com/mayur-argade/Event-management-portal">
            <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon  >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"/></svg>
              </ListItemIcon>
              <ListItemText  ><Typography >Contribute</Typography></ListItemText>
            </ListItemButton>
          </ListItem>
          </a>

          <NavLink to="/login" className='Navlink' style={{ textDecoration: 'none' }}>
            <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon  >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"/></svg>
              </ListItemIcon>
              <ListItemText  ><Typography >logout</Typography></ListItemText>
            </ListItemButton>
          </ListItem>
          </NavLink>
          

          </List>
  </div>
  </>
 
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const {user } = useContext(Context);
  console.log(user);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar elevation={0} color= 'inherit' position="sticky">
        <Toolbar className="toolbar">
        
        <div className="left">    
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} >
          <MenuIcon />
        </IconButton>    
        <img className="logo" src={logo} alt="logo" />
        </div>

        <div className="right">
        <div className={classes.search}>
        <svg style={{padding: 5}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
                    <InputBase placeholder="search..." />
                </div>
                <div className={classes.profile}>
                <Avatar style={{marginRight: 6}} alt="profile-photo" src={mayur} />
                <Typography className={classes.username} color="#000000"  >Welcome <br/>{user.user.name}</Typography>
                </div>
            </div>
        

        </Toolbar>
      </AppBar>
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
