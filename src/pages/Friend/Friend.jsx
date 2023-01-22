import {
    Avatar,
    Button,
    Stack,
    Typography,
    Divider,
    IconButton,
     Skeleton
  } from "@mui/material";
//   import React, { useState } from "react";
//   import {Mail
//   } from "@mui/icons-material";
  import { Box } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  import { useState } from "react";

  
  const Friend = () => {
   
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false);
    }, [3000]);

    const suggestions = [
      {
      id:1,
      username:"john dom",
      activity:"Student",
      country:"Burundi",
      image:"https://material-ui.com/static/images/avatar/3.jpg"
    },
    {
      id:2,
      username:"Lee mina",
      activity:"Scientist",
      country:"RDC",
      image:"https://material-ui.com/static/images/avatar/3.jpg"
    },
    {
      id:3,
      username:"Rodrigue sahel",
      activity:"Professor",
      country:"USA",
      image:"https://material-ui.com/static/images/avatar/3.jpg"
    },
    {
      id:4,
      username:"Lyly mariam",
      activity:"Pianist",
      country:"Tunisie",
      image:"https://material-ui.com/static/images/avatar/3.jpg"
    },
    {
      id:5,
      username:"john dom",
      activity:"Student",
      country:"Tunisie",
      image:"https://material-ui.com/static/images/avatar/3.jpg"
    },
    {
      id:6,
      username:"john dom",
      activity:"Student",
      country:"Tunisie",
      image:"https://material-ui.com/static/images/avatar/3.jpg"
    },
    {
      id:7,
      username:"Lee mina",
      activity:"Scientist",
      country:"Tunisie",
      image:"https://material-ui.com/static/images/avatar/3.jpg"
    },
    {
      id:8,
      username:"Rodrigue sahel",
      activity:"Professor",
      country:"Tunisie",
      image:"https://material-ui.com/static/images/avatar/3.jpg"
    },
    {
      id:9,
      username:"Lyly mariam",
      activity:"Pianist",
      country:"Tunisie",
      image:"https://material-ui.com/static/images/avatar/3.jpg"
    },
    {
      id:10,
      username:"john dom",
      activity:"Student",
      country:"Tunisie",
      image:"https://material-ui.com/static/images/avatar/3.jpg"
    },
    ]

    return (
          <Box
            flex={2} p={2} mt={5} sx={{ display: { xs: "block", sm: "block" } }}
            width="90%"
            bgcolor={"background.default"}
            color={"text.primary"}
          >
             
            <Typography mt={3} variant="h6" color="gray" textAlign="center">
               Friends suggestion
            </Typography>
            {loading ? (
                              <Stack spacing={1}>
                                <Skeleton variant="text" height={100} />
                                <Skeleton variant="text" height={20} />
                                <Skeleton variant="text" height={20} />
                                <Skeleton variant="rectangular" height={300} />
                              </Stack>
                                 ) : (
                                  <>
                                    {
                                      suggestions.map((user,index)=>{
                                            return(
                                              <>
                                            
                                                <Stack justifyContent="flex-start" alignItems="flex-start" key={user.id} direction="row" pl={2} gap={1} mt={2} mb={2}>
                                                    <IconButton onClick={()=>{
                                                          navigate(`/profile/${user.id}`)
                                                        }} aria-label="settings">
                                                        <Avatar
                                                          src={user?.image}
                                                          sx={{ width: 50, height: 50 }}
                                                          />
                                                        </IconButton>
                                                      <Box display="flex" flexDirection="column" mt={1}>
                                                          <Typography fontWeight={500} variant="span">
                                                            {user.username}
                                                          </Typography>
                                                          <Typography m={1} fontSize={12} variant="span">
                                                            {user.country} ~~ {user.activity}
                                                          </Typography>
                                                          <Box display="flex" flexDirection="row" mt={1}>
                                                              <Button onClick={()=>{
                                                                console.log("add")
                                                              }}  color="primary" variant="contained" style={{margin:5,fontSize:11}}>
                                                                  Add
                                                              </Button>
                                                              <Button onClick={()=>{
                                                                console.log("removed")
                                                              }}  color="secondary" variant="contained" style={{margin:5,fontSize:11}}>
                                                                  Remove
                                                              </Button>
                                                          </Box>
                                                        </Box>
                                                </Stack>
                                              <Divider variant="inset"  />
                                              </>
                                            )
                                      })
                                  }
                                                        
                                  </>
                                  
                                 )}
          
           
          </Box>
    );
  };
  
  export default Friend;