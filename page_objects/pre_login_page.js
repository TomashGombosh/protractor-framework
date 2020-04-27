'use strict'
var base = require('../page_objects/base_page');


export default class PreLoginPage {

    constructor() {
        
    }

    fillLoginAndPasswordIntoWindow = (username, password) => {
        base.enterTextAlert(username);
        base.enterTextAlert(password);
        base.acceptAlert();
    }
}