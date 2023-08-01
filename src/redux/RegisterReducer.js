import {registerApi} from "../Api/register-api";

const SET_NICK = "SET_NICK"
const SET_NAME = "SET_NAME"
const SET_SURNAME = "SET_SURNAME"
const SET_PATRONYM = "SET_PATRONYM"
const SET_PHONE = "SET_PHONE"
const SET_PASSWORD = "SET_PASSWORD"
const SET_CHECK_PASSWORD = "SET_CHECK_PASSWORD"
const SET_TG_NAME = "SET_TG_NAME"
const SET_DATE_OF_BIRTH = "SET_DATE_OF_BIRTH"
const SET_REGION = "SET_REGION"
const SET_DISTRICT_CITY = "SET_DISTRICT_CITY"
const SET_CITY = "SET_CITY"
const SET_SELECTED_PHOTO = "SET_CITY"

let initialState = {
    nick: null,
    name: null,
    surname: null,
    patronym: null,
    phone: null,
    password: null,
    checkPassword: null,
    tgName: null,
    dateOfBirth: null,
    region: null,
    districtCity: null,
    city: null,
    selectedPhoto: null,
}

const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NICK:
            return {
                ...state,
                nick: action.nick
            }
        case SET_NAME:
            return {
                ...state,
                name: action.name
            }
        case SET_SURNAME:
            return {
                ...state,
                surname: action.surname
            }
        case SET_PATRONYM:
            return {
                ...state,
                patronym: action.patronym
            }
        case SET_PHONE:
            return {
                ...state,
                phone: action.phone
            }
        case SET_PASSWORD:
            return {
                ...state,
                password: action.password
            }
        case SET_CHECK_PASSWORD:
            return {
                ...state,
                checkPassword: action.checkPassword
            }
        case SET_TG_NAME:
            return {
                ...state,
                tgName: action.tgName
            }
        case SET_DATE_OF_BIRTH:
            return {
                ...state,
                dateOfBirth: action.dateOfBirth
            }
        case SET_REGION:
            return {
                ...state,
                region: action.region
            }
        case SET_DISTRICT_CITY:
            return {
                ...state,
                districtCity: action.districtCity
            }
        case SET_CITY:
            return {
                ...state,
                city: action.city
            }
        case SET_SELECTED_PHOTO:
            return {
                ...state,
                selectedPhoto: action.selectedPhoto
            }


        default: {
            return {...state}
        }
    }
}

export const setNick = (nick) => ({type: SET_NICK, nick})
export const setName = (name) => ({type: SET_NAME, name})
export const setSurname = (surname) => ({type: SET_SURNAME, surname})
export const setPatronym = (patronym) => ({type: SET_PATRONYM, patronym})
export const setPhone = (phone) => ({type: SET_PHONE, phone})
export const setPassword = (password) => ({type: SET_PASSWORD, password})
export const setCheckPassword = (checkPassword) => ({type: SET_CHECK_PASSWORD, checkPassword})
export const setTgName = (tgName) => ({type: SET_TG_NAME, tgName})
export const setBirthday = (dateOfBirth) => ({type: SET_DATE_OF_BIRTH, dateOfBirth})
export const setRegion = (region) => ({type: SET_REGION, region})
export const setDistrictCity = (districtCity) => ({type: SET_DISTRICT_CITY, districtCity})
export const setCity = (city) => ({type: SET_CITY, city})
export const setSelectedPhoto = (selectedPhoto) => ({type: SET_SELECTED_PHOTO, selectedPhoto})

export const registerNewStudent = (nick, name, surname, patronym, password, password2, phone_numbers, telegram_username, date_of_birth, region, district_city, city, photo) => {
    return async (dispatch) => {
        console.log(nick, name, surname, patronym, password, password2, phone_numbers, telegram_username, date_of_birth, region, district_city, city, photo)
        let data = await registerApi.regNewStudent(nick, name, surname, patronym, password, password2, phone_numbers, telegram_username, date_of_birth, region, district_city, city, photo)
        console.log(data)
    }
}

export default RegisterReducer;