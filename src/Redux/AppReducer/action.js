
import axios from "axios";
import * as types from "./actionTypes";

 const getHomeData=()=>(dispatch)=>{
  dispatch({type:types.GET_HOMEDATA_REQUEST})
    return axios.get("https://hs-consumer-api.espncricinfo.com/v1/edition/feed?edition=in&lang=en&page=1&records=10")
    .then(r=>{ dispatch({type:types.GET_HOMEDATA_SUCCESS,payload:(r.data.results)} ) } )
    .catch(e=>console.log(e))
}

export {getHomeData}

// ,console.log(r.data.results)