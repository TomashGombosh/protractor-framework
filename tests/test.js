'use strict'

import { get } from '../page_objects/base_page';
import { fillLoginAndPasswordIntoWindow } from '../page_objects/pre_login_page';
import { getUserName, getPassword } from '../utils/constants';
describe('Collection data', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        get(browser.baseUrl);
    });

    it('Demo tests', () => {
        fillLoginAndPasswordIntoWindow(getUserName, getPassword);
    });
});
