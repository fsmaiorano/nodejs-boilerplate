import server from './server';
import { serverConfig } from './config';

server.listen(serverConfig.port, () => console.log(`Server [ON] - Port: ${serverConfig.port}`));
