// import axios from "axios";
import { useState,useEffect } from "react";
import "./Register.css";
// import { useNavigation} from "react-router-dom";
import { CircularProgress,Box } from "@mui/material";

export default function Register() {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirm,setConfirm] = useState("");
    // const Navigate = useNavigation();
    const [isFetching,setIsFetching] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    if (confirm !== password) {
     console.log("password don'\t match");
    } else {
        e.preventDefault();
       try { 
        setIsFetching(true);
       const user = {
          username: username,
          email: email,
          password: password,
        };
        localStorage.setItem("user",JSON.stringify(user));
        localStorage.setItem("mode","light");
        localStorage.setItem("connected",true);
        setTimeout(() => {
            setIsFetching(false);
          }, [5000]);
        // await axios.post("/auth/register", user);
          // console.log(user);
          // Navigate("/")
        } catch (err) {
          console.log(err);
        }
    }
  };

  useEffect(()=>{
    const connected = localStorage.getItem("connected");
      if(connected){
      //  Navigate("/")
      }
 })


  return (
    <div className="login">
      <div className="loginWrapper">
      <Box mr={10} sx={{ display: { xs: "block", sm: "block" },flex:1 }} flex={1} display="flex" flexDirection="column" justifyContent="center">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              onChange={(e)=>{setConfirm(e.target.value)}}
              value={confirm}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
            {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Sign Up"
              )}
              
            </button>
            <button onClick={(e)=>{
              e.preventDefault();
              // Navigate("/login");
            }} className="loginRegisterButton">Log into Account</button>
          </form>
        </Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }} flex={1} display="flex" flexDirection="column" justifyContent="center">
          <h3 className="loginLogo">Vovota</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Vovota.
          </span>
        </Box>
      </div>
    </div>
  );
}