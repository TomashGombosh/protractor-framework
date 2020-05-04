import {get } from './base_page';
import { element, by } from 'protractor';

export default class QuestionaryPage {
    constructor() {}

    get = () => {
        get(`${browser.baseUrl}/hair-loss/questionnaire/0`);
    }

    header = {
        progressBar: {
            locator: element(by.css("header>div>nav>div")),
            name: "Progress bar"
        },
        logoIcon: {
            locator: element(by.css("[class='icon icon-logo-symbol']")),
            name: "Logo icon"
        }

    }

    content = {
        title: {
            locator: element(by.css(".questions>div>div:first-child")),
            name: "Question popup title"
        },
        question: {
            locator: element(by.css(".questions>div>div:nth-child(2)")),
            name: "Question fields"
        },
        list: {
            locator: element(by.css(".questions>div>div:nth-child(3)")),
            name: "Question popup list"
        },
        button: {
            locator: element(by.css(".questions>div>div:nth-child(4)")),
            name: "Question popup yes button"
        }

    }

    footer = {
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