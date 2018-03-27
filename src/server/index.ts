import * as express from 'express';
import * as consign from 'consign';
import * as bodyParser from 'body-parser';
import * as expressValidator from 'express-validator';
import cors from './cors';

class Server {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
    }

    private middleware() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(expressValidator());
        this.express.use(cors);
    }

    private initConsign() {
        consign({ cwd: 'src' })
            .then('configs')
            .then('api/controllers')
            .then('api/routes')
            .then('services')
            .into(this.express);
    }

}

export default new Server().express;
