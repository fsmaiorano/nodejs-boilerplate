const server = require('./server');
const { serverConfig } = require('./config');
const { utils } = require('./utils');

const log = utils.logger;
log.info('teste');
server.listen(serverConfig.port, () => console.log(`Server [ON] - Port: ${serverConfig.port}`));
// server.listen(serverConfig.port, () => log.info(`Server [ON] - Port: ${serverConfig.port}`));
