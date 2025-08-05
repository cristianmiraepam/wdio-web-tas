const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const ABTestPage = require('../pageobjects/abtest.page')

describe('My heroku app tests', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
    it('should open the AB test page', async () => {
        await ABTestPage.open()
        await expect(ABTestPage.header).toBeExisting()
        await expect(ABTestPage.header).toHaveText('A/B Test Control')

    })
})

