
import axios from "axios";
import * as types from "./actionTypes";

 const getHomeData=()=>(dispatch)=>{
  dispatch({type:types.GET_HOMEDATA_REQUEST})
    return axios.get("https://hs-consumer-api.espncricinfo.com/v1/edition/recent-stories?lang=en&edition=in")
    .then(r=>{ dispatch({type:types.GET_HOMEDATA_SUCCESS,payload:(r.data.stories) }  ); console.log(r)} )
    .catch(e=>console.log(e))
}

export {getHomeData}

// ,console.log(r.data.results)

// https://hs-consumer-api.espncricinfo.com/v1/edition/recent-stories?lang=en&edition=in

// https://hs-consumer-api.espncricinfo.com/v1/edition/feed?edition=in&lang=en&page=1&records=10