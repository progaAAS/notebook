import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutAction } from '../../redux/userReducer';
import s from './navbar.module.css';

const Navbar = React.memo(function Navbar() {

     const dispatch = useDispatch();
     const {name} = useSelector(state => state.user);
 
     let logOut = () =>{
          dispatch(logOutAction());
     }

     return(
          <div className={s.navbar}>
          <h1>TakeOff</h1>
               <div className={s.navbar__name}>
                    <span>{name}</span>
                    <NavLink to="/"><button onClick={() => logOut()}>Выход</button></NavLink>
               </div>
          </div>
    )
})
  
  export default Navbar;
  