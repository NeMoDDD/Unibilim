import { instance } from "./api"; 

export const meetingsApi = { 
    getAllMeetings(token) {
        console.log(1)
        //Получаем все Встречи
        return instance.get(`meetings/`, token)
    }, 
    getDefineMeeting(meetingId){ 
        //Получаем определенную Встречу
        return instance.get(`meetings/${meetingId}/`)
    }, 

    createMeeting() {  
        //Создаем встречу
        return instance.post(`meetings/`)
    }, 

    updateDefineMeeting(meetingId, meetingData){ 
        //Обновляем определенную встречу 
        return instance.put(`meetings/${meetingId}/`, meetingData)
    }, 
    updatePartialDefineMeeting(meetingId, meetingData){ 
        //Частично обновляем определенную встречу 
        return instance.patch(`meetings/${meetingId}/`, meetingData)
    },  

    deleteDefineMeeting(meetingId){  
        //Удаляем конкретную встречу
        return instance.delete(`meetings/${meetingId}/`)
    }
}