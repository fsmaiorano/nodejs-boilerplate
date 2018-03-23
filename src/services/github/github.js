const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.github.com',
});

const post = () => {
  api.get(`/repos/${search}`);
}

module.exports = {
  post,
};
