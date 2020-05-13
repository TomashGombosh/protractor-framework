export default class ErectileDysfunctionComponent {
    constructor() {

    }
    content = {
        getInTheMoodImg: {
            locator: element(by.css("div[class='HowItWorks section noTrustpilot']>div>div>div:nth-child(1)>div:first-child")),
            name: "Get in the Mood Image"
        },
        getInTheMoodDescription: {
            locator: element(by.css("div[class='HowItWorks section noTrustpilot']>div>div>div:nth-child(1)>div:last-child")),
            name: "Get in the Mood Description"
        },
        takeThePillImg: {
            locator: element(by.css("div[class='HowItWorks section noTrustpilot']>div>div>div:nth-child(2)>div:first-child")),
            name: "Take the pill image"
        },
        takeThePillDescription: {
            locator: element(by.css("div[class='HowItWorks section noTrustpilot']>div>div>div:nth-child(2)>div:last-child")),
            name: "Take the pill Description"
        },
        enjoyImg: {
            locator: element(by.css("div[class='HowItWorks section noTrustpilot']>div>div>div:nth-child(3)>div:first-child")),
            name: "Enjoy Image"
        },
        enjoyDescription: {
            locator: element(by.css("div[class='HowItWorks section noTrustpilot']>div>div>div:nth-child(3)>div:last-child")),
            name: "Enjoy Description"
        }
    }

}