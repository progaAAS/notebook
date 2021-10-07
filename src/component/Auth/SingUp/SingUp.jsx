import s from "../auth.module.css"
import { NavLink, Redirect } from "react-router-dom";
import { useState } from "react";
import { onSingUp } from "../../../redux/userReducer";
import { useDispatch, useSelector } from "react-redux";

const SingUp = () => {
    
    const dispatch = useDispatch();
    const {isAuth} = useSelector(state => state.user);

    const [name, setName] = useState(null);
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    let handleNameChange = (e) => {
        setName(e.target.value);
    } 

    let handleLoginChange = (e) => {
        setLogin(e.target.value);
    } 

    let handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const Enter = () => {
        const obj = {
            name,
            login, 
            password,
        }
        dispatch(onSingUp(obj))
    }

    if (isAuth){
        return <Redirect to={"/users"}/>
    }

    return(
        <div className={s.login_form}>
            <div className={s.field}>
                <input onChange={handleNameChange} placeholder={"Введите Имя"}/>
            </div>
            <div className={s.field}>
                <input onChange={handleLoginChange} placeholder={"Введите логин"}/>
            </div>
            <div className={s.field}>
                <input onChange={handlePasswordChange} placeholder={"Введите пароль"} type={"password"}/>
            </div>
            <button onClick={Enter}> Войти </button>
            <div className={s.link}><p>Есть аккаунт?</p><NavLink className={s.activeLink} to="/">Вход</NavLink></div>
        </div>
    )
}

export default SingUp;
