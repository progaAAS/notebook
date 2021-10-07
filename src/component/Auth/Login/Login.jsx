import { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { onLogin } from "../../../redux/userReducer";
import s from "../auth.module.css"
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    const {isAuth, error} = useSelector(state => state.user);

    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    let handleLoginChange = (e) => {
        setLogin(e.target.value);
    } 

    let handlePasswordChange = (e) => {
        setPassword(e.target.value);
    } 

    const Enter = () => {
        const obj = {
          login, 
          password,
        }
        dispatch(onLogin(obj))
    }
    if (isAuth){
        return <Redirect to={"/users"}/>
    }

    return(
        <div className={s.login_form}>
            <div onChange={handleLoginChange} className={s.field}>
                <input placeholder={"Введите логин"}/>
            </div>
            <div onChange={handlePasswordChange} className={s.field}>
                <input placeholder={"Введите пароль"} type={"password"}/>
            </div>
            <button onClick={Enter} > Войти </button>
            <div className={s.link}><p>У вас ещё нет аккаунта?</p><NavLink className={s.activeLink} to="/singup">Зарегистрироваться</NavLink></div>
            {error && <div>Пользователь не найден</div>}
        </div>
    )
}

export default Login;
