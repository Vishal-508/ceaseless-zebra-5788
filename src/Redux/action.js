import { GET_NEWSDATA_FAILURE, GET_NEWSDATA_REQUEST, GET_NEWSDATA_SUCCESS } from "./actionTypes"
import axios from "axios"
const Getdata_func=(dispatch)=>{
  dispatch({type:GET_NEWSDATA_REQUEST})
  return axios.get("http://localhost:8080/stories").then((res)=>{
    console.log(res.data)
    dispatch({type:GET_NEWSDATA_SUCCESS,payload:res.data})
  }).catch((err)=>{
    console.log(err)
    dispatch({type:GET_NEWSDATA_FAILURE,payload:err.data})

  })
}
export {Getdata_func}