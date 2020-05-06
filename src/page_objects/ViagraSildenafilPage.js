import {get } from './base_page';
import { element, by } from 'protractor';

export default class ViagraSildenafilPage {
    constructor() {}

    get = () => {
        get(`${browser.baseUrl}/erectile-dysfunction/viagra-sildenafil`);
    }
    header = {
        vigraSildenafil: {
            locator: element(by.css("div[class=ttl]")),
            name: "Viagra (Sildenafil)"
        }
    }
    title = {
        standard: {
            locator: element(by.css(".experimentHelper__HighDosage>div:nth-child(2)>div:first-child")),
            name: "Standard"
        },
        high: {
            locator: element(by.css(".experimentHelper__HighDosage>div:nth-child(2)>div:last-child")),
            name: "High"
        },
        six: {
            locator: element(by.css("div.VariantSelector--option-list:nth-child(3)>div:nth-child(1)")),
            name: "six"
        },
        eight: {
            locator: element(by.css("div.VariantSelector--option-list:nth-child(3)>div:nth-child(2)")),
            name: "eight"
        },
        ten: {
            locator: element(by.css("div:first-child>div.VariantSelector--option-list>div:nth-child(3)")),
            name: "Ten"
        },
        twelve: {
            locator: element(by.css("div:first-child>div.VariantSelector--option-list>div:nth-child(4)")),
            name: "twelve"
        },
        sixEveryMonth: {
            locator: element(by.css("div.VariantSelector--option-list:nth-child(5)>div:nth-child(1)")),
            name: "Six Every month"
        },
        eighteenEveryThreeMonths: {
            locator: element(by.css("div.VariantSelector--option-list:nth-child(5)>div:nth-child(2)")),
            name: "eighteen Every three months"
        },
        addToChartButton: {
            locator: element(by.css("div.VariantSelector--btn-wrapper>div:first-child")),
            name: "Add to Cart"
        },
        labelText: {
            locator: element(by.css("div[class=cart__header-label]")),
            name: "Title text"
        }

    }
}