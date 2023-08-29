import {instance} from "./api";

export const reservationApi = {
    //Все POST запросы!!!
    // Запрос на оплату
    initPayment(professor_id, time_slots, amount, service, token) {
        return instance.post(`init_payment/`, {
            'professor_id': professor_id,
            'time_slots': time_slots,
            'amount': amount,
            'service': service
        }, {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            }
        })
    }
}