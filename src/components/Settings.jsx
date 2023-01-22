import {
    Avatar,
    Modal,
    Stack,
    styled,
    Typography,
    IconButton,
    Switch,
  } from "@mui/material";
  import {
    Lock,
    History,
    Person3TwoTone,
    LightMode,
    DarkMode,
    Delete,
    OfflineBolt
  } from "@mui/icons-material";
  import { Box } from "@mui/system";
  import { CancelRounded } from "@mui/icons-material";
  import {useNavigate} from "react-router-dom"
  
  const SytledModalChat = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position:"absolute",
    top:30,
  });
  
  
const Settings = ({open,setOpen,setMode,mode}) => {

   
    const user = {
         id:1,
            username:"john dom",
            message:"hello man...?",
            image:"https://material-ui.com/static/images/avatar/3.jpg"
        
    };
    const navigate = useNavigate();

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
        <SytledModalChat
         open={open}
         onClose={(e) => setOpen(false)}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
       >
        <Box
            width={300}
            height={600}
            bgcolor={"background.default"}
            color={"text.primary"}
            p={3}
            borderRadius={3}
          >
             <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}  mb={3}>
                <IconButton onClick={()=>{
                   navigate(`/profile/${user?.id}`)
                }} aria-label="settings">
                   <Avatar
                  direction="row" 
                  src={user?.image}
                  sx={{ width: 40, height: 40 }}
                   />
                  </IconButton>
                  <Typography variant="h6" color="grey" textAlign="center">
                     Settings
                  </Typography>
                  <IconButton onClick={()=>{
                    setOpen(false)
                  }} aria-label="settings">
                  <CancelRounded  fontSize="large" color="blue" />
                  </IconButton>
               </Stack>
                    <Box
                    width="100%"
                    height={550}
                    bgcolor={"background.default"}
                    color={"text.primary"}
                    justifyContent="space-between"
                    >

                <Stack direction="row" justifyContent="flex-start" alignItems="center" gap={1}  mb={3}>
                    <IconButton onClick={()=>{
                       console.log("clicked")
                    }} aria-label="settings">
                         <Person3TwoTone/>
                     </IconButton>
                     <Typography>
                          User Configuration
                     </Typography>
                </Stack>
                <Stack direction="row" justifyContent="flex-start" alignItems="center" gap={1}  mb={3}>
                    <IconButton onClick={()=>{
                       console.log("clicked")
                    }} aria-label="settings">
                         <History/>
                     </IconButton>
                     <Typography>
                          User History
                     </Typography>
                </Stack>
                <Stack direction="row" justifyContent="flex-start" alignItems="center" gap={1}  mb={3}>
                    <IconButton  aria-label="settings">
                        {
                            mode === "light" ? 
                             <LightMode/>
                            :
                             <DarkMode/>
                        }
                     </IconButton>
                     <Typography>
                          Change Theme
                     </Typography>
                     <Switch onChange={e=>{
                                // setMode(mode =>mode === "light" ? "dark"  : "light")
                                changeMode()
                             }}/>
                </Stack>
                <Stack direction="row" justifyContent="flex-start" alignItems="center" gap={1}  mb={3}>
                    <IconButton onClick={()=>{
                       console.log("clicked")
                    }} aria-label="settings">
                         <Lock/>
                     </IconButton>
                     <Typography>
                         Stop the Account
                     </Typography>
                </Stack>
                <Stack direction="row" justifyContent="flex-start" alignItems="center" gap={1}  mb={3}>
                    <IconButton onClick={()=>{
                       console.log("clicked")
                    }} aria-label="settings">
                         <Delete/>
                     </IconButton>
                     <Typography>
                         Remove the Account
                     </Typography>
                </Stack>
                <Stack direction="row" justifyContent="flex-start" alignItems="center" gap={1}  mb={3}>
                    <IconButton onClick={()=>{
                       console.log("clicked")
                    }} aria-label="settings">
                         <OfflineBolt/>
                     </IconButton>
                     <Typography>
                         Log Out
                     </Typography>
                </Stack>

                    </Box>


          </Box>

       </SytledModalChat>
    );
  };
  
  export default Settings;