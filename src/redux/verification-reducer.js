import {verificationApi} from "../Api/verification-api";

const SET_IS_AUTH = "SET_IS_AUTH"

let initialState = {
    isAuth: false
}


const VerificationReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default: {
            return {...state}
        }
    }
}
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth})
export const userVerification = (code) => {
    return async (dispatch) => {
        let data = await verificationApi.userVerification(code)
        console.log(data)
        if (data.status === 201) {
            dispatch(setIsAuth(true))
        }
    }
}

export default VerificationReducer