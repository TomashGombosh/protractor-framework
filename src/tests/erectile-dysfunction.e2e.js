import { click, clickOnDiv, isDisplayed, waitToBeVisible, scrollIntoView, getText, doubleClick } from '../page_objects/base_page';
import ErectileDysfunctionPage from '../page_objects/ErectileDysfunctionPage';
import ViagraSildenafilPage from '../page_objects/ViagraSildenafilPage';

/*global expect describe beforeAll beforeEach afterEach it browser*/
describe('Erectile-DysfunctionPage', () => {
    const erectileDysfunctionPage = new ErectileDysfunctionPage();
    const erectiledysfunction = require('../utils/Erectiledysfunction.json')
    const viagraSildenafilPage = new ViagraSildenafilPage();

    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        erectileDysfunctionPage.get();
        waitToBeVisible(erectileDysfunctionPage.header.sexHealth);
        expect(isDisplayed(erectileDysfunctionPage.header.sexHealth)).toBe(true);
        scrollIntoView(erectileDysfunctionPage.sildenafilContent.sildenafil);
        expect(isDisplayed(erectileDysfunctionPage.sildenafilContent.sildenafil)).toBe(true);
        expect(isDisplayed(erectileDysfunctionPage.sildenafilContent.sildenafilDescription)).toBe(true);
        expect(isDisplayed(erectileDysfunctionPage.sildenafilContent.sildenafilStartFromButtonText)).toBe(true);
        expect(isDisplayed(erectileDysfunctionPage.tadalafilContent.tadalafil)).toBe(true);
        expect(isDisplayed(erectileDysfunctionPage.tadalafilContent.tadalafilDescription)).toBe(true);
        expect(isDisplayed(erectileDysfunctionPage.tadalafilContent.tadalafilStartFromButton)).toBe(true);
        expect(isDisplayed(erectileDysfunctionPage.viagraConnectContent.viagraConnect)).toBe(true);
        expect(isDisplayed(erectileDysfunctionPage.viagraConnectContent.viagraConnectDescription)).toBe(true);
        expect(isDisplayed(erectileDysfunctionPage.viagraConnectContent.viagraConnectStartFromButton)).toBe(true);
        expect(isDisplayed(erectileDysfunctionPage.viagraContent.viagra)).toBe(true);
        expect(isDisplayed(erectileDysfunctionPage.viagraContent.viagraDescription)).toBe(true);
        expect(isDisplayed(erectileDysfunctionPage.viagraContent.viagraStartFromButton)).toBe(true);
        expect(getText(erectileDysfunctionPage.sildenafilContent.sildenafilDescription)).toEqual(erectiledysfunction.sildenafil.shortDescriptionSildenafil);
        expect(getText(erectileDysfunctionPage.tadalafilContent.tadalafilDescription)).toEqual(erectiledysfunction.tadalafil.shortDescriptionTadalafil);
        expect(getText(erectileDysfunctionPage.viagraConnectContent.viagraConnectDescription)).toEqual(erectiledysfunction.viagraConnect.shortDescriptionViagraConnect);
        expect(getText(erectileDysfunctionPage.viagraContent.viagraDescription)).toEqual(erectiledysfunction.viagra.shortDescriptionViagra);
        click(erectileDysfunctionPage.sildenafilContent.sildenafilStartFromButtonClick);
        waitToBeVisible(viagraSildenafilPage.header.vigraSildenafil);
        expect(isDisplayed(viagraSildenafilPage.header.vigraSildenafil)).toBe(true);
        expect(isDisplayed(viagraSildenafilPage.title.standard)).toBe(true);
        expect(isDisplayed(viagraSildenafilPage.title.high)).toBe(true);
        expect(isDisplayed(viagraSildenafilPage.title.six)).toBe(true);
        expect(isDisplayed(viagraSildenafilPage.title.eight)).toBe(true);
        expect(isDisplayed(viagraSildenafilPage.title.ten)).toBe(true);
        expect(isDisplayed(viagraSildenafilPage.title.twelve)).toBe(true);
        expect(isDisplayed(viagraSildenafilPage.title.sixEveryMonth)).toBe(true);
        expect(isDisplayed(viagraSildenafilPage.title.eighteenEveryThreeMonths)).toBe(true);
        doubleClick(viagraSildenafilPage.title.addToChartButton);
        waitToBeVisible(viagraSildenafilPage.title.labelText);
        expect(isDisplayed(viagraSildenafilPage.title.labelText)).toBe(true);
    });
    it('Check the "Sex Health" is displayed', () => {
        click(viagraSildenafilPage.title.clickXCrossButton);
        waitToBeVisible(viagraSildenafilPage.title.labelTextEmpty);
        expect(isDisplayed(viagraSildenafilPage.title.labelTextEmpty)).toBe(true);
        expect(isDisplayed(viagraSildenafilPage.title.shopHair)).toBe(true);
        expect(isDisplayed(viagraSildenafilPage.title.shopED)).toBe(true);
        expect(isDisplayed(viagraSildenafilPage.title.shopSkin)).toBe(true);
        expect(isDisplayed(viagraSildenafilPage.title.shopDailyHealth)).toBe(true);
    })
    it('Added new goods to the cart', () => {
        click(viagraSildenafilPage.title.backButton);
        click(viagraSildenafilPage.title.eight);
        click(viagraSildenafilPage.title.addToChartButton);
        waitToBeVisible(viagraSildenafilPage.title.itemHasreplacedText);
        expect(isDisplayed(viagraSildenafilPage.title.itemHasreplacedText));
        expect(getText(viagraSildenafilPage.title.itemHasreplacedText)).toEqual(erectiledysfunction.replacedText.itemHasReplaced)
        expect(isDisplayed(viagraSildenafilPage.title.undoButton));
        click(viagraSildenafilPage.title.undoButton);
    })
})