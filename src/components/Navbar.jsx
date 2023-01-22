import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  TextField,
  IconButton
} from "@mui/material";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = ({mode,setMode,setOpenModal}) => {
  const [open, setOpen] = useState(false);
  const Navigate = useNavigate();
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6"  sx={{ display: { xs: "none", sm: "block" } }}>
          VOVOTA
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
        <TextField
            sx={{ width: "100%",color:"black",fontSize:15 }}
            md={{width: "80%",color:"black",fontSize:15}}
            id="standard-multiline-static"
            placeholder="Search..."
            variant="standard"
            
          />
          {/* <InputBase  placeholder="search..." /> */}
        </Search>
        <Icons>
           <IconButton  onClick={(e)=>{
              e.preventDefault();
              Navigate("/message");
            }} aria-label="settings">
          <Badge badgeContent={4} color="error">
             <Mail />
          </Badge>
          </IconButton>
          <IconButton  onClick={(e)=>{
              e.preventDefault();
              Navigate("/notification");
            }}aria-label="settings">
          <Badge  badgeContent={2} color="error">
            <Notifications/>
          </Badge>
          </IconButton>
          <Badge variant="dot" color="success">
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
          </Badge>
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
        <Badge variant="dot" color="success">
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          </Badge>
          <Typography variant="span">John</Typography>

        </UserBox>
        
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={(e)=>{
              e.preventDefault();
              Navigate("/profile/3");
            }}>Profile</MenuItem>
        {/* <MenuItem>My account</MenuItem> */}
        <MenuItem onClick={(e)=>{
              e.preventDefault();
              Navigate("/friends");
            }}>Friends</MenuItem>
        <MenuItem onClick={(e)=>{
              e.preventDefault();
              Navigate("/settings");
            }}>Settings</MenuItem>
        <MenuItem onClick={(e)=>{
              e.preventDefault();
              Navigate("/login");
            }}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
