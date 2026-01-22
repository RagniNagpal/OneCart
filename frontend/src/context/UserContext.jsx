// import { useContext, useState, useEffect, createContext } from "react";

// import { AuthDataContext } from "./AuthContext"; // Named import from AuthContext
// import axios from "axios";

// export const userDataContext=createContext()
// const UserContext = ({children}) => {
//   // let {userData,setUserData}=useState("")
//   const [userData, setUserData] = useState(null);

//   // let {serverUrl}=useDataContext(authDataContext)
// let { serverUrl } = useContext(AuthDataContext);


//   const getCurrentUser=async()=>{
//     try{
//       let result=await axios.post(serverUrl + "/api/user/getcurrentuser",{withCredentials:true})

//       setUserData(result.data)
//       console.log(result.data)

//     }catch(error){
//       setUserData(null)
//       console.log(error)
//     }
//   }

//   useEffect(()=>{
//     getCurrentUser()
//   },[])
  
//   let value={
//     userData,setUserData,getCurrentUser
//   }

//   return (
//     <div>
//       <userDataContext.Provider value={value}>
//         {children}
//       </userDataContext.Provider>
//     </div>
//   )
// }

// export default UserContext


import { createContext, useContext, useState, useEffect } from "react";
import { AuthDataContext } from "./AuthContext";
import axios from "axios";

export const UserDataContext = createContext(null);

const UserContext = ({ children }) => {
  const { serverUrl } = useContext(AuthDataContext); // ✅ fixed
  const [userData, setUserData] = useState(null);

  const getCurrentUser = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/user/getcurrentuser`, { 
  withCredentials: true 
});

      setUserData(res.data);
      console.log(res.data);
    } catch (error) {
      setUserData(null);
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const value = { userData, setUserData, getCurrentUser };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
