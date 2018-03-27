"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const configs_1 = require("./configs");
const services_1 = require("./services");
server_1.default.listen(configs_1.serverConfig.port, () => services_1.services.logger.info(`Server [ON] - Port: ${configs_1.serverConfig.port}`));
