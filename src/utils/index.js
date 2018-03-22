const logger = require('./logger');

const utils = {
    'logger': new logger().create(),
}

module.exports = {
    utils
};