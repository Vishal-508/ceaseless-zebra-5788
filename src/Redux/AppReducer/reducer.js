import * as types from "./actionTypes";

const initialState = [];

export const appReducer = (state=initialState,action) => {
   switch(action.type){
        case(types.GET_DATA):
            return [...state,action.payload];

        default:
            return state
   }
     
    
  };
  