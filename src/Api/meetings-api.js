import {instance} from "./api";

export const meetingsApi = {
    getAllMeetings(token) {
        //Получаем все Встречи
        return instance.get(`meetings/`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
    },
    getProfessorMeetingsByStudent(professor_id, token) {
        // Получаем встречи профессора будучи студентом для бронирования
        return instance.get(`meetings/?professor_id=${professor_id}`, {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            }
        })
    },
    getDefineMeeting(meetingId) {
        //Получаем определенную Встречу
        return instance.get(`meetings/${meetingId}/`)
    },

    createMeeting() {
        //Создаем встречу
        return instance.post(`meetings/`)
    },

    updateDefineMeeting(meetingId, meetingData) {
        //Обновляем определенную встречу 
        return instance.put(`meetings/${meetingId}/`, meetingData)
    },
    updatePartialDefineMeeting(meetingId, meetingData) {
        //Частично обновляем определенную встречу 
        return instance.patch(`meetings/${meetingId}/`, meetingData)
    },

    deleteDefineMeeting(meetingId) {
        //Удаляем конкретную встречу
        return instance.delete(`meetings/${meetingId}/`)
    }
}