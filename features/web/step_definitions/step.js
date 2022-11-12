const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click sign in', async function() {
    let element = await this.driver.$('#ember7');
    return await element.click();
});

When('I click on option Posts', async function() {
    let element = await this.driver.$('#ember22');
    return await element.click();
});

When('I click on New post', async function() {
    let element = await this.driver.$('section.view-actions > a');
    return await element.click();
});

When('I type a post title as {kraken-string}', async function (postTitle) {
    let element = await this.driver.$('textarea.ember-text-area');
    return await element.setValue(postTitle);
})

When('I click on post content', async function() {
    let element = await this.driver.$('div.koenig-editor__editor.__mobiledoc-editor');
    return await element.click();
});

When('I type a post content as {kraken-string}', async function (postContent) {
    let element = await this.driver.$('div.koenig-editor__editor.__mobiledoc-editor > p');
    return await element.setValue(postContent);
});

When('I click on publish', async function () {
    let element = await this.driver.$('.gh-publish-trigger span');
    return await element.click();
});

When('I click on continue, final review', async function () {
    let element = await this.driver.$('.gh-btn-large span');
    return await element.click();
});

When('I click on publish post, right now', async function () {
    let element = await this.driver.$('.gh-btn-large span');
    return await element.click();
});

When('I click on publish post, on 2 days', async function () {
    let element = await this.driver.$('.gh-btn-large span');
    return await element.click();
});


When('I click on back to editor', async function () {
    let element = await this.driver.$('.gh-back-to-editor span');
    return await element.click();
});

When('I click on back to editor for scheduled posts', async function () {
    let element = await this.driver.$('.gh-btn-editor:not(.gh-publish-trigger) span');
    return await element.click();
});

When('I go back to posts', async function () {
    let element = await this.driver.$('.gh-btn-editor:not(.gh-publish-trigger) span');
    return await element.click();
});

Then('The result should be {kraken-string}', async function (expectedTitle) {
    let elements = await this.driver.$$('.gh-posts-list-item-labs .gh-content-entry-title');
    return Promise.all(
        elements.map(async(element) => {
            return await element.getText();
        })
    ).then(async(texts) => { 
        let findedText = texts.find(text => text === expectedTitle);
        return await expect(findedText).not.to.eql(undefined);
    });
});

When('I click on right now option', async function () {
    let element = await this.driver.$('.gh-publish-setting.last > button');
    return await element.click();
});

When('I click on schedule for later', async function () {
    let element = await this.driver.$('div .gh-publish-schedule .gh-radio:nth-child(2)');
    return await element.click();
});

When('I click on datepicker', async function () {
    let element = await this.driver.$('div .ember-power-calendar');
    return await element.click();
});

When('I select {kraken-string} days after', async function (days) {
    let date = new Date();
    date.setDate(date.getDate() + parseInt(days));
    let element = await this.driver.$('div .ember-power-calendar > div:first-child > div:first-child > input');
    return await element.setValue(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
});




