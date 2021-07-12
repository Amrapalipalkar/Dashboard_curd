 

 import React, { useState } from 'react';

 let UserContext = React.createContext();
 
 export default UserContext;
 
 
 
 // this will provide a data to all its childrens
 
 export const UserProvider = ({ children }) => {
   let [userList, setUserList] = useState([])
   let [productList,setProductList] = useState([])
     return (<UserContext.Provider value={{userList,setUserList, productList,setProductList}}>
       {children}
     </UserContext.Provider>)
 }
 