import {instance} from "./api";

export const meetingsApi = {
    getAllMeetings(token) {
        //Получаем встречи всех профессоров
        return instance.get(`meetings/`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
    },
    getProfessorMeetingsByStudent(professor_id, token) {
        // Получаем встречи профессора
        return instance.get(`meetings/?professor_id=${professor_id}`, {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            }
        })
    },
    getDefineStudentMeetings(token, userId) {
        //Получаем встречи определенного студента
        return instance.get(`meetings/?student_id=${userId}`, {
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