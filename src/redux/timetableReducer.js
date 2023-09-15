import {meetingsApi} from "../Api/meetings-api";
import moment from "moment";
import "moment/locale/ru";

const SET_NEW_TIMETABLE_DATA = 'SET_NEW_TIMETABLE_DATA'
const SET_MONDAY = "SET_MONDAY"
const SET_TUESDAY = "SET_TUESDAY"
const SET_WEDNESDAY = "SET_WEDNESDAY"
const SET_THURSDAY = "SET_THURSDAY"
const SET_FRIDAY = "SET_FRIDAY"
const SET_SATURDAY = "SET_SATURDAY"
const SET_SUNDAY = "SET_SUNDAY"
const SET_ALL_DATE = "SET_ALL_DATE"
const SET_DAY_OF_WEEK = "SET_DAY_OF_WEEK"
const SET_IF_FETCHING = "SET_IF_FETCHING"
const SET_ALL_TIMETABLE = "SET_ALL_TIMETABLE"
const DELETE_TIMETABLE = "DELETE_TIMETABLE"


let initialState = {
    timetable: {
        alldate: [],
        dayOfWeek: [],
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: []
    },
    currentTeacher: [],
    allTimetable: {},
    isFetching: true
}

export const timetableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_TIMETABLE_DATA:
            return {
                ...state,
                timetable: {
                    ...state.timetable,
                    alldate: action.alldate,
                    dayOfWeek: action.dayOfWeek
                }
            }
        case SET_MONDAY:
            if (!state.timetable.monday.some(item => item.datetime === action.data.datetime)) {
                return {
                    ...state,
                    timetable: {
                        ...state.timetable,
                        monday: [...state.timetable.monday, action.data]
                    }
                };
            } else {
                return state;
            }
        case SET_TUESDAY:
            if (!state.timetable.tuesday.some(item => item.datetime === action.data.datetime)) {
                return {
                    ...state,
                    timetable: {
                        ...state.timetable,
                        tuesday: [...state.timetable.tuesday, action.data]
                    }
                }
            } else {
                return state
            }
        case SET_WEDNESDAY:
            if (!state.timetable.wednesday.some(item => item.datetime === action.data.datetime)) {
                return {
                    ...state,
                    timetable: {
                        ...state.timetable,
                        wednesday: [...state.timetable.wednesday, action.data]
                    }
                }
            } else {
                return state
            }
        case SET_THURSDAY:
            if (!state.timetable.thursday.some(item => item.datetime === action.data.datetime)) {
                return {
                    ...state,
                    timetable: {
                        ...state.timetable,
                        thursday: [...state.timetable.thursday, action.data]
                    }
                }
            } else {
                return state
            }
        case SET_FRIDAY:
            if (!state.timetable.friday.some(item => item.datetime === action.data.datetime)) {
                return {
                    ...state,
                    timetable: {
                        ...state.timetable,
                        friday: [...state.timetable.friday, action.data]
                    }
                }
            } else {
                return state
            }
        case SET_SATURDAY:
            if (!state.timetable.saturday.some(item => item.datetime === action.data.datetime)) {
                return {
                    ...state,
                    timetable: {
                        ...state.timetable,
                        saturday: [...state.timetable.saturday, action.data]
                    }
                }
            } else {
                return state
            }
        case SET_SUNDAY:
            if (!state.timetable.sunday.some(item => item.datetime === action.data.datetime)) {
                return {
                    ...state,
                    timetable: {
                        ...state.timetable,
                        sunday: [...state.timetable.sunday, action.data]
                    }
                }
            } else {
                return state
            }
        case SET_ALL_DATE:
            return {
                ...state,
                timetable: {
                    ...state.timetable,
                    alldate: action.data
                }
            }
        case SET_ALL_TIMETABLE:
            return {
                ...state,
                allTimetable: action.allTimetable
            }
        case SET_DAY_OF_WEEK:
            return {
                ...state,
                timetable: {
                    ...state.timetable,
                    dayOfWeek: action.data
                }
            }
        case SET_IF_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case DELETE_TIMETABLE:
            return {
                ...state,
                timetable: {
                    ...state.timetable,
                    monday: [],
                    tuesday: [],
                    wednesday: [],
                    thursday: [],
                    friday: [],
                    sunday: [],
                    saturday: []
                }
            }
        default:
            return {
                ...state
            }
    }
}

