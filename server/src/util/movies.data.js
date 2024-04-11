//  setup
const API_KEY = '66dfbb96';
const axios = require('axios');

//  data
async function getMovieInfo () {
    const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`);
    const data = response.data;

    return data;
}

module.exports = getMovieInfo;