
export default class CartComponent {
    constructor() {

    }

    header = {
        back : {
            locator: element(by.css(".cart__back")),
            name: "Back button"
        },
        title : {
            locator: element(by.css(".cart__header-label")),
            name: "Title"
        }
    };

    content = {
        body: {
            locator: element(by.css(".cart__body")),
            name: "Content body"
        },
        shopHair: {
            locator: element(by.css(".cart__btn>a:nth-child(1)")),
            name: "Shop Hair Button"
        },
        shopEd: {
            locator: element(by.css(".cart__btn>a:nth-child(2)")),
            name: "Shop Ed button"
        },
        shopSkin: {
            locator: element(by.css(".cart__btn>a:nth-child(3)")),
            name: "Shop skin button"
        },
        shopDailyHealt: {
            locator: element(by.css(".cart__btn>a:nth-child(4)")),
            name: "Shop daily healt button"
        },
        checkout : {
            locator: element(by.css(".cart__btn>button")),
            name: "Checkout button"
        }
    }
}