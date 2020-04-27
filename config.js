exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/test.js'], 
    capabilities: {
      browserName: 'chrome',
  
      chromeOptions: {
         args: [ "--window-size=1920,1024" ]
       }
    },
    //Global configuration
    baseUrl: 'https://devel.manual.co',

    //Allure configuration
    onPrepare: () => {
      require("@babel/register");
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter());
      jasmine.getEnv().afterEach( done => {
        if(done.status === "failed") {
          browser.takeScreenshot().then(png => {
            allure.createAttachment('Screenshot', () => {
              return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
          })
        }});
    }
} 