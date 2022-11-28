import React from 'react'
import { Drawer,
         List,
         ListItem,
         ListItemIcon,
         ListItemText,
         AppBar,
         Toolbar,
         Box,
         Stack,
         Paper} from '@mui/material'
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from "@mui/material/styles"
import { Link } from 'react-router-dom'
import Logo from '../assets/uni_logo.png'

const MainDrawer = styled(Drawer)`
  width: 230px;
`;

const MainAppBar = styled(AppBar)`
  width: calc(100% - 230px);
`;

const Space = styled(Box)`
  flex-grow: 1;
`;

export default function Layout({ children }) {
  return(
    <div 
    style={{
      display: "flex"
    }}
    >
      {/* AppBar */}
      <MainAppBar elevation={0}>
        <Toolbar>
          <Link to={"/ramos"} >
            <img src={Logo} alt="logo" height="64px" padding-right="5px" />
          </Link>
          <Space/>
          <Stack direction="row" spacing={1}>
            <Paper elevation={0} component={Link} to={"/perfil"} alt="account">
              <AccountCircleIcon/>
            </Paper>
            <Paper elevation={0} component={Link} to={"/ajustes"} alt="settings">
              <SettingsIcon/>
            </Paper>
          </Stack>
        </Toolbar>
      </MainAppBar>
      
      {/* Drawer */}
      <MainDrawer
        variant="permanent"
        anchor="left"
      >
        <div
        style={{
          width: "240px",
          height: "60px",
          textAlign: "center"
        }}>
        </div>
        <List>
          <ListItem
            component={Link}
            to={'/calificaciones'}
            button
          >
            <ListItemIcon> <ImportContactsIcon /> </ListItemIcon>
            <ListItemText> Calificaciones </ListItemText>
          </ListItem>
          <ListItem
            component={Link}
            to={'/calendario'}
            button
          >
            <ListItemIcon> <CalendarMonthIcon /> </ListItemIcon>
            <ListItemText> Calendario </ListItemText>
          </ListItem>
        </List>
      </MainDrawer>

      <div 
        style={{
        background: "lightGray",
        width: "100%",
        padding: "10px"
      }}
      >
        <div style={{height: "64px"}} />
        {children}
      </div>
    </div>
  )
}