import {
    Avatar,
    // AvatarGroup,
    Box,
    Divider,
    // ImageList,
    // ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
     Skeleton,
     Stack
  } from "@mui/material";
  import React,{useState} from "react";
  import { useNavigate } from "react-router-dom";
  import "./Notification.css"
  
  const Notification = () => {

    const navigate = useNavigate();

    setTimeout(() => {
      setLoading(false);
    }, [3000]);

    const user = {
      id:6,
      username:"john dom",
      activity:"Student",
      country:"Tunisie",
      image:"https://material-ui.com/static/images/avatar/3.jpg"
    }

    const post ={
      id:1,
      user:user,
      title:"John Doe",
      description:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
      comments:39,
      like:70,
      share:10,
      image:"https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
       date:"September 14, 2022",
    }

    const notifications = [
        {
           id:1,
            title:"Brunch this weekend?",
            image:"https://material-ui.com/static/images/avatar/3.jpg",
            name:"Ali Connors",
            description:"  I'll be in your neighborhood doing errands this…",
            view:true,
            IsUserNotification:true,
            user:user

        },
        { 
            id:2,
            title:"Summer BBQ",
            image:"/static/images/avatar/2.jpg",
            name:"to Scott, Alex, Jennifer",
            description:"  Wish I could come, but I'm out of town this…",
            view:true,
            IsUserNotification:true,
            user:user

        },
        {
            id:3,
            title:"Oui Oui",
            image:"/static/images/avatar/3.jpg",
            name:"Sandra Adams",
            description:'  Do you have Paris recommendations? Have you ever…',
            view:false,
            IsUserNotification:true,
            user:user

        },
        {
            id:4,
            title:"Brunch this weekend?",
            image:"https://material-ui.com/static/images/avatar/3.jpg",
            name:"Ali Connors",
            description:"  I'll be in your neighborhood doing errands this…",
            view:false,
            IsUserNotification:false,
            post:post


        },
        {
            id:5,
            title:"Summer BBQ",
            image:"/static/images/avatar/2.jpg",
            name:"to Scott, Alex, Jennifer",
            description:" Wish I could come, but I'm out of town this…",
            view:true,
            IsUserNotification:false,
            post:post

        },
        {
            id:6,
            title:"Oui Oui",
            image:"/static/images/avatar/3.jpg",
            name:"Sandra Adams",
            description:' Do you have Paris recommendations? Have you ever…',
            view:true,
            IsUserNotification:false,
            post:post

        },
          {
            id:7,
            title:"Brunch this weekend?",
            image:"https://material-ui.com/static/images/avatar/3.jpg",
            name:"Ali Connors",
            description:" I'll be in your neighborhood doing errands this…",
            view:false,
            IsUserNotification:true,
            user:user

        },
        {
            id:8,
            title:"Summer BBQ",
            image:"/static/images/avatar/2.jpg",
            name:"to Scott, Alex, Jennifer",
            description:" Wish I could come, but I'm out of town this…",
            view:false,
            IsUserNotification:false,
            post:post

        },
        {
            id:9,
            title:"Oui Oui",
            image:"/static/images/avatar/3.jpg",
            name:"Sandra Adams",
            description:'  Do you have Paris recommendations? Have you ever…',
            view:true,
            IsUserNotification:true,
            user:user

        },
        {
           id:10,
            title:"Oui Oui",
            image:"/static/images/avatar/3.jpg",
            name:"Sandra Adams",
            description:'  Do you have Paris recommendations? Have you ever…',
            view:false,
            IsUserNotification:true,
            user:user

        },
        {
          id:11,
          title:"Oui Oui",
          image:"/static/images/avatar/3.jpg",
          name:"Sandra Adams",
          description:'  Do you have Paris recommendations? Have you ever…',
          view:true,
          IsUserNotification:false,
          post:post

      },
      {
         id:12,
          title:"Oui Oui",
          image:"/static/images/avatar/3.jpg",
          name:"Sandra Adams",
          description:'  Do you have Paris recommendations? Have you ever…',
          view:false,
          IsUserNotification:false,
          post:post

      }, {
        id:13,
        title:"Oui Oui",
        image:"/static/images/avatar/3.jpg",
        name:"Sandra Adams",
        description:'  Do you have Paris recommendations? Have you ever…',
        view:true,
        IsUserNotification:false,
        post:post

    },
    {
       id:14,
        title:"Oui Oui",
        image:"/static/images/avatar/3.jpg",
        name:"Sandra Adams",
        description:'  Do you have Paris recommendations? Have you ever…',
        view:false,
        IsUserNotification:true,
        user:user

    },
        
    ]

      const [loading, setLoading] = useState(true);

    return (
      <Box flex={2} p={2} sx={{ display: { xs: "block", sm: "block" } }}>
        <Box  width="100%">
         <Typography variant="h6" fontWeight={100} mt={2}>
            Latest Notification
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
             {loading ? (
                      <Stack spacing={1}>
                       <Skeleton variant="text" height={100} />
                       <Skeleton variant="text" height={20} />
                       <Skeleton variant="text" height={20} />
                       <Skeleton variant="rectangular" height={300} />
                      </Stack>
                           ) : (
                              <>
                  { notifications.map((notification,index)=>{
                    return(
                        notification.view === true ? 
                        <div className="divclass" key={notification.id}>
                            <ListItem onClick={()=>{
                                notification.IsUserNotification === true ?
                                      navigate(`/profile/${notification.user.id}`)
                                                :
                                      navigate(`/post/${notification.post.id}`)

                                  }}
                                   alignItems="flex-start">
                                  <ListItemAvatar 
                                  onClick={()=>{
                                      notification.IsUserNotification === true ?
                                            navigate(`/profile/${notification.user.id}`)
                                                :
                                                navigate(`/post/${notification.post.id}`)

                                  }}>
                                    <Avatar alt={notification.image} src={notification.image} />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={notification.title}
                                    secondary={
                                      <React.Fragment>
                                        <Typography
                                          sx={{ display: 'inline' }}
                                          component="span"
                                          variant="body2"
                                          color="text.primary"
                                        >
                                          {notification.name}
                                        </Typography>
                                        — {notification.description}
                                      </React.Fragment>
                                    }
                                  />
                                </ListItem>
                                    <Divider variant="inset" component="li" />
                             </div>
                                     :
                          <div className="divclass" >
                                <ListItem onClick={()=>{
                                        notification.IsUserNotification === true ?
                                            navigate(`/profile/${notification.user.id}`)
                                                :
                                                navigate(`/post/${notification.post.id}`)

                                          }}
                                          key={notification.id} alignItems="flex-start">
                                    <ListItemAvatar 
                                        onClick={()=>{
                                            notification.IsUserNotification === true ?
                                                  navigate(`/profile/${notification.user.id}`)
                                                      :
                                                      navigate(`/post/${notification.user.post}`)

                                        }}>
                                            <Avatar alt={notification.image} src={notification.image} />
                                      </ListItemAvatar>
                                      <ListItemText
                                        primary={
                                          <React.Fragment>
                                            <Typography
                                              sx={{ display: 'inline' }}
                                              component="h5"
                                              variant="body2"
                                              color="text.primary"
                                              fontWeight="bold"
                                            >
                                          {notification.title}
                                            </Typography>
                                            </React.Fragment>
                                          
                                        }
                                        secondary={
                                          <React.Fragment>
                                              <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                                fontWeight="bold"
                                            >
                                                {notification.name}
                                              </Typography >
                                                  <Typography
                                                  component="span"
                                                  variant="body2"
                                                  color="text.primary"
                                                  fontWeight="bold"
                                                  >
                                                  — {notification.description}
                                                  </Typography>
                                          </React.Fragment>
                                            }
                                          />
                                      </ListItem>
                                      <Divider variant="inset" component="li" />
                                </div>
                                  
                                )
                            })
                        }
              </>
                                  
            )}
     
      </List>
        </Box>
      </Box>
    );
  };
  
  export default Notification;