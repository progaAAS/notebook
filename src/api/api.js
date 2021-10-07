import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3002/',
    headers: {
        ContentType: 'application/json',
        headers: {"Access-Control-Allow-Origin": "*"}
    }
});

export const usersAPI = {
    getUsers() {
        const id = localStorage.getItem("id");
        return instance.get(`contacts?userId=${id}`);
    },
    insertUser(body){
        return instance.post(`contacts?`, body);
    },
    changeUser(body){
        return instance.put(`contacts/${body.id}`, body)
    },
    deleteUser(id){
        return instance.delete(`contacts/${id}`)
    }
}


export const authAPI = {

    login(login, password) {
        return instance.get(`users?login=${login}&password=${password}`);
    },
    singUp(body){
        return instance.post(`users?`, body);
    },
    me(id){
        return instance.get(`users/${id}`);
    }
}