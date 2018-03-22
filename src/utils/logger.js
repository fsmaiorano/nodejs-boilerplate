const bunyan = require('bunyan');
const path = require('path');

class Logger {

    constructor() {

    }

    // type(T) {
    //     switch(t) {
    //         case 'info': 
    //     }
    // }

    print(type, message) {
        console.log(x);
    }
}

// const log = bunyan.createLogger({
//     name: 'app',
//     streams: [
//         {
//             level: 'info',
//             stream: process.stdout 
//         },
//         {
//             level: 'error',
//             stream: path.dirname(__dirname + '/log')
//         }
//     ]
// });

exports.Logger = Logger;