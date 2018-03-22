const bunyan = require('bunyan');
const path = require('path');
class Logger {

    constructor() {
        this.name = "nodejs";
    }

    create() {
        return new bunyan.createLogger({
            name: this.name,
            //     streams: [
            //         {
            //             type: 'rotating-file',
            //             path: path.normalize(__dirname + '../log'),
            //             period: '1d',   // daily rotation
            //             count: 3        // keep 3 back copies
            //         },
            //         {
            //             stream: process.stderr,
            //             level: 'debug'
            //         },

            //     ]
        });
    }
}

module.exports = Logger;