"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const cors_1 = require("./cors");
class Server {
    constructor() {
        this.express = express();
        this.middleware();
    }
    middleware() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(expressValidator());
        this.express.use(cors_1.default);
    }
    initConsign() {
        consign({ cwd: 'src' })
            .then('configs')
            .then('api/controllers')
            .then('api/routes')
            .then('services')
            .into(this.express);
    }
}
exports.default = new Server().express;
