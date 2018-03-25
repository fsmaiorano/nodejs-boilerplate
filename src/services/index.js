const logger = require('./loggerServices/logger');
const github_v1 = require('./githubServices/v1/github');

const services = {
  logger,
  github_v1,
}

module.exports = {
  services
};
