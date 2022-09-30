import React, {useEffect} from 'react';
import GET_DATA from '../Redux/AppReducer/action';


function LiveScore() {
    useEffect(() => {
      GET_DATA()
     
    }, [])
    
  return (
    <div>
        Score
    </div>
  )
}

export default LiveScore