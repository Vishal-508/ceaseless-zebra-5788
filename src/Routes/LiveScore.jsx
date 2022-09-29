import React from 'react';
import axios from "axios";

function LiveScore() {

    const data = () => {
        axios.get('https://hs-consumer-api.espncricinfo.com/v1/pages/match/scorecard?lang=en&seriesId=1329818&matchId=1329826')
        .then(response => {
        console.log(response);
        });
    }
    data()
  return (
    <div>
        Score
    </div>
  )
}

export default LiveScore