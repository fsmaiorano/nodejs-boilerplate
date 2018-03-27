import server from './server';
import { serverConfig } from './configs';
import { services } from './services';

server.listen(serverConfig.port, () => services.logger.info(`Server [ON] - Port: ${serverConfig.port}`));
