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
    getDefineStudentMeetings(token, student_id) {
        //Получаем встречи определенного студента
        return instance.get(`meetings/?student_id=${student_id}`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
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