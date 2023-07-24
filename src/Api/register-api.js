import {instance} from "./api";

export const registerApi = {
    //Все POST запросы!!!
    // Регистрация нового студента
    regNewStudent(username, password, password2, phone_numbers, telegram_username, date_of_birth, region, city, district_city) {
        return instance.post(`register/student/`, {
            username, password, password2, phone_numbers, telegram_username, date_of_birth, region, city, district_city
        })
    }
}