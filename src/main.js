const server = require('./server');
const { serverConfig } = require('./config');
const { utils } = require('./utils');

const log = utils.logger;

server.listen(serverConfig.port, () => log.info(`Server [ON] - Port: ${serverConfig.port}`));
