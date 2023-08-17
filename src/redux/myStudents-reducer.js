import { professorsApi } from "../Api/professors-api"

let initialState = {
    myStudents: []
} 
const SET_MY_STUDENTS = 'SET_MY_STUDENTS'


const setStudentsAC = (students) =>({type: SET_MY_STUDENTS, students}) 
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MY_STUDENTS: { 
            return{ 
                ...state, 
                myStudents: action.students
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
            
            const response = await professorsApi.getProfessorsStudentsList(token) 
            console.log(response); 
            if(response.status === 200){  
               dispatch(setStudentsAC(response.data))
            }

        }catch(error){ 
            console.log(error);
        }
    }
}


export default LoginReducer