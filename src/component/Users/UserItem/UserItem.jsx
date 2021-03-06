import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import s from "./userItem.module.css"
import useToggle from 'react-use-toggle';
import UserModal from "../UserModal/UserModal";
import { deleteUserItem, getUsersList } from "../../../redux/contactsRedusers";

const UsersItem = ({ toggleVisibleNewUser, contacts }) => {

    const dispatch = useDispatch();

    let [visibleChangeUser, toggleVisibleChangeUser] = useToggle(false);
    const [user, userItem] = useState();

    useEffect(() => {
        dispatch(getUsersList())
    },[]);

    let openModal = (user) => {
        toggleVisibleChangeUser()
        userItem(user)
    }

    let onSelectItem = (user, index) => {
        dispatch(deleteUserItem(user.id, index))
        console.log(user.id)
    } 

    return(
        <div>
            <div className={s.usersBlock}>
                <div className={s.addUser}>
                    <button onClick={toggleVisibleNewUser}>Добавить</button>
                </div>
                <div className={s.userItem}>
                    {contacts && contacts.map((user, index) => (
                        <div className={s.users} key={index}>
                            <div className={s.info}>
                                <span className={s.name}>{user.name}</span>
                                <span className={s.phone}>{user.phone}</span>
                                <span>{user.work}</span>
                            </div>
                            <div className={s.change_info}>
                                <button onClick={()=>onSelectItem(user, index)} className={s.delete}>Удалить</button>
                                <button onClick={() => openModal(user)} className={s.change}>Переименовать</button>
                            </div>
                        </div>
                    ))}
                </div>
                    {visibleChangeUser && (<UserModal user={user} handleClose={toggleVisibleChangeUser} title={"Изменить контакт"} edit/>)}
            </div>
        </div>
    )
}

export default UsersItem;
