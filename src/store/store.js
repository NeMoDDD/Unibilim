import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import MyCabReducer from "./MyCabReducer";


let reducers = combineReducers({
    MyCabReducer: MyCabReducer
})

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnchancers(applyMiddleware(thunkMiddleware)))

export default store;