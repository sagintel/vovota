import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import Conversation from "./components/Conversation";
import { useState,useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Notification from "./pages/Notification/Notification";
import Message from "./pages/Message/Messages";
import Friend from "./pages/Friend/Friend";
import ThePost from "./components/ThePost";
import Online from "./components/Online";


import { AuthContextProvider } from "./Context/AuthContext";
// import { AuthContext } from "./Context/AuthContext";

function App() {
  const [mode, setMode] = useState("light");
  const [user,setUser] = useState();
  const connected = localStorage.getItem("connected");
  
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect(()=>{
     const users = localStorage.getItem("user");
     const mode = localStorage.getItem("mode");
     const connected = localStorage.getItem("connected")
     console.log(connected)
     if(!users && !mode && !connected){
      localStorage.setItem("user",JSON.stringify(
        {
          email:null,
          password:null
       }
         ));
      localStorage.setItem("mode","light");
      localStorage.setItem("connected",false)
     }
     setUser(JSON.parse(users));
     setMode(mode);
  },[])

  const data = [
    {
      id:1,
      username:"john dom",
      message:"hello man...?",
      image:"https://material-ui.com/static/images/avatar/3.jpg"
    },
    {
      id:2,
      username:"Lee mina",
      message:"i am Mark from cleverland...?",
      image:"https://material-ui.com/static/images/avatar/3.jpg"
    },
    {
      id:3,
      username:"Rodrigue sahel",
      message:"i am home man...?",
      image:"https://material-ui.com/static/images/avatar/3.jpg"
    },
    {
      id:4,
      username:"Lyly mariam",
      message:"i love you bae...?",
      image:"https://material-ui.com/static/images/avatar/3.jpg"
    },
    {
      id:5,
      username:"john dom",
      message:"hello man...?",
      image:"https://material-ui.com/static/images/avatar/3.jpg"
    },
  ];

  const Layout = () => {
    if (connected === false) {
      return <Navigate to="/login"/>
     }
    return (
      <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar/>
            <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode}/>
              <Outlet />
              {
                window.location.pathname === "/message" ?
                <Online/>
                :
                <Rightbar />
              } 
             
               </Stack>
            <Add />
            <Conversation data={data} />         
        </Box>
    );
  };

  const ProtectedRoute = ({ children }) => {
       if (connected === false) {
          <Navigate to="/login"/>
            }
     return children;

  };

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Feed />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/post/:id",
          element: <ThePost />,
        },
        {
          path: "/message",
          element: <Message  />,
        },
        {
          path: "/friends",
          element: <Friend  />,
        },
        {
          path: "/settings",
          element: <Profile />,
        },
        {
          path: "/settings",
          element: <Profile />,
        },
        {
          path: "/notification",
          element: <Notification user={user}/>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgot",
      element: <Login />,
    },
  ]);


  return (
    <ThemeProvider theme={darkTheme}>
         <AuthContextProvider>
         <RouterProvider router={router} />
         </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
