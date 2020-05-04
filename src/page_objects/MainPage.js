import {get } from './base_page';
import { element, by } from 'protractor';

export default class MainPage {
    constructor() {}

    get = () => {
        get(`${browser.baseUrl}`);
    }

    header = {
        about: {
            locator: element(by.css("li[class='menu__item']>a[href='/about']")),
            name: "About button"
        },
        shop: {
            locator: element(by.css("nav.header__menu.flex.justify-content-start >ul> li:first-child > span")),
            name: "Shop button"

        },
        read: {
            locator: element(by.css("ul[class='menu']>li[class='menu__item']>a[href='/guided']")),
            name: "Read button"
        },
        login: {
            locator: element(by.css("li[class='menu__item']>a[href='/login']")),
            name: "Login button"
        }
    }
}