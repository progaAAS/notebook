import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../component/Navbar/Navbar";
import UsersList from "../../component/Users/UsersList/UsersList";
import { Redirect } from "react-router-dom";

const UsersPage = React.memo(function UsersPage() {
  
  const { isAuth } = useSelector(state => state.user);

  if (!isAuth) {
    return <Redirect to={"/"}/>
  }

  return(
    <div>
      <Navbar/>
      <UsersList/>
    </div>
  ) 
})

export default UsersPage;
