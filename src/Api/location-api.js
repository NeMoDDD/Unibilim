import {instance} from "./api";

export const locationApi = {
    //Все GET запросы!!!
    // Получаем все областиs
    getRegion() {
        return instance.get(`regions/`)
    },
    // Получаем районы выбранной области
    getDistricts(id) {
        return instance.get(`regions/${id}/districts/`)
    },
    // Получаем города выбранного района
    getCities(id) {
        return instance.get(`districts/${id}/cities/`)
    }
}