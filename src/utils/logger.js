const bunyan = require('bunyan');
const path = require('path');
class Logger {

    constructor() {
        this.name = "nodejs";
    }

    create() {
        let rootFolder = path.dirname(__dirname).split(path.sep).pop();
        rootFolder = path.join(rootFolder + "/log/general.log");
        return new bunyan.createLogger({
            name: this.name,
                streams: [
                    {
                        type: 'rotating-file',
                        path: rootFolder,
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