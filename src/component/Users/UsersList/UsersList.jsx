import React, { useEffect, useState } from "react";
import UsersItem from "../UserItem/UserItem";
import useToggle from 'react-use-toggle';
import UserModal from "../UserModal/UserModal";
import { useSelector } from "react-redux";
import s from './usersList.module.css';

const UsersList = React.memo(function UsersList() {

    let [visibleNewUser, toggleVisibleNewUser] = useToggle(false);

    const item = useSelector(state => state.contacts);
    const user = {id: '', name: '', phone: '', work: ''}
    const [searchText, setSearchText] = useState('');
    const [filteredList, setFilteredList] = useState('')
     
    useEffect(() => {
      setFilteredList(item.filter(contact => { return contact.name.toLowerCase().includes(searchText.toLowerCase())})) 
    }, [searchText, item])

    return(
      <div className={s.usersBox}>
        <div className={s.search}>
          <input onChange={(e) => setSearchText(e.target.value)} placeholder={"Поиск"}></input>
        </div>
        <UsersItem contacts={searchText ? filteredList : item} toggleVisibleNewUser={toggleVisibleNewUser} />
        {visibleNewUser && (<UserModal handleClose={toggleVisibleNewUser} title={"Добавить новый контакт"} edit={false} user={user}/>)}
      </div> 
    )
})

export default UsersList;
