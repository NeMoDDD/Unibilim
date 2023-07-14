import {instance} from "./api";

export const professorsApi = {
    //Все GET запросы!!!
    getAllProfessors() { 
        //Получаем всех Профессоров
        return instance.get(`professors/`)
    },  
    getDefineProfessor(id){ 
        //Получаем определенного Профессора 
        return instance.get(`professors/${id}/`)
    } ,
    getDefineTimeTableProfessor(id){ 
        //Получаем ВСЕ РАСПИСАНИЯ определенного Профессора
        return instance.get(`/professors/${id}/timetable/`)
    }, 
    getDefineTimeTable(professorId, timetableId){  
        //Получаем КОНКРЕТНОЕ расписание определенного Профессора
        return instance.get(`/professors/${professorId}/timetable/${timetableId}/`)
    }, 
    
    // Все POST запросы!!! 
    createNewProfessor(professorData) { 
        //Создаем нового Профессора 
        return instance.post(`professors/`, professorData)
    }, 
    createNewTimeTable(professorId,timetableData) { 
        //Создаем расписание для определенного Профессора 
        return instance.post(`professors/${professorId}/timetable/`, timetableData)
    }, 

    //Все PUT запросы 
    updateDefineProfessor(professorId, professorData) {  
        //Обновляем данные Определенного Профессора
        return instance.put(`professors/${professorId}/`, professorData)
    },
    updateDefineProfessorTimeTable(professorId, timetableId,timetableData) {  
        //Обновляем данные Расписание определенного Профессора
        return instance.put(`professors/${professorId}/timetable/${timetableId}/`, timetableData)
    }, 

    //Все PATCH запросы 
    updatePartialDefineProfessor(professorId, professorData){ 
        //Частично обновляем данные определенного Профессора
        return instance.patch(`professors/${professorId}/`, professorData)
    } ,
    updatePartialDefineTimeTable(professorId,timetableId, timetableData){ 
        //Частично обновляем определенное расписание 
        return instance.patch(`professors/${professorId}/timetable/${timetableId}/`, timetableData)
    },  

    //Все DELETE запросы 
    deleteDefineProfessor(professorId){ 
        //Удаляем определенного Профессора 
        return instance.delete(`professors/${professorId}/`)
    }, 
    deleteDefineTimeTable(professorId, timetableId){ 
        //Удаляем опрделенное расписание 
        return instance.delete(`/professors/${professorId}}/timetable/${timetableId}/`)
    }


}