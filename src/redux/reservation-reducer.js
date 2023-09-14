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
const SET_WEEK_FORWARD = "SET_WEEK_FORWARD"
const SET_PAYMENT_IS_FETCHING = "SET_PAYMENT_IS_FETCHING"

let initialState = {
    oneLessonCost: 150,
    totalCost: 0,
    weekForward: 1,
    reservationLessonsCount: null,
    reservationLessonsData: [],
    holidays: [],
    timetableProfessor: [],
    reservationTableIsFetching: false,
    paymentIsFetching: false,
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
        case SET_WEEK_FORWARD:
            return {
                ...state,
                weekForward: action.weekForward
            }
        case SET_PAYMENT_IS_FETCHING:
            return {
                ...state,
                paymentIsFetching: action.paymentIsFetching
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
export const setWeekForward = (weekForward) => ({type: SET_WEEK_FORWARD, weekForward})
export const setPaymentIsFetching = (paymentIsFetching) => ({type: SET_PAYMENT_IS_FETCHING, paymentIsFetching})

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
        try {
            console.log(time_slots)
            dispatch(setPaymentIsFetching(true))
            let data = await reservationApi.initPayment(professor_id, time_slots, amount, service, token)
            console.log(data)
        } catch (error) {

        } finally {
            dispatch(setPaymentIsFetching(false))
        }
    }
}

export default ReservationReducer;