import {applyMiddleware, combineReducers,  legacy_createStore as createStore} from 'redux' 
import thunkMiddleware from 'redux-thunk'
import { timetableReducer } from './timetableReducer' 
import MyCabReducer from './MyCabReducer'
let reducers = combineReducers({   
    timetablePage: timetableReducer, 
    MyCabReducer: MyCabReducer
}) 
export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
 