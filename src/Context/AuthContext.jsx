import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    {
      id: 1,
      name: "John Doe",
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    
    }
  );

 

  const login = () => {
    //TO DO
    setCurrentUser(
      {
        id: 1,
        name: "John Doe",
        profilePic:
          "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      
      }
    );
  };

  useEffect(() => {
    
    localStorage.setItem("user", JSON.stringify(currentUser));

  }, [currentUser]);

  useEffect(() => {
   
 const user =  localStorage.getItem("user");

 setCurrentUser(user);

 }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
