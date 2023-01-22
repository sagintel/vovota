import { useEffect, useState } from "react";
import "./Login.css";
import { CircularProgress,Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Login() {

  const [isFetching,setIsFetching] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const Navigate = useNavigate();

  const handleClick = (e) => {
    setIsFetching(true);
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify({email,password}));
    localStorage.setItem("mode","light");
    localStorage.setItem("connected",true);
    setTimeout(() => {
        setIsFetching(false);
      }, [5000]);
    Navigate("/");
  };

  useEffect(()=>{
     const connected = localStorage.getItem("connected");
     console.log(connected)
       if(connected === true){
        Navigate("/")
       }
  })

  return (
    <div className="login">
      <div className="loginWrapper">
        <Box  mr={10} sx={{ display: { xs: "none", sm: "block" } }} flex={1} display="flex" flexDirection="column" justifyContent="center">
          <h3 className="loginLogo">Vovota</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Vovota.
          </span>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "block" },flex:1 }} flex={1} display="flex" flexDirection="column" justifyContent="center">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button onClick={()=>{Navigate("/register")}} className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </Box>
      </div>
    </div>
  );
}