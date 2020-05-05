import { click, isDisplayed, waitToBeVisible, scrollIntoView, getText } from '../page_objects/base_page';
import ErectileDysfunctionPage from '../page_objects/ErectileDysfunctionPage';


/*global expect describe beforeAll beforeEach afterEach it browser*/
describe('Erectile-DysfunctionPage', () => {
    const erectileDysfunctionPage = new ErectileDysfunctionPage();
    const erectiledysfunction = require('../utils/Erectiledysfunction.json')


    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        erectileDysfunctionPage.get();
    });
    it('Check the "Choose Upwards" is displayed', () => {
        waitToBeVisible(erectileDysfunctionPage.header.sexHealth);
        expect(isDisplayed(erectileDysfunctionPage.header.sexHealth)).toBe(true);
        scrollIntoView(erectileDysfunctionPage.sildenafilContent.sildenafil);
        expect(isDisplayed(erectileDysfunctionPage.sildenafilContent.sildenafil)).toBe(true);
        expect(isDisplayed(erectileDysfunctionPage.sildenafilContent.sildenafilDescription)).toBe(true);
        expect(isDisplayed(erectileDysfunctionPage.sildenafilContent.sildenafilStartFromButton)).toBe(true);
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

    })
})