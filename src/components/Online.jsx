import {
    Avatar,
    Box,
    Typography,
    Stack,
    Badge,
    IconButton, Skeleton
  } from "@mui/material";
  import React,{useState} from "react";
  import { useNavigate } from "react-router-dom";
  import ".././pages/Message/Messages.css"
  import OnlineChat from "./OnlineChat";
  
  const Online = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const [user,setUser] = useState({})
    const [open, setOpen] = useState(false);
    setTimeout(() => {
      setLoading(false);
    }, [3000]);

    const users = [
            {
                id:1,
                image:"https://material-ui.com/static/images/avatar/1.jpg",
                username:"Matrin lubre"
            },
            {
                id:2,
                image:"https://material-ui.com/static/images/avatar/1.jpg",
                username:"John prince"
            },
            {
                id:3,
                image:"https://material-ui.com/static/images/avatar/1.jpg",
                username:"Edmon marcus"
            },
             {
                id:4,
                image:"https://material-ui.com/static/images/avatar/6.jpg",
                username:"Pierre Blaurad"
            },
            {
                id:5,
                image:"https://material-ui.com/static/images/avatar/6.jpg",
                username:"Marthe Meyer"
            },
            {
                id:6,
                image:"https://material-ui.com/static/images/avatar/8.jpg",
                username:"Jules Peter"
            },
            {
                id:7,
                image:"https://material-ui.com/static/images/avatar/8.jpg",
                username:"Rodrigue Butoyi"
            },
    ]
    return (
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box mt={10} position="fixed" width={200}>
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>

          {loading ? (
                              <Stack spacing={1}>
                                <Skeleton variant="text" height={100} />
                                <Skeleton variant="text" height={20} />
                                <Skeleton variant="text" height={20} />
                                <Skeleton variant="rectangular" height={300} />
                              </Stack>
                                 ) : (

                      <Box
                              width={200}
                              justifyContent="flex-start"
                              alignItems="center"
                              p={3}
                              >
                          {
                                users?.map((user,index)=>{
                                      return(
                                        <>
                                      <div className="divclass" key={user.id} style={{marginTop:2,marginBottom:2}}>
                                        <Stack justifyContent="flex-start" alignItems="center"  direction="row" pl={2} gap={1} mb={2}>
                                              
                                              <IconButton onClick={()=>{
                                                  navigate(`/profile/${user.id}`)
                                                      }} aria-label="settings">
                                                        <Badge variant="dot" color="success">
                                                        <Avatar
                                                          direction="row" 
                                                          src={user?.image}
                                                          sx={{ width: 40, height: 40 }}
                                                          />
                                                          </Badge>
                                                  </IconButton>
                                                <div onClick={()=>{
                                                    setUser(user)
                                                     setOpen(true);

                                                }}>
                                                   <Typography fontWeight={500} variant="span">
                                                    {user.username}
                                                   </Typography>
                                                </div>
                                               
                                        </Stack>

                                      </div>
                                        </>
                                      )
                                     })
                                   }
                               </Box>
                                  
                                 )}

            <OnlineChat openChat={open} setOpenChat={setOpen} onlineUser={user}/>
         
        </Box>
      </Box>
    );
  };
  
  export default Online;
  