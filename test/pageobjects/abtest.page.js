const { $ } = require('@wdio/globals')
const Page = require('./page');

class ABTestPage extends Page {
    get abLink() {
        return $('a[href="/abtest"]')
    }
    get header() {
        return $('div.example h3')
    }

    async open() {
        return super.open('abtest')
    }
}

module.exports = new ABTestPage()