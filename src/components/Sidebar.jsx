import {
  AccountBox,
  // Article,
  // Group,
  Home,
  ModeNight,
  Person,
  Settings,
  // Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  // Switch,
  Typography
} from "@mui/material";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import Setting from "./Settings";

const Sidebar = ({mode,setMode}) => {

  const [open, setOpen] = useState(false);
  // var localMode = localStorage.getItem("mode");
  const Navigate = useNavigate();

  function changeMode (){
    if(mode === "light"){
         setMode("dark")
       localStorage.setItem("mode","dark");
    }else{
         setMode("light") 
            localStorage.setItem("mode","light")
    }
              
}

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={(e)=>{
              e.preventDefault();
              Navigate("/");
            }} component="a" >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          {/* <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem> */}
          <ListItem disablePadding>
            <ListItemButton onClick={(e)=>{
              e.preventDefault();
              Navigate("/friends");
            }} component="a" >
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={(e)=>{
              e.preventDefault();
              setOpen(true);
            }} component="a" >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={(e)=>{
              e.preventDefault();
              Navigate("/profile/3");
            }} component="a" >
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{
                     changeMode()
            }}>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Typography>
                 Change Theme
               </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Setting mode={mode} setMode={setMode} open={open} setOpen={setOpen}/>
    </Box>
  );
};

export default Sidebar;
