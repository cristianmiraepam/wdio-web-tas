const { $ } = require('@wdio/globals');
const { Key } = require('webdriverio');

class GoogleSearchPage {
    /**
     * define selectors using getter methods
     */
    get searchBox() {
        return $('textarea[title=Buscar]');
    }

    get searchButton() {
        return $$('input[name=btnK]');
    }

    get results() {
        return $$('li[role=presentation]');
    }

    /**
     * Opens the Google search page
     */
    async open() {
        await browser.url('https://www.google.com');
    }

    /**
     * Performs a search for the given query
     * @param {string} query - The search term to input
     */
    async searchFor(query) {
        await this.searchBox.setValue(query);
        await browser.keys(Key.Enter);
    }

}

module.exports = new GoogleSearchPage();
