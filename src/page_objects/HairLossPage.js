import {get } from './base_page';
import { element, by } from 'protractor';

export default class HairLossPage {
    constructor() {}

    get = () => {
        get(`${browser.baseUrl}/hair-loss`);
    }

    header = {
        card: {
            locator: element(by.id("cart-btn")),
            name: "Cart button"
        }
    }

    plans = {
        completeHairLoss: {
            //TODO add implementation
        },
        finasteride: {
            locator: element(by.css(".container>div.HairPlanCard:nth-child(2)")),
            name: "Finasteride Hair Loss Plan",
            addToChartButton: {
                locator: element(by.css(".container>div.HairPlanCard:nth-child(2) button")),
                name: "Add to Chard Button"
            }
        }
    }
}