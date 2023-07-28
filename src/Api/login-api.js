import {instance} from "./api";

export const loginApi = {
    //Все POST запросы!!!
    // Регистрация нового студента
    login(username, password) {
        return instance.post(`accounts/login/`, {
            username, password
        })
    }
}