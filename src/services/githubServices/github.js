const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.github.com',
});

const getUser = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
}

module.exports = {
  getUser,
};
