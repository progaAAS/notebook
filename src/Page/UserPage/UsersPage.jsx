import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../component/Navbar/Navbar";
import UsersList from "../../component/Users/UsersList/UsersList";
import { Redirect } from "react-router-dom";

const UsersPage = React.memo(function UsersPage() {
  const dispatch = useDispatch();


  const {isAuth} = useSelector(state => state.user);

  if (!isAuth) {
    return <Redirect to={"/"}/>
  }


  return <div>
      <Navbar/>
      <UsersList />

  </div> 
})

export default UsersPage;
