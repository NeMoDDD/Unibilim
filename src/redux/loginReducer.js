import {loginApi} from "../Api/login-api";
import {professorsApi} from "../Api/professors-api";
import {deleteTimetable} from "./timetableReducer";

const SET_ROLE = "SET_ROLE"
const SET_TOKEN = "SET_TOKEN"
const SET_USERNAME = "SET_USERNAME"
const SET_PASSWORD = "SET_PASSWORD"
const SET_USER_DATA = "SET_USER_DATA"
const LOGOUT = "LOGOUT"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_USER_ID = "SET_USER_ID"
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR"
let initialState = {
    userRole: null,
    token: null,
    userId: null,
    id: null,
    userName: null,
    password: null,
    firstName: null,
    surname: null,
    patronym: null,
    subject: [],
    info: null,
    photo: null,
    tg_username: null,
    phone: null,
    rate: null,
    price: "",
    language: null,
    experience: null,
    classes: [],
    isFetching: false,
    loginError: false,
    isError: false
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROLE:
            return {
                ...state,
                userRole: action.userRole
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case SET_USERNAME:
            return {
                ...state,
                userName: action.userName
            }
        case SET_PASSWORD:
            return {
                ...state,
                password: action.password
            }
        case SET_USER_DATA:
            return {
                ...state,
                classes: action.data.classes,
                experience: action.data.experience,
                firstName: action.data.firstName,
                surname: action.data.surname,
                patronym: action.data.patronym,
                subject: action.data.subject,
                info: action.data.info,
                photo: action.data.photo,
                tg_username: action.data.tg_username,
                phone: action.data.phone,
                rate: action.data.rate,
                price: action.data.price,
                language: action.data.language,
                id: action.data.id
            };
        case LOGOUT:
            return {
                ...state,
                userRole: null,
                token: null,
                userName: null,
                password: null,
                firstName: null,
                surname: null,
                patronym: null,
                subject: [],
                info: null,
                photo: null,
                tg_username: null,
                phone: null,
                rate: null,
                price: null,
                language: null,
                experience: null,
                classes: []
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_USER_ID:
            return {
                ...state,
                userId: action.userId
            }
        case SET_LOGIN_ERROR:
            return {
                ...state,
                loginError: action.loginError
            }
        default: {
            return {...state}
        }
    }
}
export const setUserRole = (userRole) => ({type: SET_ROLE, userRole})
export const setUserToken = (token) => ({type: SET_TOKEN, token})
export const setUserName = (userName) => ({type: SET_USERNAME, userName})
export const setUserPassword = (password) => ({type: SET_PASSWORD, password})

export const setUserData = (data) => ({type: SET_USER_DATA, ...data});
export const logoutAC = () => ({type: LOGOUT});
export const setFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setStudentId = (userId) => ({type: SET_USER_ID, userId})
export const setLoginError = (loginError) => ({type: SET_LOGIN_ERROR, loginError})

export const login = (username, password, remeberMe) => {
    return async (dispatch) => {
        try {
            dispatch(setFetching(true));
            let data = await loginApi.login(username, password)  
            console.log(remeberMe);
            dispatch(setStudentId(data.data.id))

            if (data.status === 200) {
                dispatch(setUserRole(data.data.role));
                dispatch(setUserToken(data.data.token));
                if(remeberMe){ 
                    const userData = { username, password };
                    const userDataJSON = JSON.stringify(userData);
                    localStorage.setItem('user_unibilim', userDataJSON);
                }
            }

            if (data.data.role === 'professor') {
                let profData = await professorsApi.getProfessorsCabinet(data.data.token);
                console.log(profData)

                dispatch(setUserData(profData));
            }
        } catch (error) {  
            dispatch(setFetching(false));
            dispatch(setLoginError(true))

        } finally {
            dispatch(setFetching(false));
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        localStorage.removeItem('user_unibilim');
        dispatch(deleteTimetable())
        dispatch(logoutAC())
    }
}
export default LoginReducer;