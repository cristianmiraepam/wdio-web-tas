
const { expect } = require('@wdio/globals')
const googleSearchPage = require('../pageobjects/google.search.page')

describe('Google Search', () => {
    it('should search for WebdriverIO', async () => {
        
        await googleSearchPage.open()
        await googleSearchPage.searchFor('WebdriverIO')

        const results = await googleSearchPage.results
        await expect(results).toBeElementsArrayOfSize({ gte: 1 })
        expect(results.length).toBeGreaterThan(0)
        expect(await results[0].getText()).toContain('WebdriverIO'.toLowerCase())
    })
})
