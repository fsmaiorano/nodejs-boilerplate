const bunyan = require('bunyan');
const { environmentConfig } = require('../../config');
const path = require('path');

class Logger {

    constructor() {
        this.name = "nodejs";
    }

    create() {
        let root = path.dirname(require.main.filename);
        root = path.join(root + '/log/general.log')
        
        return new bunyan.createLogger({
            name: this.name,
            streams: [
                {
                    type: 'rotating-file',
                    path: root,
                    period: '1d',   // daily rotation
                    count: 3        // keep 3 back copies
                },
                {
                    level: 'info',
                    stream: process.stderr,
                },
                {
                    stream: process.stderr,
                    level: 'debug'
                },
            ]
        });
    }
}

module.exports = Logger;