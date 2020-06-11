import { browser, ExpectedConditions } from 'protractor';

const log = require('../../logger.config');

const EC = ExpectedConditions;
const GLOBAL_TIMEOUT = 60000;

export const get = (url) => {
    browser.get(url)
        .then(() => {
            log.info(`Navigate to the ${ url }`);
        })
        .catch((err) => log.info(err));

};

export const wait = (timeout) => {
    const milliseconds = 1000;
    browser.sleep(timeout * milliseconds)
        .then(() => {
            log.info(`Wait ${ timeout } seconds`);
        });
};

export const click = (element) => {
    const timeout = 5000;
    browser.wait(EC.elementToBeClickable(element.locator), timeout)
        .then(() => {
            log.info(`Wait to element clickable ${ element.name } by ${ timeout } ml`);
        });
    element.locator.click().then(() => {
        log.info(`Click on the ${ element.name }`);
    });
    wait(0.5);
};

export const doubleClick = (element) => {
    const timeout = 5000;
    browser.wait(EC.elementToBeClickable(element.locator), timeout);
    browser.actions().mouseMove(element.locator).doubleClick(element.locator).perform();
    log.info(`Double click on the ${ element.name }`);
};

export const enterText = (element, text) => {
    element.locator.sendKeys(text).then(() => {
        log.info(`Enter text ${ text } to the ${ element.name }`);
    });
};

export const getText = (element) => element.locator.getText().then((text) => {
    log.info(`Get text from the element ${ element.name } text: ${ text }`);
    return text;
});

export const switchTo = (element) => {
    browser.switchTo().frame(element.locator.getWebElement())
        .then(() => {
            log.info(`Switch to iframe ${ element.name }`);
        })
        .catch((err) => log.info(err));
};

export const switchToDefault = () => {
    browser.switchTo().defaultContent()
        .then(() => {
            log.info(`Switch To Default`);
        })
        .catch((err) => log.info(err));
};

export const getAttribute = (element, attribute) => {
    log.info(`Get attribute ${ attribute } from element ${ element.name }`);
    return element.locator.getAttribute(attribute);
};

export const isDisplayed = (element) => element.locator.isDisplayed().then((disp) => {
    log.info(`Is ${ element.name } displayed: ${ disp }`);
    return disp;
});

export const scrollIntoView = (element) => {
    browser.executeScript("arguments[0].scrollIntoView();", element.locator.getWebElement())
        .then(() => {
            log.info(`Scroll into view ${ element.name }`);
        });

};

//Wait section
export const waitToBePresent = (element) => {
    browser.wait(EC.presenceOf(element.locator), GLOBAL_TIMEOUT)
        .then(() => {
            log.info(`Wait to element ${ element.name } present`);
        });
};

export const waitToBeInvisible = (element) => {
    browser.wait(EC.invisibilityOf(element), GLOBAL_TIMEOUT)
        .then(() => {
            log.info("Wait to element invisible");
        });
};

export const waitToBeVisible = (element) => {
    browser.wait(EC.visibilityOf(element.locator), GLOBAL_TIMEOUT)
        .then(() => {
            log.info(`Wait to element ${ element.name } visible`);
        });

};

//Alert section
export const waitToAlertPresent = () => {
    try {
        browser.wait(EC.alertIsPresent(), GLOBAL_TIMEOUT)
            .then(() => {
                log.info(`Wait to alert present`);
            })
            .catch((err) => log.info(err));
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
