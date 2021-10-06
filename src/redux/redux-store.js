import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import userReducer from "./userReducer";
import contactsRedusers from "./contactsRedusers";
import thunk from "redux-thunk";

let reducers = combineReducers({
    user: userReducer,
    contacts: contactsRedusers
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


window.store = store;


export default store;