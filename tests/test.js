this.demoTestGoogle = function (browser) {
  browser
    .url("http://localhost:3000/")
    .waitForElementVisible('body', 1000)
    .setValue('input[id=num1]', '10')
    .setValue('input[id=num2]', '5')
    .waitForElementVisible('button[name=calculate]', 1000)
    .click('button[name=calculate]')
    .pause(1000)
    .assert.value('input[id=result]', '2')
    .end();
};