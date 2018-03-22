const server = require('./server');
const { serverConfig } = require('./config');
const { services } = require('./services');

const log = services.logger;

server.listen(serverConfig.port, () => log.info(`Server [ON] - Port: ${serverConfig.port}`));
