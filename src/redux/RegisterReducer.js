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
export const registerNewStudent = (nick, name, surname, patronym, password, password2, phone_numbers, telegram_username, date_of_birth, region, city, district_city, photo) => {
    return async (dispatch) => {
        let data = await registerApi.regNewStudent(nick, name, surname, patronym, password, password2, phone_numbers, telegram_username, date_of_birth, region, city, district_city, photo)
        console.log(data)
    }
}

export default RegisterReducer;