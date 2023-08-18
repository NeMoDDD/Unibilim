import {professorsApi} from "../Api/professors-api";

const SET_PROFESSORS = "SET_PROFESSORS"
const TOGGLE__FETCH__PROFFESSOR_PAGE ='TOGGLE__FETCH__PROFFESSOR_PAGE' 
const SET_LANGUAGE_PROFFESSOR_FILTER = 'SET_LANGUAGE_PROFFESSOR_FILTER' 
const SET_FILTER_PROFFESSORS ='SET_FILTER_PROFFESSORS'
let initialState = {
    professors: [], 
    languageFilter: [],
    subjectFilter:[],
    isFetching: false
}


const ProfessorsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PROFESSORS:
            return {
                ...state,
                professors: action.professors
            }
        case TOGGLE__FETCH__PROFFESSOR_PAGE:{ 
            return{ 
                ...state, 
                isFetching: action.toggle
            }
        } 
        case SET_LANGUAGE_PROFFESSOR_FILTER:{ 
            return{ 
                ...state, 
                languageFilter: action.filtered
            }
        } 
        case SET_FILTER_PROFFESSORS:{ 
            return{ 
                ...state, 
                professors: state.professors.filter((item) => item.language === action.language)
            }
        }
        default: {
            return {...state}
        }
    }
}
export const setProfessors = (professors) => ({type: SET_PROFESSORS, professors})
export const toggleProfessorFetchAC = (toggle) => ({type: TOGGLE__FETCH__PROFFESSOR_PAGE, toggle})
export const setFilteredProfessorsByLanguageAC = (filtered) => ({type: SET_LANGUAGE_PROFFESSOR_FILTER, filtered})
export const getProfessors = ({token}) => {
    return async (dispatch) => {
        try{ 
            dispatch(toggleProfessorFetchAC(true))
            const response = await professorsApi.getAllProfessors(token)
            if(response.status === 200){  
                console.log(response);
                const professors = response.data
                const uniqueLanguages = new Set();
                professors.forEach(teacher => {
                    uniqueLanguages.add(teacher.language);
                });                
                const uniqueLanguagesArray = Array.from(uniqueLanguages)
                dispatch(setFilteredProfessorsByLanguageAC(uniqueLanguagesArray))
                dispatch(setProfessors(response.data))
            }
        }catch(error){ 
            console.log(error);
        }finally{ 
            dispatch(toggleProfessorFetchAC(false))
        }
    }
}

export default ProfessorsReducer