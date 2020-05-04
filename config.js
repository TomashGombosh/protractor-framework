require("@babel/register");
require("protractor");
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./src/tests/**.e2e.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000
    },

    allScriptsTimeout: 30000,

    multiCapabilities: [{
        browserName: 'chrome'
        // 'chromeOptions': {
        //     args: [
        //         '--disable-browser-side-navigation',
        //         '--headless',
        //         '--window-size=1920,1080']
        // }
    // }, {
    //     browserName: 'firefox'
    // }, {
    //     browserName: 'safari',
    //     options: {
    //         cleanSession: true
    //     }
    }],

    //Global configuration
    baseUrl: 'https://manual:menofmanual@www.devel.manual.co',

    //Allure configuration
    /*global jasmine browser allure*/
    onPrepare: () => {
        browser.manage().window().maximize();
        browser.manage().timeouts().pageLoadTimeout(40000);
        browser.manage().timeouts().implicitlyWait(25000);

        // for non-angular page
        browser.ignoreSynchronization = true;
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
    }
};