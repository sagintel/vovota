import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  useEffect(()=>{
      const connected = localStorage.getItem("connected");
      if(connected === false){
             navigate("/login")
      }
  })

  const connected = localStorage.getItem("connected");
  if(connected === false){
         navigate("/login")
  }

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
       <Post /> 
      )}
    </Box>
  );
};

export default Feed;
