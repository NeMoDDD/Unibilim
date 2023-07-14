import {instance} from "./api";

export const holidaysApi = {
    // Все GET запросы

    // Получаем все выходные
    getHolidays() {
        return instance.get(`holidays/`)
    },
    // Получаем определенный выходной
    getDefineHoliday(holidayId) {
        return instance.get(`holidays/${holidayId}/`)
    },

    // Все POST запросы

    // Создаем новый выходной
    createHoliday(holidayData) {
        return instance.post(`holidays/`, holidayData)
    },

    // Все PUT запросы

    // Обновляем определенный выходной
    updateDefineHoliday(holidayId, holidayData) {
        return instance.put(`holidays/${holidayId}`, holidayData)
    },

    // Все PATCH запросы

    // Частично обновляем определенный выходной
    updatePartialDefineHoliday(holidayId, holidayData) {
        return instance.patch(`holidays/${holidayId}`, holidayData)
    },

    // Все DELETE запросы

    // Удаляем определенный выходной
    deleteDefineHoliday(holidayId) {
        return instance.delete(`holidays/${holidayId}`)
    }
}