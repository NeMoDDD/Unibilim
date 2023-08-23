import {loginApi} from "../Api/login-api";
import {professorsApi} from "../Api/professors-api";

const SET_ROLE = "SET_ROLE"
const SET_TOKEN = "SET_TOKEN"
const SET_USERNAME = "SET_USERNAME"
const SET_PASSWORD = "SET_PASSWORD"
const SET_USER_DATA = "SET_USER_DATA"
const LOGOUT = "LOGOUT"
const SET_IS_FETCHING = "SET_IS_FETCHING"

let initialState = {
    userRole: null,
    token: null,
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
    isFetching: false
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

export const login = (username, password) => {
    return async (dispatch) => {
        try {
            dispatch(setFetching(true));
            let data = await loginApi.login(username, password);
            console.log(data);

            if (data.status === 200) {
                dispatch(setUserRole(data.data.role));
                dispatch(setUserToken(data.data.token));

                const userData = { username, password };
                const userDataJSON = JSON.stringify(userData);
                localStorage.setItem('user_unibilim', userDataJSON);
            }

            if (data.data.role === 'professor') {
                let profData = await professorsApi.getProfessorsCabinet(data.data.token);
                dispatch(setUserData(profData));
                console.log(profData);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            dispatch(setFetching(false));
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        localStorage.removeItem('user_unibilim');
        dispatch(logoutAC())
    }
}
export default LoginReducer;