export const setNewTimetableAC = (alldate, dayOfWeek) => ({type: SET_NEW_TIMETABLE_DATA, alldate, dayOfWeek})
export const setMonday = (data) => ({type: SET_MONDAY, data})
const setTuesday = (data) => ({type: SET_TUESDAY, data})
const setWednesday = (data) => ({type: SET_WEDNESDAY, data})
const setThursday = (data) => ({type: SET_THURSDAY, data})
export const setFriday = (data) => ({type: SET_FRIDAY, data})
const setSaturday = (data) => ({type: SET_SATURDAY, data})
const setSunday = (data) => ({type: SET_SUNDAY, data})
export const setAllDate = (data) => ({type: SET_ALL_DATE, data})
export const setAllTimetable = (allTimetable) => ({type: SET_ALL_TIMETABLE, allTimetable})
export const setDayOfWeek = (data) => ({type: SET_DAY_OF_WEEK, data})
export const setIsFetching = (isFetching) => ({type: SET_IF_FETCHING, isFetching})
export const deleteTimetable = () => ({type: DELETE_TIMETABLE})


export const getTimetable = (token, userId) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))

        const data = await meetingsApi.getDefineStudentMeetings(token, userId)
        dispatch(setAllTimetable(data.data))
        console.log(data.data)
        data.data.map((m) => {
            if (m.day_of_week === "Monday") {
                dispatch(setMonday(m))
            } else if (m.day_of_week === "Tuesday") {
                dispatch(setTuesday(m))
            } else if (m.day_of_week === "Wednesday") {
                dispatch(setWednesday(m))
            } else if (m.day_of_week === "Thursday") {
                dispatch(setThursday(m))
            } else if (m.day_of_week === "Friday") {
                dispatch(setFriday(m))
            } else if (m.day_of_week === "Saturday") {
                dispatch(setSaturday(m))
            } else if (m.day_of_week === "Sunday") {
                dispatch(setSunday(m))
            }
        })
        const currentDate = moment().locale('ru');
        const currentDayOfWeek = currentDate.day();
        const daysInWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

        const allDates = [];
        const daysOfWeek = [];

        const daysSinceLastMonday = (currentDayOfWeek + 6) % 7;
        const lastMonday = currentDate.clone().subtract(daysSinceLastMonday, 'days');

        for (let i = 0; i < 7; i++) {
            const date = lastMonday.clone().add(i, 'days');

            const formattedDate = date.format('DD MMM').slice(0, -1);
            allDates.push(formattedDate);

            daysOfWeek.push(daysInWeek[date.day()]);
        }
        dispatch(setAllDate(allDates));
        dispatch(setDayOfWeek(daysOfWeek))

        dispatch(setIsFetching(false))
    }
}
export const getNextTimetable = (currentWeek) => (dispatch) => {
    const nextWeek = [];
    for (let i = 0; i < 7; i++) {
        const nextDate = moment(currentWeek, 'DD MMM').add(i + 1, 'days');
        nextWeek.push(nextDate.format('DD MMM').slice(0, -1))
    }
    dispatch(setAllDate(nextWeek))
}

export const getPrevTimetable = (currentWeek) => (dispatch) => {
    const previousWeek = [];
    for (let i = 6; i >= 0; i--) {
        const previousDate = moment(currentWeek, 'DD MMM').subtract(7 - i, 'days');
        previousWeek.unshift(previousDate.format('DD MMM').slice(0, -1));
    }
    dispatch(setAllDate(previousWeek))
}
