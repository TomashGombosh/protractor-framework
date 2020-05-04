import {get } from './base_page';
import { element, by } from 'protractor';

export default class QuestionaryPage1 {
    constructor() {}

    get = () => {
        get(`${browser.baseUrl}/hair-loss/questionnaire/1`);
    }

    header = {
        progressBar: {
            locator: element(by.css("header-checkout-progress-bar__step completed")),
            name: "Progress bar"
        },
        logoIcon: {
            locator: element(by.css("[class='icon icon-logo-symbol']")),
            name: "Logo icon"
        }

    }

    content = {
        title: {
            locator: element(by.css(".questions__ttl")),
            name: "Title of the question"
        },
        templesAnswer: {
            locator: element(by.css("img[alt='Temples']")),
            name: " Temples "
        },
        templesAndCrownAnswer: {
            locator: element(by.css("img[alt='Temples & Crown']")),
            name: "Temples & Crown"
        },
        moderateAnswer: {
            locator: element(by.css("img[alt='Moderate']")),
            name: "Moderate"
        },
        extensiveAnswer: {
            locator: element(by.css("img[alt='Extensive']")),
            name: "Extensive"
        },
        patchyAnswer: {
            locator: element(by.css("img[alt='Patchy']")),
            name: "Patchy"
        },
        completeAnswer: {
            locator: element(by.css("img[alt='Complete']")),
            name: "Complete"
        }
    }

    footer = {
        trustpilotLogo: {
            locator: element(by.css("[class='footer-checkout__logos']")),
            name: "Trustpilot logo"
        },
        privacyPolicy: {
            locator: element(by.css("footer>div a:nth-child(1)")),
            name: "Privacy Policy Link"
        },
        termsAndConditions: {
            locator: element(by.css("footer>div a:nth-child(2)")),
            name: "Terms and Conditions link"
        },
        termsOfSale: {
            locator: element(by.css("footer>div a:nth-child(3)")),
            name: "Terms of Sale ling"
        }
    }

}