import axios from "axios";

var config = {
  method: 'get',
  url: 'https://hs-consumer-api.espncricinfo.com/v1/edition/details',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },

};

const GET_DATA = async () => {
  const data = await axios(config)
    .then((r) => r);
  console.log(data);
};

export default GET_DATA;
