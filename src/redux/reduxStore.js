import {applyMiddleware, combineReducers,  legacy_createStore as createStore} from 'redux' 
import thunkMiddleware from 'redux-thunk'
import { timetableReducer } from './timetableReducer' 
import MyCabReducer from './MyCabReducer'
import RegisterReducer from "./RegisterReducer";
import LoginReducer from "./loginReducer";

let reducers = combineReducers({   
    timetablePage: timetableReducer, 
    MyCabReducer: MyCabReducer,
    RegisterReducer: RegisterReducer,
    loginReducer: LoginReducer
})
export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
 