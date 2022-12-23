
import axios from "axios";
import * as types from "./actionTypes";

 const getHomeData=()=>(dispatch)=>{
  dispatch({type:types.GET_HOMEDATA_REQUEST})
    return axios.get("http://localhost:8080/stories")
    .then(r=>{ dispatch({type:types.GET_HOMEDATA_SUCCESS,payload:(r.data) }  ); console.log(r)} )
    .catch(e=>console.log(e))
}

const getGlobalData=()=>(dispatch)=>{
  dispatch({type:types.GET_HOME_SIDEBAR_DATA_REQUEST})
  // https://hs-consumer-api.espncricinfo.com/v1/global/details?lang=en&appItems=true&followItems=true&siteItems=true&featuredItems=true&allTeams=true
  return axios.get("http://localhost:8080/leftandRight")
  .then(r=>{
     
     dispatch({type:types.GET_HOME_SIDEBAR_DATA_SUCCESS,payload:(r.data)});
   })
  .catch(e=>console.log(e))
}

export {getHomeData, getGlobalData}

// ,console.log(r.data.results)

// https://hs-consumer-api.espncricinfo.com/v1/edition/recent-stories?lang=en&edition=in

// https://hs-consumer-api.espncricinfo.com/v1/edition/feed?edition=in&lang=en&page=1&records=10

// dispatch({type:types.GET_HOME_SIDEBAR_DATA_SUCCESS,payload:(r) }  );