const server = require('./server');
const { serverConfig } = require('./config');

server.listen(serverConfig.port, () => console.log(`Server [ON] - Port: ${serverConfig.port}`));
