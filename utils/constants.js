const dotenv = require('dotenv');

var Contans = () => {
    this.getUserName = () => {
        dotenv.config();
        return process.env.USERNAME;
    }

    this.getPassword = () => {
        dotenv.config();
        return process.env.PASSWORD;
    }

    this.getTimeout = () => {
        dotenv.config();
        return process.env.TIMEOUT;
    }
}

module.exports = Contans;