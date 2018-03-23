const logger = require('./loggerServices/logger');
const github = require('./githubServices/github');

const services = {
  logger,
  github,
}

module.exports = {
  services
};
