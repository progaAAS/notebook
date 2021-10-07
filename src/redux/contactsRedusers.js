import { usersAPI } from "../api/api";

const initialState = []

const contactsRedusers = (state = initialState, action) => {
    switch(action.type){
        case "SET_USERS":{
            // let newState = state.slice()
            // newState = newState.concat(action.payload)
            // return newState
            // let newState = [...state, ...action.payload]

            let newState = !action.payload ? [] : [...state, ...action.payload] 
            return newState
            
                
            
        }
        case "UPDATE_USER":{
            let newState = state.slice()
            let updateUser = newState.find(item => item.id == action.payload.id);
            Object.assign(updateUser, { ...action.payload });
            return newState

            // let newState = {...state}
            // debugger
            // let updateUser = state.find(item => item.id == action.payload.id);
            // let User = {...state, ...updateUser}
            // return User
        }
        case "DELETE_USER":{
            let newState = state.slice()
            let user = newState.findIndex(item => item.id == action.payload);
            newState.splice(user, 1);
            return newState
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
    dispatch(setUsers([response.data]));
    }).catch(function (error) {
        console.log("Ошибка");
      });
}

export const deleteUserItem = (id, index) => (dispatch) =>{
    usersAPI.deleteUser(id).then(response =>{
        dispatch(deleteUser(id));
    })
}
export const changeUserItem = (body) => (dispatch) =>{
    usersAPI.changeUser(body).then(response =>{
        dispatch(updateUser(response.data));
    })
}

export const setUsers = (userData) => ({
    type: "SET_USERS", payload: userData
})

export const updateUser = (userData) => ({
    type: "UPDATE_USER", payload: userData
})

export const deleteUser = (id) => ({
    type: "DELETE_USER", payload: id
})

export default contactsRedusers;