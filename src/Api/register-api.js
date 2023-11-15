import {instance} from "./api";

export const registerApi = {
    //Все POST запросы!!!
    // Регистрация нового студента
    regNewStudent(username, firstname, surname, patronym, password, password2, phone_numbers, telegram_username, date_of_birth, region, district_city, city, photo) {
        return instance.post(`register/student/`, {
            username, firstname, surname, patronym, password, password2, phone_numbers, telegram_username, date_of_birth, region, district_city, city
        })
    // regNewStudent(username, firstname, surname, patronym, password, password2, phone_numbers, telegram_username, date_of_birth, region, district_city, city, photo) {
    //     return instance.post(`register/student/`, {
    //         username, firstname, surname, patronym, password, password2, phone_numbers, telegram_username, date_of_birth, region, district_city, city
    //     })
    }
}