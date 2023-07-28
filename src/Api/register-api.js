import {instance} from "./api";

export const registerApi = {
    //Все POST запросы!!!
    // Регистрация нового студента
    regNewStudent(nick, name, surname, patronym, password, password2, phone_numbers, telegram_username, date_of_birth, region, city, district_city, photo) {
        return instance.post(`register/student/`, {
            nick, name, surname, patronym, password, password2, phone_numbers, telegram_username, date_of_birth, region, city, district_city, photo
        })
    }
}