import { useState } from "react";
import { useDispatch } from "react-redux";
import { InsertUser, changeUserItem } from "../../../redux/contactsRedusers";
import s from "./userModal.module.css"

const UserModal = ({ title, handleClose, user, edit }) => {

  const dispatch = useDispatch();

  const id = user.id; 
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [work, setWork] = useState(user.work);
  const userId = localStorage.getItem("id");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleWorkChange = (e) => {
    setWork(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(InsertUser({name, phone, work, userId}));
    handleClose();
  }
  
  const editContactHandler = (e) => {
    e.preventDefault();
    dispatch(changeUserItem({id, name, phone, work, userId}));
    handleClose();
  }

  return (
    <div className={s.popup_box}>
      <div className={s.box}>
        <div className={s.box__header}>
          {title}
        </div>
          <div className={s.box__body}>
            <input onChange={handleNameChange} placeholder={"Имя"} value={edit ? name : null} ></input>
            <input onChange={handlePhoneChange} placeholder={"Телефон"} value={edit ? phone : null}></input>
            <input onChange={handleWorkChange} placeholder={"Место работы"} value={edit ? work : null}></input>
          </div>
          <div className={s.box__footer}>
            <button className={s.box__Cancel} onClick={handleClose}>Cancel</button>
            <button onClick={(e) => {edit ? editContactHandler(e) : submitHandler(e)}} className={s.box__Ok}>Ok</button>
          </div>
      </div>
    </div>
  )
}

export default UserModal;
