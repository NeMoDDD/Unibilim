import {registerApi} from "../Api/register-api";

let initialState = {

}

const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return {...state}
        }
    }
}
export const registerNewStudent = (username, password, password2, phone_numbers, telegram_username, date_of_birth, region, city, district_city) => {
    return async (dispatch) => {
        console.log(1)
        let data = await registerApi.regNewStudent(username, password, password2, phone_numbers, telegram_username, date_of_birth, region, city, district_city)
        console.log(data)
    }
}

export default RegisterReducer;