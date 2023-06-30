const SET_INPUT_DISABLED = "SET_INPUT_DISABLED"
const SET_NAME = "SET_NAME"
const SET_SURNAME = "SET_SURNAME"
const SET_BIRTHDAY = "SET_BIRTHDAY"
const SET_EMAIL = "SET_EMAIL"
const SET_PHONE = "SET_EMAIL"
const SET_LOCATION = "SET_LOCATION"
const SET_CITY = "SET_CITY"
const SET_REGION = "SET_REGION"
const SET_DISTRICT = "SET_DISTRICT"


let initialState = {
    isInputDisabled: true,
    name: null,
    surname: null,
    dayOfBirthday: null,
    email: null,
    phone: null,
    location: null,
    city: null,
    region: null,
    district: null
}

const MyCabReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT_DISABLED:
            return {
                ...state,
                isInputDisabled: action.isInputDisabled
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
        case SET_BIRTHDAY:
            return {
                ...state,
                dayOfBirthday: action.dayOfBirthday
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.email
            }
        case SET_PHONE:
            return {
                ...state,
                phone: action.phone
            }
        case SET_LOCATION:
            return {
                ...state,
                location: action.location
            }
        case SET_CITY:
            return {
                ...state,
                city: action.city
            }
        case SET_REGION:
            return {
                ...state,
                region: action.region
            }
        case SET_DISTRICT:
            return {
                ...state,
                district: action.district
            }
        default: {
            return {...state}
        }
    }
}

export const setInputDisabled = (isInputDisabled) => ({type: SET_INPUT_DISABLED, isInputDisabled})
export const setName = (name) => ({type: SET_NAME, name})
export const setSurname = (surname) => ({type: SET_SURNAME, surname})
export const setBirthday = (dayOfBirthday) => ({type: SET_BIRTHDAY, dayOfBirthday})
export const setEmail = (email) => ({type: SET_EMAIL, email})
export const setPhone = (phone) => ({type: SET_PHONE, phone})
export const setLocation = (location) => ({type: SET_LOCATION, location})
export const setCity = (city) => ({type: SET_CITY, city})
export const setRegion = (region) => ({type: SET_REGION, region})
export const setDistrict = (district) => ({type: SET_DISTRICT, district})


export default MyCabReducer;