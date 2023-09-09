import {professorsApi} from "../Api/professors-api";
import {meetingsApi} from "../Api/meetings-api";
import moment from "moment/moment";


const SET_PROFESSORS = "SET_PROFESSORS"
const SET_DEFINE_PROFESSOR = "SET_DEFINE_PROFESSORS"
const TOGGLE__FETCH__PROFFESSOR_PAGE = 'TOGGLE__FETCH__PROFFESSOR_PAGE'
const SET_LANGUAGE_PROFFESSOR_FILTER = 'SET_LANGUAGE_PROFFESSOR_FILTER'
const SET_FILTER_PROFFESSORS = 'SET_FILTER_PROFFESSORS'

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
const SET_IF_FETCHING_TEACHER_TIMETABLE = "SET_IF_FETCHING_TEACHER_TIMETABLE"

let initialState = {
    professors: [],
    defineProfessor: {},
    languageFilter: [],
    subjectFilter: ["Русский язык", "Английский язык", "Физика", "История",  "Математика"],
    classFilter: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    isFetching: false,

    timetable: {
        allDate: [],
        dayOfWeek: [],
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: [],
        isFetchingTeacherTimetable: false
    },
}


const ProfessorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFESSORS:
            return {
                ...state,
                professors: action.professors
            }
        case SET_DEFINE_PROFESSOR:
            return {
                ...state,
                defineProfessor: action.defineProfessor
            }
        case TOGGLE__FETCH__PROFFESSOR_PAGE: {
            return {
                ...state,
                isFetching: action.toggle
            }
        }
        case SET_LANGUAGE_PROFFESSOR_FILTER: {
            return {
                ...state,
                languageFilter: action.filtered
            }
        }
        case SET_FILTER_PROFFESSORS: {
            return {
                ...state,
                professors: state.professors.filter((item) => item.language === action.language)
            }
        }

        // РАСПИСАНИЕ УЧИТЕЛЯ
        case SET_NEW_TIMETABLE_DATA:
            return {
                ...state,
                timetable: {
                    ...state.timetable,
                    allDate: action.allDate,
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
            if (!state.timetable.monday.some(item => item.datetime === action.data.datetime)) {
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
                    allDate: action.data
                }
            }
        case SET_DAY_OF_WEEK:
            return {
                ...state,
                timetable: {
                    ...state.timetable,
                    dayOfWeek: action.data
                }
            }
        case SET_IF_FETCHING_TEACHER_TIMETABLE:
            return {
                ...state,
                isFetchingTeacherTimetable: action.isFetchingTeacherTimetable
            }
        default: {
            return {...state}
        }
    }
}
export const setProfessors = (professors) => ({type: SET_PROFESSORS, professors})
export const setDefineProfessor = (defineProfessor) => ({type: SET_DEFINE_PROFESSOR, defineProfessor})
export const toggleProfessorFetchAC = (toggle) => ({type: TOGGLE__FETCH__PROFFESSOR_PAGE, toggle})
export const setFilteredProfessorsByLanguageAC = (filtered) => ({type: SET_LANGUAGE_PROFFESSOR_FILTER, filtered})

// РАСПИСАНИЕ УЧИТЕЛЯ
export const setNewTimetableTeacher = (allDate, dayOfWeek) => ({type: SET_NEW_TIMETABLE_DATA, allDate, dayOfWeek})
export const setMondayTeacher = (data) => ({type: SET_MONDAY, data})
const setTuesdayTeacher = (data) => ({type: SET_TUESDAY, data})
const setWednesdayTeacher = (data) => ({type: SET_WEDNESDAY, data})
const setThursdayTeacher = (data) => ({type: SET_THURSDAY, data})
export const setFridayTeacher = (data) => ({type: SET_FRIDAY, data})
const setSaturdayTeacher = (data) => ({type: SET_SATURDAY, data})
const setSundayTeacher = (data) => ({type: SET_SUNDAY, data})
export const setAllDateTeacher = (data) => ({type: SET_ALL_DATE, data})
export const setDayOfWeekTeacher = (data) => ({type: SET_DAY_OF_WEEK, data})
export const setIsFetchingTeacher = (isFetchingTeacherTimetable) => ({
    type: SET_IF_FETCHING_TEACHER_TIMETABLE,
    isFetchingTeacherTimetable
})

export const getProfessors = ({token}) => {
    return async (dispatch) => {
        try {
            dispatch(toggleProfessorFetchAC(true))
            const response = await professorsApi.getAllProfessors(token)
            console.log(response)
            if (response.status === 200) {
                const professors = response.data
                // Языки
                const uniqueLanguages = new Set();
                professors.forEach(teacher => {
                    uniqueLanguages.add(teacher.language);
                });
                const uniqueLanguagesArray = Array.from(uniqueLanguages)

                dispatch(setFilteredProfessorsByLanguageAC(uniqueLanguagesArray))

                dispatch(setProfessors(response.data))
            }
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(toggleProfessorFetchAC(false))
        }
    }
}

export const getDefineProfessor = (id, token) => {
    return async (dispatch) => {
        try {
            const response = await professorsApi.getDefineProfessor(id, token)
            dispatch(setDefineProfessor(response.data))
        } catch (error) {
            console.log(error)
        } finally {
        }
    }
}

export const getProfessorTimetable = (token) => {
    return async (dispatch) => {
        const data = await meetingsApi.getAllMeetings(token)
        console.log(data)
        dispatch(setIsFetchingTeacher(true))

        data.data.map((m) => {
            if (m.day_of_week === "Monday") {
                dispatch(setMondayTeacher(m))
            } else if (m.day_of_week === "Tuesday") {
                dispatch(setTuesdayTeacher(m))
            } else if (m.day_of_week === "Wednesday") {
                dispatch(setWednesdayTeacher(m))
            } else if (m.day_of_week === "Thursday") {
                dispatch(setThursdayTeacher(m))
            } else if (m.day_of_week === "Friday") {
                dispatch(setFridayTeacher(m))
            } else if (m.day_of_week === "Saturday") {
                dispatch(setSaturdayTeacher(m))
            } else if (m.day_of_week === "Sunday") {
                dispatch(setSundayTeacher(m))
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
        console.log(allDates)
        dispatch(setAllDateTeacher(allDates));
        dispatch(setDayOfWeekTeacher(daysOfWeek))

        dispatch(setIsFetchingTeacher(false))
    }
}
export default ProfessorsReducer