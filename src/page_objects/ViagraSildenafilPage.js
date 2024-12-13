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
            locator: element(by.css("div.VariantSelector--option--transition-enter-done>div>div:first-child")),
            name: "six"
        },
        eight: {
            locator: element(by.css("div.VariantSelector--option--transition-enter-done>div>div:nth-child(2)")),
            name: "eight"
        },
        ten: {
            locator: element(by.css("div.VariantSelector--option--transition-enter-done>div>div:nth-child(3)")),
            name: "Ten"
        },
        twelve: {
            locator: element(by.css("div.VariantSelector--option--transition-enter-done>div>div:nth-child(4)")),
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
        },
        clickXCrossButton: {
            locator: element(by.css("div[class=product-cart__close]")),
            name: "Click X"
        },
        labelTextEmpty: {
            locator: element(by.css("p[class=cart__info]")),
            name: "Title text"
        },
        shopHair: {
            locator: element(by.css("div[class=cart__btn]>a:first-child")),
            name: "Shop Hair"
        },
        shopED: {
            locator: element(by.css("div[class=cart__btn]>a:nth-child(2)")),
            name: "Shop ED"
        },
        shopSkin: {
            locator: element(by.css("div[class=cart__btn]>a:nth-child(3)")),
            name: "Shop Skin"
        },
        shopDailyHealth: {
            locator: element(by.css("div[class=cart__btn]>a:nth-child(4)")),
            name: "Shop Daily Health"
        },
        backButton: {
            locator: element(by.css("div[class=cart__back]")),
            name: "back button"
        },
        itemHasreplacedText: {
            locator: element(by.css("div[class=PomOverriddenNotice--ttl]")),
            name: "Replace text"
        },
        undoButton: {
            locator: element(by.css("button[class=PomOverriddenNotice--cta]")),
            name: "Undo button"
        },
        howToUseSildenafil: {
            locator: element(by.css("div[class='HowItWorks section noTrustpilot']>div:nth-child(1)>div>span")),
            name: "How to Use Sildenafil"
        }, 
        frequentlyAsked: {
            locator: element(by.css("div[class='FaqComponent alignQuestions-right image-ed']>div>div>div>div:first-child")),
            name: "Enjoy"
        },
        frequentlyAskedFirst: {
            locator: element(by.css("div[class=content]>div>div>div>div:nth-child(1)")),
            name: "Is Sildenafil The Same as Viagra"
        },
        frequentlyDescriptionFirst: {
            locator: element(by.css("div[class=content]>div>div>div>div:nth-child(2)>p")),
            name: "Description first question"
        },
        frequentlyAskedSecond: {
            locator: element(by.css("div[class=content]>div>div>div:last-child>div:nth-child(3)")),
            name: "How does Viagra(Sildenafil) work"
        },
        frequentlyDescriptionSecond: {
            locator: element(by.css("div[class=content]>div>div>div:last-child>div:nth-child(4)")),
            name: "Description second question"
        },
        frequentlyAskedThird: {
            locator: element(by.css("div[class=content]>div>div>div:last-child>div:nth-child(5)")),
            name: "How long does Viagra(Sildenafil) last"
        },
        frequentlyDescriptionThird: {
            locator: element(by.css("div[class=content]>div>div>div:last-child>div:nth-child(6)")),
            name: "Description third question"
        },
        frequentlyAskedfour: {
            locator: element(by.css("div[class=content]>div>div>div:last-child>div:nth-child(7)")),
            name: "How long does it take for Viagra(Sildenafil) to work"
        },
        frequentlyDescriptionfour: {
            locator: element(by.css("div[class=content]>div>div>div:last-child>div:nth-child(8)")),
            name: "Description four question"
        },
        readMe: {
            locator: element(by.css("div:first-child>div[class='ReadMore section']>div>div:nth-child(1)")),
            name: "Read me, i'm Helpful"
        },
        questionTitle: {
            locator: element(by.css("div:first-child>div[class='ReadMore section']>div>div:nth-child(2)")),
            name: "question title"
        },
        sildenafilReview: {
            locator: element(by.css("div.text-center>div:nth-child(1)>div:last-child")),
            name: "Sildenafil review"
        },
     }
}