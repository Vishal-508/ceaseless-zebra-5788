import { legacy_createStore,compose, applyMiddleware } from "redux";
import { reducer } from "../Redux/AuthReducer/reducer";
import { appReducer } from "../Redux/AppReducer/reducer";
import thunk from "redux-thunk";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    Auth : reducer,
    App : appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));


