import {
    Avatar,
    Button,
    Stack,
    styled,
    Typography,
    // Badge,
    Modal,
    IconButton,
     Skeleton,
     CircularProgress
  } from "@mui/material";
  import React, { useState } from "react";
  import {
    EmojiEmotions,
  } from "@mui/icons-material";
  import { CancelRounded } from "@mui/icons-material";
  import { Box } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  import InfiniteScroll from 'react-infinite-scroll-component';
  import EmojiPicker from 'emoji-picker-react';
  
  

const SytledModalChat = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position:"absolute",
  top:30,
});
const StyledModalEmoji = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position:"absolute",
  bottom:20,
  marginRight:20
});
  
  const OnlineChat = ({openChat,setOpenChat,onlineUser}) => {
 
    const [loading, setLoading] = useState(true);
    // const [sending, setSending] = useState(false);
    const [openEmoji, setOpenEmoji] = useState(false);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate()

    setTimeout(() => {
      setLoading(false);
    }, [3000]);

    const sender={
        id:4,
        image:"https://material-ui.com/static/images/avatar/3.jpg",
        email:"lodbuja@gmail.com",
        username:"Martin WALKER"

    }

    const receiver={
        id:1,
        email :"brayn@gmail.com",
        image:"https://material-ui.com/static/images/avatar/3.jpg",
        username : "John Dimitrie"

    }

  const messages = [
    {
      id:1,
      message:"hello man...?",
      sender:sender,
      receiver:receiver,
      date: new Date("2020-06-01")
    },
    {
      id:2,
      message:"i am Mark from cleverland...?",
      sender:receiver,
      receiver:sender,
      date:new Date("2021-04-01")
    },
    {
      id:3,
      message:"i am Mark from cleverland...?",
      sender:sender,
      receiver:receiver,
      date:new Date("2021-07-21")
    },
    {
      id:4,
      message:"i am Mark from cleverland...?",
      sender:receiver,
      receiver:sender,
      date: new Date("2021-01-21")
    },
    {
      id:5,
      message:"i am Mark from cleverland...?",
      sender:receiver,
      receiver:sender,
      date:new Date("2020-06-01")
    },
  ];


  const Data = [messages.sort((a,b)=>b.date-a.date)];

    return (
          <Box
            flex={2} p={2} mt={5} sx={{ display: { xs: "block", sm: "block" } }}
            width="90%"
            bgcolor={"background.default"}
            color={"text.primary"}
          >
         
            <SytledModalChat
                    open={openChat}
                    onClose={(e) => setOpenChat(false)}
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
                        navigate(`/profile/${onlineUser?.id}`)
                         }} aria-label="settings">
                 <Avatar
                  direction="row" 
                  src={onlineUser?.image}
                  sx={{ width: 40, height: 40 }}
                   />
              </IconButton>
                
                  <Typography variant="h6" color="black" textAlign="center">
                     Chat
                  </Typography>
                  <IconButton onClick={()=>{
                    setOpenChat(false)
                  }} aria-label="settings">
                  <CancelRounded  fontSize="large" color="blue" />
                  </IconButton>
               </Stack>
                      <Box
                        width="100%"
                        height={500}
                        bgcolor={"background.default"}
                        color={"text.primary"}
                        justifyContent="space-between"
                      >
                          {loading ? (
                              <Stack spacing={1}>
                                <Skeleton variant="text" height={100} />
                                <Skeleton variant="text" height={20} />
                                <Skeleton variant="text" height={20} />
                                <Skeleton variant="rectangular" height={300} />
                              </Stack>
                                 ) : (

                        <Box
                        width="100%"
                        height={430}
                        bgcolor={"background.default"}
                        color={"text.primary"}
                        justifyContent="space-between"
                        alignItems="flex-start"
                        borderTop={2}

                        >
                            <InfiniteScroll
                                dataLength={Data[0].length} 
                                // next={fetchData}
                                hasMore={true}
                                loader={<CircularProgress/>}
                                endMessage={
                                 <Typography textAlign="center">
                                    No more
                                 </Typography>
                                }
                                // below props only if you need pull down functionality
                                // refreshFunction={this.refresh}
                                // pullDownToRefresh
                                // pullDownToRefreshThreshold={50}
                                // pullDownToRefreshContent={
                                //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                                // }
                                // releaseToRefreshContent={
                                //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                                // }
                                // initialScrollY={ Data[0].length * 35}
                                style={{height:430}}
                              >
                          {
                            Data[0]?.map((message,index)=>{
                                return(
                                    <Stack direction="row" justifyContent={onlineUser.id === message?.sender?.id ? "flex-end" :"flex-start"} alignItems="center" gap={1}  mb={3}>
                                    
                                    {
                                      onlineUser?.id === message?.sender?.id ? 
                                    <>
                                      <Typography fontWeight="bold" borderRadius={20} borderTop={2} justifyContent="flex-end" alignItems="flex-end" fontSize={12} p={1} width="60%">
                                              {message?.message}
                                      </Typography>
                                    <IconButton onClick={()=>{
                                      navigate(`/profile/${message?.sender?.id}`)
                                      }} aria-label="settings">
                                        <Avatar
                                          direction="row" 
                                          src={message?.sender?.image}
                                          sx={{ width: 30, height: 30 }}
                                          />
                                      </IconButton>
                                    
                                    </> 
                                      :
                                        <>
                                        <IconButton onClick={()=>{
                                      navigate(`/profile/${message?.receiver?.id}`)
                                      }} aria-label="settings">
                                        <Avatar
                                          direction="row" 
                                          src={message?.receiver?.image}
                                          sx={{ width: 30, height: 30 }}
                                          />
                                      </IconButton>
                                      <Typography  fontWeight="bold" borderRadius={20} borderBottom={2} justifyContent="flex-start" alignItems="flex-start" fontSize={12} p={1} width="60%">
                                              {message?.message}
                                      </Typography>
                                        </>
                                    

                                    }
                                    
                                    </Stack>
                                )
                            })
                          }
                          </InfiniteScroll>
                   </Box>
                  )}
                       
                        <Box
                        width="100%"
                        height={70}
                        bgcolor={"background.default"}
                        color={"text.primary"}
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                        borderTop={2}
                        >
                         <IconButton onClick={()=>{
                            setOpenEmoji(true)
                       }}>
                          <EmojiEmotions color="primary" />
                       </IconButton>
                        <input
                        sx={{ width: "50%",height:30,borderRadius:10,padding:5 }}
                        type="text"
                        placeholder="message ..."
                        value={msg}
                        onChange={(e)=>{setMsg(e.target.value)}}
                        style={{width:"50%",height:30,borderRadius:10,padding:5}}
                        />
                       {/* {sending === true ? 
                           <Button onClick={()=>{
                            // setSending(true);
                            // messages.push({
                            //   sender:user.sender,
                            //   receiver: user.receiver,
                            //   message:msg,
                            //   date: new Date()
                            // });
                            // console.log(messages)
                            // setMsg("");
                            // setSending(false)
                        }} disabled  style={{borderRadius:10,fontSize:10}} variant="contained" color="primary">
                          send
                        </Button>
                        :  */}
                        <Button onClick={()=>{
                            // setSending(true);
                            // messages.push({
                            //   sender:user.sender,
                            //   receiver: user.receiver,
                            //   message:msg,
                            //   date: new Date()
                            // });
                            // console.log(messages)
                            // setMsg("");
                            // setSending(false)
                        }}  style={{borderRadius:10,fontSize:10}} variant="contained" color="primary">
                          send
                        </Button>
                          {/* } */}

                        </Box>

                      </Box>
                  </Box>
            </SytledModalChat>
            <StyledModalEmoji
         open={openEmoji}
         onClose={(e) => setOpenEmoji(false)}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
       >
        <Box
            width={300}
            height={400}
            bgcolor={"background.default"}
            color={"text.primary"}
            p={3}
            borderRadius={3}
          >
            <EmojiPicker
              width={300}
              height={400}
              onEmojiClick={(e)=>{
                setOpenEmoji(false)
                console.log(e)
                 setMsg(msg+e.emoji)
              }}
             />
          </Box>
      </StyledModalEmoji>
          </Box>
    );
  };
  
  export default OnlineChat;