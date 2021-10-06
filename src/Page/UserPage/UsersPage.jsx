import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../../component/Navbar/Navbar";
import UsersList from "../../component/Users/UsersList/UsersList";
import { getInfoUser } from "../../redux/userReducer";


const UsersPage = React.memo(function UsersPage() {
  const dispatch = useDispatch();

  return <div>
      <Navbar/>
      <UsersList />

  </div> 
})

export default UsersPage;
