import axios from "axios";
import { usersAPI } from "../api/api";

const initialState = []

const contactsRedusers = (state = initialState, action) => {
    switch(action.type){
        case "SET_USERS":{
            return action.payload
        }
        default:
             return state;
    }
}

export const getUsersList = () => (dispatch) =>{
    usersAPI.getUsers().then(response =>{            
        dispatch(setUsers(response.data));
    })
}

export const InsertUser = (body) => (dispatch) =>{
    usersAPI.insertUser(body).then(response =>{  
    dispatch(setUsers(response.data));
    }).catch(function (error) {
        console.log("Ошибка");
      });
}

export const changeUserItem = (body) => (dispatch) =>{
    usersAPI.changeUser().then(response =>{  
        dispatch(setUsers(response.data));
    })
}

export const deleteUserItem = (id) => (dispatch) =>{
    usersAPI.deleteUser(id).then(response =>{
        dispatch(setUsers(response.data));
    })
}
export const putUserItem = (body) => (dispatch) =>{
    usersAPI.changeUser(body).then(response =>{
        dispatch(setUsers(response.data));
    })
}

export const setUsers = (name) => ({
    type: "SET_USERS", payload: name
})

export default contactsRedusers;