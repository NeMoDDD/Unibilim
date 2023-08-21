import tech1 from '../assets/img/teach1.png'
import tech2 from '../assets/img/teach2.png'
import tech3 from '../assets/img/teach3.png'
import tech4 from '../assets/img/teach4.png'
import tech5 from '../assets/img/tech5.png'
import tech6 from '../assets/img/tech6.png'
import tech7 from '../assets/img/tech7.png'
import {meetingsApi} from "../Api/meetings-api";
import {verificationApi} from "../Api/verification-api";
import {setIsAuth} from "./verification-reducer";
import {loginApi} from "../Api/login-api";
import {setUserRole, setUserToken} from "./loginReducer";
import moment from "moment";
import "moment/locale/ru";

const SET_NEW_TIMETABLE_DATA = 'SET_NEW_TIMETABLE_DATA'
const SET_NEW_TIMETABLE_TEACHER = 'SET_NEW_TIMETABLE_TEACHER'
const SET_MONDAY = "SET_MONDAY"
const SET_TUESDAY = "SET_TUESDAY"
const SET_WEDNESDAY = "SET_WEDNESDAY"
const SET_THURSDAY = "SET_THURSDAY"
const SET_FRIDAY = "SET_FRIDAY"
const SET_SATURDAY = "SET_SATURDAY"
const SET_SUNDAY = "SET_SUNDAY"
const SET_ALL_TIMETABLE = "SET_MONDAY"
const SET_ALL_DATE = "SET_ALL_DATE"
const SET_DAY_OF_WEEK = "SET_DAY_OF_WEEK"
const SET_IF_FETCHING = "SET_IF_FETCHING"

