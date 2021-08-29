import { combineReducers, createStore } from "redux";
import profileReducer from "../redux/profilePage-reducer";
import messagesReducer from "../redux/messagesPage-reducer";
import sideBarReducer from "../redux/sideBar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: sideBarReducer
});

let store = createStore(reducers);

export default store;