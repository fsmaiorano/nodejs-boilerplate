const server = require('./server');
const { serverConfig } = require('./configs');
const { services } = require('./services');

server.listen(serverConfig.port, () => services.logger.info(`Server [ON] - Port: ${serverConfig.port}`));
