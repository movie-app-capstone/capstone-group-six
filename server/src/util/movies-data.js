//  setup
const API_KEY = '';
const axios = require('axios');

//  data
async function getMovieInfo () {
    const response = await axios.get(``);
    const data = response.data;

    return data;
}

module.exports = getMovieInfo;