import {instance} from "./api";

export const locationApi = {
    //Все GET запросы!!!
    // Получаем все области
    getRegion() {
        return instance.get(`regions/`)
    }
}