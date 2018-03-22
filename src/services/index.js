const logger = require('./logger/logger');

const services = {
    'logger': new logger().create(),
}

module.exports = {
    services
};