// import { applyMiddleware, legacy_createStore } from "redux";
// import reducer from "./reducer"
// import thunk from "redux-thunk"

// export const store =legacy_createStore(reducer,applyMiddleware(thunk))

import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/reducer";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as SingleReducer } from "./SinglePageReducer/reducer";
const rootReducer = combineReducers({
    auth: authReducer,
    appreducer: AppReducer,
	singlereducer:SingleReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));