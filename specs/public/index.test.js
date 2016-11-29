const assert = require('assert')

describe('index page', function() {
  it('should be a pending test')

  it('should have the right title', function() {
    browser.url('http://localhost:4444/')
    const title = browser.getTitle()

    assert.equal(title, 'Try to use Testingbot')
  })
})
