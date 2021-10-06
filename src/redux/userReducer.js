import { authAPI } from "../api/api";

let initialState = {
    id: null,
    name: null,
    error: false,
    isAuth: false,
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_USER":{
            return{
                ...state,
                name: action.payload
            }
        }
        case "ADD_AUTH":{
            return{
                ...state,
                isAuth: action.payload
            }
        }
        case "ERROR":{
            return{
                ...state,
                error: action.payload
            }
        }
        default:
             return state;
    }
}

export const onLogin = (obj) => (dispatch) =>{
    authAPI.login(obj.login, obj.password).then(({data}) =>{
        if (data?.length === 0) {
            dispatch(setError(true))
        } else {
            localStorage.setItem("id", data[0].id)
            dispatch(getInfoUser());
            dispatch(setError(false))
        }
    })

}

export const onSingUp = (body) => (dispatch) =>{
    authAPI.singUp(body).then(({data}) =>{
        if (data?.length === 0) {
            dispatch(setError(true))
        } else {
            localStorage.setItem("id", data.id)
            dispatch(getInfoUser());
            dispatch(setError(false))
        }
    })

}
export const getInfoUser = () => (dispatch) => {
    const id = localStorage.getItem("id");
    authAPI.me(id).then(({data}) =>{
        dispatch(setUser(data.name))
        dispatch(setAuth(true))
    })
}

export const logOutAction = () => (dispatch) =>{
    localStorage.removeItem("id");
    dispatch(setAuth(false))
}

export const setAuth = (isAuth) => ({
    type: "ADD_AUTH", payload: isAuth
})

export const setUser = (name) => ({
    type: "ADD_USER", payload: name
})

export const setError = (error) => ({
    type: "ERROR", payload: error
})

export default userReducer;