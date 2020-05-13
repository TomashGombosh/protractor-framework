import {get } from './base_page';
import { element, by } from 'protractor';

export default class ErectileDysfunctionPage {
    constructor() {}
    get = () => {
        get(`${browser.baseUrl}/erectile-dysfunction`);
    }
    header = {
        sexHealth: {
            locator: element(by.css(".hc-title")),
            name: "Sex Health"
        }
    }
    sildenafilContent = {
        sildenafil: {
            locator: element(by.cssContainingText('div[class=EdProductCrd--ttl]', 'Sildenafil')),
            name: "Sildenafil"
        },
        sildenafilDescription: {
            locator: element(by.css(".container:first-child>div>div.EdProductCrd:first-child>div:nth-child(2)")),
            name: "Sildenafil Description"
        },
        sildenafilStartFromButtonText: {
            locator: element(by.css(".container:first-child>div>div.EdProductCrd:first-child>div>a:first-child")),
            name: "Sildenafil Button Text"

        },
        sildenafilStartFromButtonClick: {
            locator: element(by.css(".container:first-child>div>div.EdProductCrd:first-child>div>a:first-child")),
            name: "Sildenafil Button Click"
        }
    }
    tadalafilContent = {
        tadalafil: {
            locator: element(by.cssContainingText('div[class=EdProductCrd--ttl]', 'Sildenafil')),
            name: "Tadalafil"
        },
        tadalafilDescription: {
            locator: element(by.css(".container:first-child>div>div.EdProductCrd:last-child>div:nth-child(2)")),
            name: "tadalafil Description"
        },
        tadalafilStartFromButton: {
            locator: element(by.css(".container:first-child>div>div.EdProductCrd:last-child>div>a:first-child")),
            name: "Tadalafil Button"
        }
    }
    viagraConnectContent = {
        viagraConnect: {
            locator: element(by.cssContainingText('div[class=EdProductCrd--ttl]', 'Viagra Connect')),
            name: "Viagra Connect"
        },
        viagraConnectDescription: {
            locator: element(by.css(".container:last-child>div>div.EdProductCrd:first-child>div:nth-child(2)")),
            name: " viagraConnect Description"
        },
        viagraConnectStartFromButton: {
            locator: element(by.css(".container:last-child>div>div.EdProductCrd:first-child>div>a:first-child")),
            name: "viagraConnect Button"
        }
    }
    viagraContent = {
        viagra: {
            locator: element(by.cssContainingText('div[class=EdProductCrd--ttl]', 'Viagra')),
            name: "Viagra"
        },
        viagraDescription: {
            locator: element(by.css(".container:last-child>div>div.EdProductCrd:last-child>div:nth-child(2)")),
            name: " viagra Description"
        },
        viagraStartFromButton: {
            locator: element(by.css(".container:last-child>div>div.EdProductCrd:last-child>div>a:first-child")),
            name: "viagra Button"
        }
    }
}