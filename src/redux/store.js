import { applyMiddleware, combineReducers,compose, createStore } from "redux";
import authReducer from "./authReducer";
import thunk from 'redux-thunk'
import messegeReducer from "./messegeReducer";
import profileReducer from "./profileReducer";
import UsersReducer from "./UsersReducer";
import { reducer as formReducer } from 'redux-form'
let reducers=combineReducers({
    auth:authReducer,
    profile:profileReducer,
    dialogs:messegeReducer,
    findUsers:UsersReducer,
    form: formReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))

window.store=store

export default store;