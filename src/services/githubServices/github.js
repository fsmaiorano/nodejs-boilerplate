const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.github.com',
});

const post = async (username) => {
  const response = await api.post(`/repos/${username}`);
  return response;
}

module.exports = {
  post,
};
