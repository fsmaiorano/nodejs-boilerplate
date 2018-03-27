"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiConfig = require("./../../../configs");
class GithubRoutes {
    constructor() {
        this.router = express_1.Router();
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get(`${apiConfig.routesUrl}github/getUser`, this.getUser);
    }
    getUser(req, res, next) {
    }
}
// import * as apiConfig from './../../../configs';
// import * as githubController from './../../controllers';
// const githubRoutes = app => {
//     app.post(`${apiConfig.routesUrl}github/getUser`, (req, res) => {
//         app.api.controllers.github.githubController.getUser(app, req, res);
//     });
// }
// export default githubRoutes;