let initialState = {
    timetable: {
        id: 2,
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
                timetable: action.data
            }
        case SET_NEW_TIMETABLE_TEACHER:
            return {...state, currentTeacher: action.data}
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
        case SET_ALL_TIMETABLE:
            return {
                ...state,
                allTimetable: action.data
            }
        case SET_ALL_DATE:
            return {
                ...state,
                timetable: {
                    ...state.timetable,
                    alldate: action.data
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
        case SET_IF_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return {
                ...state
            }
    }
}

export const setNewTimetableAC = (data) => ({type: SET_NEW_TIMETABLE_DATA, data})
const getCurrentTeacherAC = (data) => ({type: SET_NEW_TIMETABLE_TEACHER, data})
export const setMonday = (data) => ({type: SET_MONDAY, data})
const setTuesday = (data) => ({type: SET_TUESDAY, data})
const setWednesday = (data) => ({type: SET_WEDNESDAY, data})
const setThursday = (data) => ({type: SET_THURSDAY, data})
export const setFriday = (data) => ({type: SET_FRIDAY, data})
const setSaturday = (data) => ({type: SET_SATURDAY, data})
const setSunday = (data) => ({type: SET_SUNDAY, data})
const setAllTimetable = (data) => ({type: SET_ALL_TIMETABLE, data})
export const setAllDate = (data) => ({type: SET_ALL_DATE, data})
export const setDayOfWeek = (data) => ({type: SET_DAY_OF_WEEK, data})
export const setIsFetching = (isFetching) => ({type: SET_IF_FETCHING, isFetching})

export const setCurrentTeacherTC = (name) => (dispatch) => {
    const user = teacherInfo.find(obj => obj.name === name);
    return dispatch(getCurrentTeacherAC(user))
}
export const getTimetable = (token) => {
    return async (dispatch) => {
        const data = await meetingsApi.getAllMeetings(token)
        dispatch(setIsFetching(true))
        console.log(data)

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
        const currentDayOfWeek = currentDate.day(); // 0 - воскресенье, 1 - понедельник, ..., 6 - суббота
        const daysInWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

        const allDates = [];
        const daysOfWeek = [];

        // Находим предыдущий понедельник
        const daysSinceLastMonday = (currentDayOfWeek + 6) % 7;
        const lastMonday = currentDate.clone().subtract(daysSinceLastMonday, 'days');

        for (let i = 0; i < 7; i++) {
            const date = lastMonday.clone().add(i, 'days');

            const formattedDate = date.format('DD MMM').slice(0, -1);
            allDates.push(formattedDate);

            daysOfWeek.push(daysInWeek[date.day()]);
        }
        console.log(allDates)
        dispatch(setAllDate(allDates));
        dispatch(setDayOfWeek(daysOfWeek))

        dispatch(setIsFetching(false))
    }
}

const teacherInfo = [
    {
        name: 'Зуева Ольга',
        title: 'Преподаватель старших классов по математике СШГ №43. Более 9 лет обучает детей высшей математике. Имеет ряд наград за участие в развитии математики как науки.',
        subj: 'Математика',
        photo: tech6
    },
    {
        name: 'Ольга Петровна',
        title: 'Преподаватель старших классов по химии СШГ №143. Более 19 лет обучает детей химии. Имеет ряд наград за участие в развитии химии как науки.',
        subj: 'Химия',
        photo: tech4
    },
    {
        name: 'Сергей Павлович',
        title: 'Преподаватель старших классов по физике СШГ №103. Более 5 лет обучает детей физике. Имеет ряд наград за участие в развитии физики как науки.',
        subj: 'Физика',
        photo: tech1
    },
    {
        name: 'Борис Николаевич',
        title: 'Преподаватель старших классов по русскому языку СШГ №58. Более 11 лет обучает детей русскому языку. Имеет ряд наград за участие в развитии русского языка.',
        subj: 'Русский язык',
        photo: tech2
    },
    {
        name: 'Георгий Константинович',
        title: 'Преподаватель старших классов по истории СШГ №3. Более 17 лет обучает детей истории. Имеет ряд наград за участие в развитии истории.',
        subj: 'История',
        photo: tech3
    },
    {
        name: 'Галина Сергеевна',
        title: 'Преподаватель старших классов по биологии СШГ №36. Более 5 лет обучает детей биологии. Имеет ряд наград за участие в развитии биологии как науки.',
        subj: 'Биология',
        photo: tech7
    },
    {
        name: 'Татьяна Петровна',
        title: 'Преподаватель старших классов по английскому языку СШГ №6. Более 25 лет обучает детей английскому языку. Имеет ряд наград за участие в развитии английского языка.',
        subj: 'Английский язык',
        photo: tech5
    },
]
export const testData3 = {
    id: 3,
    alldate: ['30 янв', '31 янв', '1 фев', '2 фев', '2 фев', '4 фев', '5 фев'],
    monday: [
        {
            time: "16:00",
            teach: "Татьяна Петровна",
            subj: "Английский язык",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
        },
        {
            time: "19:00",
            teach: "Борис Николаевич",
            subj: "Русский язык",
            backgroundColor: "#FFF1A1",
            btc: "#FFEC7E",
        },
    ],
    tuesday: [
        {
            time: "16:00",
            teach: "Борис Николаевич",
            subj: "Русcкий язык",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
        },
    ],
    wednesday: [
        {
            time: "13:00",
            teach: "Зуева Ольга",
            subj: "Математика",
            backgroundColor: "#FFF1A1",
            btc: "#FFEC7E",
        },
        {
            time: "15:00",
            teach: "Алексей Борисович",
            subj: "Биология",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
        },
        {
            time: "17:00",
            teach: "Георгий Константинович",
            subj: "История",
            backgroundColor: "#CCFFFF",
            btc: "#9fffff",
        },
        {
            time: "19:00",
            teach: "Борис Николаевич",
            subj: "Русский язык",
            backgroundColor: "#FFF1A1",
            btc: "#FFEC7E",
        },
        {
            time: "21:00",
            teach: "Зуева Ольга",
            subj: "Математика",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
        },
    ],
    thursday: [],
    friday: [],
    saturday: [
        {
            time: "19:00",
            teach: "Георгий Константинович",
            subj: "История",
            backgroundColor: "#FFF1A1",
            btc: "#FFEC7E",
        },
    ],
    sunday: [
        {
            time: "12:00",
            teach: "Георгий Константинович",
            subj: "История",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
        },
    ]

}
export const testData1 = {
    id: 1,
    alldate: ['16 янв', '17 янв', '18 янв', '19 янв', '20 янв', '21 янв', '22 янв'],
    monday: [
        {
            time: "16:00",
            teach: "Татьяна Петровна",
            subj: "Английский язык",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
        },
        {
            time: "19:00",
            teach: "Борис Николаевич",
            subj: "Русский язык",
            backgroundColor: "#FFF1A1",
            btc: "#FFEC7E",
        },

    ],
    tuesday: [
        {
            time: "16:00",
            teach: "Борис Николаевич",
            subj: "Русcкий язык",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
        },

    ],
    wednesday: [
        {
            time: "13:00",
            teach: "Зуева Ольга",
            subj: "Математика",
            backgroundColor: "#FFF1A1",
            btc: "#FFEC7E",
        },
        {
            time: "15:00",
            teach: "Алексей Борисович",
            subj: "Биология",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
        },
        {
            time: "17:00",
            teach: "Георгий Константинович",
            subj: "История",
            backgroundColor: "#CCFFFF",
            btc: "#9fffff",
        },

    ],
    thursday: [],
    friday: [
        {
            time: "19:00",
            teach: "Борис Николаевич",
            subj: "Русский язык",
            backgroundColor: "#FFF1A1",
            btc: "#FFEC7E",
        },
        {
            time: "21:00",
            teach: "Зуева Ольга",
            subj: "Математика",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
        },
    ],
    saturday: [
        {
            time: "12:00",
            teach: "Георгий Константинович",
            subj: "История",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
        },
    ],
    sunday: [

        {
            time: "19:00",
            teach: "Георгий Константинович",
            subj: "История",
            backgroundColor: "#FFF1A1",
            btc: "#FFEC7E",
        },
    ]

}
export const testData2 = {
    id: 2,
    alldate: ['23 янв', '24 янв', '25 янв', '26 янв', '27 янв', '28 янв', '29 янв'],
    monday: [
        {
            time: "15:00",
            teach: "Зуева Ольга",
            subj: "Математика",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
        },
        {
            time: "19:00",
            teach: "Ольга Петровна",
            subj: "Химия",
            backgroundColor: "#FFF1A1",
            btc: "#FFEC7E",
        },
    ],
    tuesday: [
        {
            time: "16:00",
            teach: "Борис Николаевич",
            subj: "Русcкий язык",
            backgroundColor: "#CCFFFF",
            btc: "#9fffff",
        },
        {
            time: "19:00",
            teach: "Сергей Павлович",
            subj: "Физика",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
        }
    ],
    wednesday: [
        {
            time: "15:00",
            teach: "Зуева Ольга",
            subj: "Математика",
            backgroundColor: "#FFF1A1",
            btc: "#FFEC7E",
        },
    ],
    thursday: [
        {
            time: "19:00",
            teach: "Ольга Петровна",
            subj: "Химия",
            backgroundColor: "#CCFFFF",
            btc: "#9fffff",
        },
    ],
    friday: [],
    saturday: [
        {
            time: "15:00",
            teach: "Георгий Константинович",
            subj: "История",
            backgroundColor: "#FFF1A1",
            btc: "#FFEC7E",
        },
    ],
    sunday: [
        {
            time: "12:00",
            teach: "Сергей Павлович",
            subj: "Физика",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
        },
    ]

}