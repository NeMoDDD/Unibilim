import { professorsApi } from "../Api/professors-api"

let initialState = {
    myStudents: [],  
    isFetching: false
} 
const SET_MY_STUDENTS = 'SET_MY_STUDENTS'
const TOGGLE_MY_STUDENTS_FETCH = 'TOGGLE_MY_STUDENTS_FETCH'

const setStudentsAC = (students) =>({type: SET_MY_STUDENTS, students}) 
const toggleFetchingsAC = (toggle) =>({type: TOGGLE_MY_STUDENTS_FETCH, toggle}) 
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MY_STUDENTS: { 
            return{ 
                ...state, 
                myStudents: action.students
            }
        } 
        case TOGGLE_MY_STUDENTS_FETCH: { 
            return{ 
                ...state, 
                isFetching: action.toggle
            }
        }
        default: {
            return state
        }
    }
} 
export const getDefineProffeserossStudents = ({token}) =>{ 
    return async (dispatch) =>{ 
        try{ 
            dispatch(toggleFetchingsAC(true) )
            const response = await professorsApi.getProfessorsStudentsList(token) 
            console.log(response); 
            if(response.status === 200){  
               dispatch(setStudentsAC(response.data))
            }

        }catch(error){ 
            console.log(error);
        }finally{ 
            dispatch(toggleFetchingsAC(false))
        }
    }
}


export default LoginReducer