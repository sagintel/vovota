import { Favorite, FavoriteBorder, MoreVert, Share, Comment} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
   Stack,
   Button,
   Box
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const Post = () => {
    
  const navigate = useNavigate();

   const user =  {
    id:1,
    username:"john dom",
    message:"hello man...?",
    image:"https://material-ui.com/static/images/avatar/3.jpg"
  }

  const posts = [
    {
      user:user,
      title:"John Doe",
      description:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
      comments:39,
      like:70,
      share:10,
      image:"https://material-ui.com/static/images/avatar/2.jpg",
       date:"September 14, 2022",
    },
    {
      user:user,
      title:"John Doe",
      description:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
      comments:39,
      like:70,
      share:10,
      image:"https://material-ui.com/static/images/avatar/2.jpg",
       date:"September 14, 2022",
    },
    {
      user:user,
      title:"John Doe",
      description:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
      comments:39,
      like:70,
      share:10,
      image:"https://material-ui.com/static/images/avatar/2.jpg",
       date:"September 14, 2022",
    },
    {
      user:user,
      title:"John Doe",
      description:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
      comments:39,
      like:70,
      share:10,
      image:"https://material-ui.com/static/images/avatar/2.jpg",
       date:"September 14, 2022",
    },
    {
      user:user,
      title:"John Doe",
      description:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
      comments:39,
      like:70,
      share:10,
      image:"https://material-ui.com/static/images/avatar/2.jpg",
       date:"September 14, 2022",
    },
    {
      user:user,
      title:"John Doe",
      description:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
      comments:39,
      like:70,
      share:10,
      image:"https://material-ui.com/static/images/avatar/2.jpg",
       date:"September 14, 2022",
    },
    {
      user:user,
      title:"John Doe",
      description:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
      comments:39,
      like:70,
      share:10,
      image:"https://material-ui.com/static/images/avatar/2.jpg",
       date:"September 14, 2022",
    },
    {
      user:user,
      title:"John Doe",
      description:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
      comments:39,
      like:70,
      share:10,
      image:"https://material-ui.com/static/images/avatar/2.jpg",
       date:"September 14, 2022",
    },
    {
      user:user,
      title:"John Doe",
      description:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
      comments:39,
      like:70,
      share:10,
      image:"https://material-ui.com/static/images/avatar/2.jpg",
       date:"September 14, 2022",
    },
    {
      user:user,
      title:"John Doe",
      description:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
      comments:39,
      like:70,
      share:10,
      image:"https://material-ui.com/static/images/avatar/2.jpg",
       date:"September 14, 2022",
    },
    {
      user:user,
      title:"John Doe",
      description:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
      comments:39,
      like:70,
      share:10,
      image:"https://material-ui.com/static/images/avatar/2.jpg",
       date:"September 14, 2022",
    },
    
  ]

  const comments = [
    {
      user:user,
      comment:"this is a bulling on time guys...",
      date:"12-05-2022"
    },
    {
      user:user,
      comment:"this is a bulling on time guys...",
      date:"12-05-2022"
    },
    {
      user:user,
      comment:"this is a bulling on time guys...",
      date:"12-05-2022"
    },
    {
      user:user,
      comment:"this is a bulling on time guys...",
      date:"12-05-2022"
    },
    {
      user:user,
      comment:"this is a bulling on time guys...",
      date:"12-05-2022"
    },
    {
      user:user,
      comment:"this is a bulling on time guys...",
      date:"12-05-2022"
    },
    {
      user:user,
      comment:"this is a bulling on time guys...",
      date:"12-05-2022"
    },
      {
      user:user,
      comment:"this is a bulling on time guys...",
      date:"12-05-2022"
    },
    
  ]



  return (
    <>
    { posts.map((post,index)=>{
      return(
        <Card key={index} sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={post?.title}
          subheader={post?.date}
        />
        <CardMedia
          component="img"
          height="20%"
          image={post?.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post?.description}
          </Typography>
        </CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
           <CardActions disableSpacing>
            <Stack direction="row" justifyContent="center" alignItems="center">
               <Typography fontSize={10}>
                    {post?.like}
               </Typography>
               <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
                 </IconButton>
            </Stack>
              <Stack direction="row" justifyContent="center" alignItems="center">
                  <Typography fontSize={10}>
                        {post?.share}
                  </Typography>
                  <IconButton aria-label="share">
                    <Share />
                  </IconButton>
              </Stack>
              <Stack direction="row" justifyContent="center" alignItems="center">
                  <Typography fontSize={10}>
                        {post?.comments}
                  </Typography>
                  <IconButton aria-label="share">
                     <Comment />
                 </IconButton>
              </Stack>
            </CardActions>
            <Typography m={5}>
              {post?.comments} comments
            </Typography>
        </Stack>
         <Stack direction="row" justifyContent="space-between" alignItems="center" m={2}>
             <IconButton
              onClick={()=>{
                    navigate(`/profile/${post?.user.id}`)
                  }} aria-label="settings">
               <Avatar
                  src={post?.user?.image}
                  sx={{ width: 40, height: 40 }}
               />
               </IconButton>
              <input
               sx={{ width: "50%",height:20,borderRadius:10,padding:5 }}
               type="text"
               placeholder="comment ..."
               aria-multiline
               style={{width:"50%",height:20,borderRadius:10,padding:5}}
              />
              <Button  style={{borderRadius:10,fontSize:10}} variant="outlined" color="primary">
                Comment
              </Button>
         </Stack>
          <Accordion defaultExpanded={false}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontSize={14} color="primary" variant="h6">
              Comments
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {
              comments?.map((comment,index)=>{
                 return(
                  <Box key={index} display="flex" flexDirection="row" justifyContent="flex-start" alignItems="flex-start" m={1} >
                    <IconButton
                      onClick={()=>{
                            navigate(`/profile/${comment?.user.id}`)
                        }} aria-label="settings">
                      <Avatar
                          src={comment?.user?.image}
                          sx={{ width: 40, height: 40 }}
                        />
                    </IconButton>
                <Box display="flex" justifyContent="flex-start" alignItems="flex-start" flexDirection="column" ml={2}>
                    <Typography fontSize={12}>
                        { comment?.comment }
                    </Typography>
                    <Typography fontSize={9}>
                        {comment?.date }
                    </Typography> 
                    <IconButton aria-label="add to favorites">
                    <Checkbox
                      icon={<FavoriteBorder fontSize="small" />}
                      checkedIcon={<Favorite fontSize="small" sx={{ color: "red" }} />}
                    />
                    </IconButton>
                </Box>
              </Box>
                  
                 )
              })
            }
         
          </AccordionDetails>
    </Accordion>
      </Card>
      )
             
    })}
    </>
   
   
  );
};

export default Post;
