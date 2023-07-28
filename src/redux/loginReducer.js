import {loginApi} from "../Api/login-api";

const SET_ROLE = "SET_ROLE"
const SET_TOKEN = "SET_TOKEN"
const SET_USERNAME = "SET_USERNAME"
const SET_PASSWORD = "SET_PASSWORD"

let initialState = {
    userRole: null,
    token: null,
    userName: null,
    password: null
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
        default: {
            return {...state}
        }
    }
}
export const setUserRole = (userRole) => ({type: SET_ROLE, userRole})
export const setUserToken = (token) => ({type: SET_TOKEN, token})
export const setUserName = (userName) => ({type: SET_TOKEN, userName})
export const setUserPassword = (password) => ({type: SET_PASSWORD, password})

export const login = (username, password) => {
    return async (dispatch) => {
        let data = await loginApi.login(username, password)
        console.log(data.statusCode)
        if (data.statusCode === 200) {
            dispatch(setUserRole(data.role))
            dispatch(setUserToken(data.token))
            console.log("success")
        }

    }
}
export default LoginReducer;