import {applyMiddleware, combineReducers,  legacy_createStore as createStore} from 'redux' 
import thunkMiddleware from 'redux-thunk'
import { timetableReducer } from './timetableReducer' 
import MyCabReducer from './MyCabReducer'
import RegisterReducer from "./RegisterReducer";
import LoginReducer from "./loginReducer";
import LocationReducer from "./location-reducer";
import VerificationReducer from "./verification-reducer";

let reducers = combineReducers({   
    timetablePage: timetableReducer, 
    MyCabReducer: MyCabReducer,
    registerReducer: RegisterReducer,
    loginReducer: LoginReducer,
    locationReducer: LocationReducer,
    verificationReducer: VerificationReducer
})
export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
 