import {instance} from "./api";

export const holidaysApi = {
    getHolidays() {
        return instance.get(`holidays/`)
    }
}