import { doubleClick, isDisplayed, waitToBeVisible, scrollIntoView, click } from '../page_objects/base_page';
import HairLossPage from '../page_objects/HairLossPage';
import CartComponent from '../page_objects/components/CartComponent';
import CookieComponent from '../page_objects/components/CookieComponent';
import QuestionaryPage from '../page_objects/QuestionaryPage';

/*global expect describe beforeAll beforeEach afterEach it browser*/
describe('Hair-loss. Question pages', () => {
    const cookieComponent = new CookieComponent();
    const heirLoss = new HairLossPage();
    const cartComponent = new CartComponent();
    const questionaryPage = new QuestionaryPage();

    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        heirLoss.get();
    });

    it('Check the "CheckOut" button in the mini-cart with product', () => {
        scrollIntoView(heirLoss.plans.finasteride);
        click(heirLoss.plans.finasteride.addToChart);
        click(heirLoss.plans.finasteride.addToChart);

        waitToBeVisible(cartComponent.header.title);
        expect(isDisplayed(cartComponent.header.title)).toBe(true);

        click(cartComponent.content.checkout);

        waitToBeVisible(questionaryPage.header.progressBar);
        expect(isDisplayed(questionaryPage.header.progressBar)).toBe(true);
        expect(isDisplayed(questionaryPage.content.title)).toBe(true);
        expect(isDisplayed(questionaryPage.content.question)).toBe(true);
        expect(isDisplayed(questionaryPage.content.list)).toBe(true);
        expect(isDisplayed(questionaryPage.content.button)).toBe(true);
        expect(isDisplayed(questionaryPage.footer.privacyPolicy)).toBe(true);
        expect(isDisplayed(questionaryPage.footer.termsAndConditions)).toBe(true);
        expect(isDisplayed(questionaryPage.footer.termsOfSale)).toBe(true);
    });


});
