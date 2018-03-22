const server = require('./server');
const { serverConfig } = require('./config');
const { Logger } = require('./utils');

const logger = new Logger();

server.listen(serverConfig.port, () => console.log(`Server [ON] - Port: ${serverConfig.port}`));
