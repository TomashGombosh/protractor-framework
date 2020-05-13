import { browser, ExpectedConditions } from 'protractor';
import { getTimeout } from '../utils/constants';

const log = require('../../logger.config');

const EC = ExpectedConditions;
const GLOBAL_TIMEOUT = getTimeout();

export const get = (url) => {
    browser.get(url);
    log.info(`Navigate to the ${ url }`);
};

export const click = (element) => {
    const timeout = 1000;
    browser.wait(EC.elementToBeClickable(element.locator), 10000);
    element.locator.click();
    log.info(`Click on the ${ element.name }`);
    browser.sleep(timeout);
};

export const clickOnDiv = (element) => {
    const timeout = 1000;
    element.locator.click();
    log.info(`Click on the ${ element.name }`);
    browser.sleep(timeout);
};

export const clickExecuteScript = (element) => {
    const timeout = 2000;
    browser.sleep(timeout).then(() => {
        browser.executeScript("arguments[0].click();", element.locator.getWebElement())
            .then(() => log.info(`Click by JS execute ${ element.name }`))
    });
}

export const doubleClick = (element) => {
    browser.wait(EC.elementToBeClickable(element.locator), 10000);
    browser.actions().mouseMove(element.locator).doubleClick(element.locator).perform();
    log.info(`Double click on the ${ element.name }`);
};

export const enterText = (element, text) => {
    element.locator.sendKeys(text).then(() => {
        log.info(`Enter text ${ text } to the ${ element.name }`);
    });
};

export const getText = (element) => {
    log.info(`Get text from the element ${ element.name }`);
    return element.locator.getText();
};

export const getAttribute = (element, attribute) => {
    log.info(`Get attribute ${ attribute } from element ${ element.name }`);
    return element.locator.getAttribute(attribute);
};

export const isDisplayed = (element) => {
    log.info(`Is element ${ element.name } displayed on the page`);
    return element.locator.isDisplayed();
};

export const scrollIntoView = (element) => {
    browser.executeScript("arguments[0].scrollIntoView();", element.locator.getWebElement());
    log.info(`Scroll into view ${ element.name }`);
};

//Wait section
export const waitToBePresent = (element) => {
    log.info(`Wait to element ${ element.name } present`);
    browser.wait(EC.presenceOf(element.locator), GLOBAL_TIMEOUT);
};

export const waitToBeInvisible = (element) => {
    log.info("Wait to element invisible");
    browser.wait(EC.invisibilityOf(element), GLOBAL_TIMEOUT);
};

export const waitToBeVisible = (element) => {
    browser.wait(EC.visibilityOf(element.locator), GLOBAL_TIMEOUT);
    log.info(`Wait to element ${ element.name } visible`);
};

export const wait = (timeout) => {
    const milliseconds = 1000;
    log.info(`Wait ${ timeout } seconds`);
    browser.sleep(timeout * milliseconds);
};


//Alert section
export const waitToAlertPresent = () => {
    try {
        browser.wait(EC.alertIsPresent(), GLOBAL_TIMEOUT);
        log.info(`Wait to alert present`);
    } catch (error) {
        log.info(`No allert present in the page`);
    }
};

export const enterTextAlert = (text) => {
    waitToAlertPresent();
    browser.switchTo().alert().sendKeys(text);
    log.info(`Enter text ${ text } to the alert window`);
};

export const acceptAlert = () => {
    waitToAlertPresent();
    browser.switchTo().alert().accept();
    log.info(`Accept alert`);
};