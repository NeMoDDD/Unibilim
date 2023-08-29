import {registerApi} from "../Api/register-api";
import {setFetching, setOtpTokenNikita, setToVerification} from "./RegisterReducer";
import {reservationApi} from "../Api/reservation-api";
import {holidaysApi} from "../Api/holidays-api";
import {professorsApi} from "../Api/professors-api";
import {meetingsApi} from "../Api/meetings-api";

const SET_COUNT_RESERVATION_LESSONS = "SET_COUNT_RESERVATION_LESSONS"
const SET_DATA_RESERVATION_LESSONS = "SET_DATA_RESERVATION_LESSONS"
const INIT_PAYMENT = "INIT_PAYMENT"
const SET_HOLIDAYS = "SET_HOLIDAYS"
const SET_TIMETABLE_PROFESSOR = "SET_TIMETABLE_PROFESSOR"
const SET_RESERVATION_TABLE_IS_FETCHING = "SET_RESERVATION_TABLE_IS_FETCHING"

let initialState = {
    oneLessonCost: 150,
    totalConst: 0,
    reservationLessonsCount: null,
    reservationLessonsData: [],
    holidays: [],
    timetableProfessor: [],
    reservationTableIsFetching: false,
}


const ReservationReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_COUNT_RESERVATION_LESSONS:
            return {
                ...state,
                reservationLessonsCount: action.reservationLessonsCount
            }
        case SET_DATA_RESERVATION_LESSONS:
            return {
                ...state,
                reservationLessonsData: action.reservationLessonsData
            }
        case SET_HOLIDAYS:
            return {
                ...state,
                holidays: action.holidays
            }
        case SET_TIMETABLE_PROFESSOR:
            return {
                ...state,
                timetableProfessor: action.timetableProfessor
            }
        case SET_RESERVATION_TABLE_IS_FETCHING:
            return {
                ...state,
                reservationTableIsFetching: action.reservationTableIsFetching
            }
        default: {
            return {...state}
        }
    }
}

export const setReservationLessonsCount = (reservationLessonsCount) => ({type: SET_COUNT_RESERVATION_LESSONS, reservationLessonsCount})
export const setReservationLessonsData = (reservationLessonsData) => ({type: SET_DATA_RESERVATION_LESSONS, reservationLessonsData})
export const setHolidays = (holidays) => ({type: SET_HOLIDAYS, holidays})
export const setTimetableProfessor = (timetableProfessor) => ({type: SET_TIMETABLE_PROFESSOR, timetableProfessor})
export const setReservationTableIsFetching = (reservationTableIsFetching) => ({type: SET_RESERVATION_TABLE_IS_FETCHING, reservationTableIsFetching})

export const getReservationTable = (professor_id, token) => {
    return async (dispatch) => {
        try {
            dispatch(setReservationTableIsFetching(true))
            let dataHolidays = await holidaysApi.getHolidays(token)
            let dataTimetableProfessor = await meetingsApi.getProfessorMeetingsByStudent(professor_id, token)
            console.log(dataTimetableProfessor.data)
            dispatch(setHolidays(dataHolidays.data))
            dispatch(setTimetableProfessor(dataTimetableProfessor.data))
        } catch (error) {

        } finally {
            dispatch(setReservationTableIsFetching(false))
        }
    }
}
export const initPayment = (professor_id, time_slots, amount, service, token) => {
    return async (dispatch) => {
        let data = await reservationApi.initPayment(professor_id, time_slots, amount, service, token)
        console.log(data)
    }
}

export default ReservationReducer;