import { Box,Stack, Typography,Skeleton} from "@mui/material";
import "./Profile.css";
import Feed from "../../components/Feed";
import { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Edit } from "@mui/icons-material";
import {ImageList,ImageListItem} from "@mui/material";
// import axios from "axios";

export default function Profile() {
  // const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`/users?username=${username}`);
  //     setUser(res.data);
  //   };
  //   fetchUser();
  // }, [username]);

   useEffect(()=>{
  setTimeout(() => {
    setLoading(false);
  }, [3000]);
   },[])

    return(
             <Box flex={4} p={{ xs: 0, md: 2 }}>
              {loading ? (
              <Stack spacing={1}>
                <Skeleton variant="text" height={100} />
                <Skeleton variant="text" height={20} />
                <Skeleton variant="text" height={20} />
                <Skeleton variant="rectangular" height={300} />
              </Stack>
            ) : (
              <>
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              {/* <Avatar className="profileCoverImg">
                R
              </Avatar>
            
              <Avatar className="profileCoverImg">
                R
              </Avatar> */}
               <img
                className="profileCoverImg"
                src="https://material-ui.com/static/images/avatar/1.jpg"
                alt="avatar"
              />
              <img
                className="profileUserImg"
                src="https://material-ui.com/static/images/avatar/1.jpg"
                alt="avatar"
              />
            
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">John moon</h4>
              <span className="profileInfoDesc">i'm a christian that believe in Jesus Christ</span>
            </div>
          </div>
          <Accordion defaultExpanded={false}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={14} color="primary" variant="h6">
                Activities
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Stack direction="row" justifyContent="space-between">
              <Typography fontSize={13}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography> 
               <Edit color="primary"/>
              </Stack>
            </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={false}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
             <Typography  fontSize={14} color="primary" variant="h6">
                Experience
              </Typography>
              </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" justifyContent="space-between">
            <Typography fontSize={13}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
               <Edit color="primary"/>
              </Stack>
            </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={false}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
             
              <Typography  fontSize={14} color="primary" variant="h6">
                Personal Information
              </Typography>
            
            </AccordionSummary>
            <AccordionDetails>
              <Box m={5}>
                <Stack direction="row" justifyContent="space-between">
                   <Typography mb={2} fontWeight="bold" fontSize={14}>
                      Full Name
                  </Typography>
                  <Edit color="primary"/>
                </Stack>
                 <Typography fontSize={13}>
                 Martin Boulard
              </Typography>
              </Box>
              <Box m={5}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography mb={2} fontWeight="bold" fontSize={14}>
                     Address
                  </Typography>
                  <Edit  color="primary"/>
                </Stack>
            
                 <Typography fontSize={13}>
                   13 av Ntahangwa
                 </Typography>
              </Box>
              <Box m={5}>
                <Stack direction="row" justifyContent="space-between">
                   <Typography mb={2} fontWeight="bold" fontSize={14}>
                      Sexe
                  </Typography>
                  <Edit color="primary"/>
                </Stack>
            
                 <Typography fontSize={13}>
                   Male
                 </Typography>
              </Box>
              <Box m={5}>
                 <Stack direction="row" justifyContent="space-between">
                   <Typography mb={2} fontWeight="bold" fontSize={14}>
                    BirthDay
                   </Typography>
                   <Edit color="primary"/>
                </Stack>
                 <Typography fontSize={13}>
                   11-06-1999
                 </Typography>
              </Box>
              <Box m={5}>
              <Stack direction="row" justifyContent="space-between">
                <Typography mb={2} fontWeight="bold" fontSize={14}>
                    Email
                </Typography>
                <Edit color="primary"/>
               </Stack>
             
              <Typography fontSize={13}>
               martih@gmail.com
              </Typography>
             </Box>
            </AccordionDetails>
          </Accordion>
           <Accordion defaultExpanded={false}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
             <Typography  fontSize={14} color="primary" variant="h6">
                Photos
              </Typography>
              </AccordionSummary>
            <AccordionDetails>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                  Latest Photos
                </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                alt="breakfast"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/burgers.jpg"
                alt="breakfast"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/camera.jpg"
                alt="breakfast"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                alt="breakfast"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/burgers.jpg"
                alt="breakfast"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/camera.jpg"
                alt="breakfast"
              />
            </ImageListItem>
          </ImageList>
            </AccordionDetails>
           
      </Accordion>
          <Typography m={10} variant="h6" fontWeight={100}>
          Recent Publications
        </Typography>
          <div className="profileRightBottom">
            <Feed />
            {/* <Rightbar user={user} /> */}
          </div>
        </div>
      </div>
    </>
     )}
               
            </Box>
  );
}