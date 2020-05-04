import { clickJs, isDisplayed, waitToBeVisible, scrollIntoView, click, getText } from '../page_objects/base_page';
import HairLossPage from '../page_objects/HairLossPage';
import CartComponent from '../page_objects/components/CartComponent';
import CookieComponent from '../page_objects/components/CookieComponent';
import QuestionaryPage from '../page_objects/QuestionaryPage';
import MainPage from '../page_objects/MainPage';
import QuestionaryOnePage from '../page_objects/QuestionaryOnePage';

/*global expect describe beforeAll beforeEach afterEach it browser*/
describe('Hair-loss. Question pages', () => {
    const cookieComponent = new CookieComponent();
    const heirLoss = new HairLossPage();
    const cartComponent = new CartComponent();
    const questionaryPage = new QuestionaryPage();
    const mainPage = new MainPage();
    const questionaryOnePage = new QuestionaryOnePage();

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        heirLoss.get();
        scrollIntoView(heirLoss.plans.finasteride);
        click(heirLoss.plans.finasteride.addToChartButton);
        click(heirLoss.plans.finasteride.addToChartButton);

        waitToBeVisible(cartComponent.header.title);
        expect(isDisplayed(cartComponent.header.title)).toBe(true);

        click(cartComponent.content.checkout);
    });

    it('Check the "CheckOut" button in the mini-cart with product', () => {


        waitToBeVisible(questionaryPage.header.progressBar);
        expect(isDisplayed(questionaryPage.header.progressBar)).toBe(true);
        expect(isDisplayed(questionaryPage.content.title)).toBe(true);
        expect(isDisplayed(questionaryPage.content.question)).toBe(true);
        expect(isDisplayed(questionaryPage.content.list)).toBe(true);
        expect(isDisplayed(questionaryPage.content.buttontext)).toBe(true);
        expect(isDisplayed(questionaryPage.footer.privacyPolicy)).toBe(true);
        expect(isDisplayed(questionaryPage.footer.termsAndConditions)).toBe(true);
        expect(isDisplayed(questionaryPage.footer.termsOfSale)).toBe(true);
    });

    it('Check the "YES" button in the questionnaire/0 page'), () => {
        clickJs(questionaryPage.content.buttonclick);
        waitToBeVisible(questionaryOnePage.header.progressBar);
        expect(isDisplayed(questionaryOnePage.header.progressBar)).toBe(true);
        expect(isDisplayed(questionaryOnePage.header.logoIcon)).toBe(true);
        expect(isDisplayed(questionaryOnePage.content.title)).toBe(true);
        expect(isDisplayed(questionaryOnePage.content.templesAnswer)).toBe(true);
        expect(isDisplayed(questionaryOnePage.content.templesAndCrownAnswer)).toBe(true);
        expect(isDisplayed(questionaryOnePage.content.moderateAnswer)).toBe(true);
        expect(isDisplayed(questionaryOnePage.content.extensiveAnswer)).toBe(true);
        expect(isDisplayed(questionaryOnePage.content.patchyAnswer)).toBe(true);
        expect(isDisplayed(questionaryOnePage.content.completeAnswer)).toBe(true);
        expect(isDisplayed(questionaryOnePage.footer.trustpilotLogo)).toBe(true);
        expect(isDisplayed(questionaryOnePage.footer.privacyPolicy)).toBe(true);
        expect(isDisplayed(questionaryOnePage.footer.termsAndConditions)).toBe(true);
        expect(isDisplayed(questionaryOnePage.footer.termsOfSale)).toBe(true);


        it('Check the "Logo" in the questionnaire/0 page', () => {
            click(questionaryPage.header.logoIcon);
            waitToBeVisible(mainPage.header.shop);
            expect(isDisplayed(mainPage.header.about)).toBe(true);
            expect(isDisplayed(mainPage.header.read)).toBe(true);
            expect(isDisplayed(mainPage.header.login)).toBe(true);
            expect(isDisplayed(mainPage.header.shop)).toBe(true);

        });
    };
});