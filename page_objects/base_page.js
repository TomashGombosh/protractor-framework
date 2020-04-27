import { browser } from 'protractor';

const log = require('../logger.config');
const constants = require('../utils/constants');

const EC = protractor.ExpectedConditions;
const GLOBAL_TIMEOUT = constants.getTimeout;

export default class Base {
    constructor() {

    }

    get = url => {
        browser.get(url);
        log.info(`Navigate to the ${url}`);
    }

    click = element => {
        element.click();
        log.info(`Click on the ${element}`);
    }

    enterText = (element, text) => {
        element.sendKeys(text);
        log.info(`Enter text ${text} to the ${element}`);
    }

    getText = element => {
        log.info(`Get text from the element ${element}`);
        return element.getText();
    }

    getAttribute = (element, attribute) => {
        log.info(`Get attribute ${attribute} from element ${element}`);
        return element.getAttribute(attribute);
    }
    
    sDisplayed = element => {
        log.info("Is element displayed on the page");
        return element.isDisplayed();
    }

    //Wait section
    waitToBePresent = element => {
        log.info("Wait to element present");
        browser.wait(EC.presenceOf(element), GLOBAL_TIMEOUT);
    }

    waitToBeInvisible = element => {
        log.info("Wait to element invisible");
        browser.wait(EC.invisibilityOf(element), GLOBAL_TIMEOUT);
    }

    waitToBeVisible = element => {
        browser.wait( () => {
            browser.sleep(2000);
            return element.isDisplayed()
            .then( isDisplayed => {
                return isDisplayed;
            }, error => {
                return false;
            });
        }, GLOBAL_TIMEOUT);
    }

    wait = timeout => {
        log.info(`Wait ${timeout} seconds`);
        browser.sleep(timeout * 1000);
    }


    //Alert section
    waitToAlertPresent = () => {
        try {
            browser.wait(EC.alertIsPresent(), GLOBAL_TIMEOUT);
            log.info(`Wait to alert present`);
        } catch (error) {
            log.info(`No allert present in the page`);
        }
    }

    enterTextAlert = text => {
        waitToAlertPresent();
        browser.switchTo().alert().sendKeys(text);
        log.info(`Enter text ${text} to the alert window`);
    }

    acceptAlert = () => {
        waitToAlertPresent();
        browser.switchTo().alert().accept();
        log.info(`Accept alert`);
    }
}