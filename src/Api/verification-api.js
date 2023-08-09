import {instance} from "./api";

export const verificationApi = {
    //Все POST запросы!!!
    // Верификация пользователя
    userVerification(code) {
        return instance.post(`verify/otp/`, {
            code
        })
    }
}