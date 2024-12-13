
export default class CookieComponent {
    constructor() {

    }
    content = {
        accept: {
            locator: element(by.css("[role='alertdialog']>div:last-child>div:nth-child(4)>div:last-child button")),
            name: "Accept coockie"
        },
    }
}