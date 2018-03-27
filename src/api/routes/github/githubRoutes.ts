import { Router, Request, Response, NextFunction } from 'express';
import * as apiConfig from './../../../configs';
import * as githubController from './../../controllers';

class GithubRoutes {

    public router = Router();

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get(`${apiConfig.routesUrl}github/getUser`, this.getUser);
    }

    public getUser(req: Request, res: Response, next: NextFunction) {

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
