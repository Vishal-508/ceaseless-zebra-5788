import { GET_NEWSDATA_FAILURE, GET_NEWSDATA_REQUEST, GET_NEWSDATA_SUCCESS } from "./actionTypes"

let initialstate={
  newsdata:[],
  isLoading:false,
  isErr:false

}
const reducer=(state=initialstate ,action )=>{
  let {type,payload}=action
  switch(type){
     case GET_NEWSDATA_REQUEST:return {...state,isLoading:true};
     case GET_NEWSDATA_SUCCESS:return {...state,isLoading:false,newsdata:payload};
     case GET_NEWSDATA_FAILURE:return {...state,isErr:true,isLoading:false,newsdata:[]};

     default:return state
  }
 
}
export default reducer