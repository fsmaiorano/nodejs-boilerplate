const logger = require('./logger/logger');
const github = require('./github/github');

const services = {
  logger,
  github,
}

module.exports = {
  services
};
