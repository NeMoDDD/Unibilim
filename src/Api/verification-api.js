import {instance} from "./api";

export const verificationApi = {
    //Все POST запросы!!!
    // Верификация пользователя
    userVerification(token, code) {
        return instance.post(`verify/otp/`, {
            token, code
        })
    }
}