import { GET_NEWSDATA_FAILURE, GET_NEWSDATA_REQUEST, GET_NEWSDATA_SUCCESS, GET_SINGLENEWSDATA_FAILURE, GET_SINGLENEWSDATA_REQUEST, GET_SINGLENEWSDATA_SUCCESS } from "./actionTypes"
import axios from "axios"
let Getdata_func=(dispatch)=>{
  dispatch({type:GET_NEWSDATA_REQUEST})
  return axios.get("https://espnscore.onrender.com/api/stories").then((res)=>{
    console.log(res)
   return dispatch({type:GET_NEWSDATA_SUCCESS,payload:res.data})
  }).catch((err)=>{
    console.log(err)
    dispatch({type:GET_NEWSDATA_FAILURE,payload:err})

  })
}
// const Getdata_func2=(dispatch,id)=>{
//   dispatch({type:GET_SINGLENEWSDATA_REQUEST})
//   console.log(id)
//   return axios.get(`http://localhost:8080/results/${id}`).then((res)=>{
//     console.log(res.data)
//    return  dispatch({type:GET_SINGLENEWSDATA_SUCCESS,payload:res.data})
//   }).catch((err)=>{
//     console.log(err)
//     dispatch({type:GET_SINGLENEWSDATA_FAILURE,payload:err})

//   })
// }
export {Getdata_func}

// https://hs-consumer-api.espncricinfo.com/v1/edition/recent-stories?lang=en&edition=in

// http://localhost:8080/stories