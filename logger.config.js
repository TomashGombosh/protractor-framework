  
var log4js = require('log4js');
var fs = require('fs');
const LOGS_DIR = './logs';

const getLogDir = () => {
    if(fs.existsSync(LOGS_DIR)) {
        return LOGS_DIR;
    } else {
        fs.mkdirSync(LOGS_DIR);
        return LOGS_DIR;
    }
}
log4js.configure({
    appenders: { log: { type: 'file', filename: `${getLogDir()}/log.txt` } },
    categories: { default: { appenders: ['log'], level: 'trace' } },
});

module.exports.info = msg =>{
    const log = log4js.getLogger('log');
    log.info(msg);
    console.log(msg);
} 