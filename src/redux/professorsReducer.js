import {professorsApi} from "../Api/professors-api";

const SET_PROFESSORS = "SET_PROFESSORS"

let initialState = {
    professors: null
}


const ProfessorsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PROFESSORS:
            return {
                ...state,
                professors: [...state.professors, action.professors]
            }
        default: {
            return {...state}
        }
    }
}
export const setProfessors = (professors) => ({type: SET_PROFESSORS, professors})
export const getProfessors = () => {
    return async (dispatch) => {
        let data = await professorsApi.getAllProfessors()
        console.log(data)

    }
}

export default ProfessorsReducer