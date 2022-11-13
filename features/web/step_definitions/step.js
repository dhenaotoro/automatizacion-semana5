const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('input[type="email"]');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('input[type="password"]');
    return await element.setValue(password);
});

When('I click login', async function() {
    let element = await this.driver.$('#ember7');
    return await element.click();
});

When('I click pages', async function() {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
});

When('I click newPage', async function() {
    let element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
});

When('I enter pageTitle {kraken-string}', async function (title) {
    let element = await this.driver.$('textarea[placeholder="Page title"]');
    return await element.setValue(title);
});

When('I click on page content', async function() {
    let element = await this.driver.$('div.koenig-editor__editor.__mobiledoc-editor');
    return await element.click();
});

When('I type a page content as {kraken-string}', async function (pageContent) {
    let element = await this.driver.$('div.koenig-editor__editor.__mobiledoc-editor > p');
    return await element.setValue(pageContent);
});

When('I click on publish button', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]');
    return await element.click();
});

When('I click on continue button', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-black gh-btn-large"]');
    return await element.click();
});

When('I click on publish right now button', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-large gh-btn-pulse ember-view"]');
    return await element.click();
});

When('I click on back to page editor', async function () {
    let element = await this.driver.$('button[class="gh-back-to-editor"]');
    return await element.click();
});

When('I go back to pages', async function () {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
});

Then('The most recent page title should be {kraken-string}', async function (expectedTitle) {
    let textFirstPage = await this.driver.$('ol[class="pages-list gh-list  feature-memberAttribution"]').$$('li')[0].$('a').$('h3').getText();
    return await expect(expectedTitle).to.eql(textFirstPage);
});

Then('The most recent page title should not be {kraken-string}', async function (expectedTitle) {
    let textFirstPage = await this.driver.$('ol[class="pages-list gh-list  "]').$$('li')[0].$('a').$('h3').getText();
    return await expect(expectedTitle).not.to.eql(textFirstPage);
});

Then('I click firt page to edit', async function () {
    let firstPage = await this.driver.$('ol[class="pages-list gh-list  "]').$$('li')[0];
    return await firstPage.click();
});

When('I click on update button', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-editor gh-editor-save-trigger green ember-view"]');
    return await element.click();
});

When('I click on unpublish button', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-editor darkgrey gh-unpublish-trigger"]');
    return await element.click();
});

When('I click on unpublish confirmation button', async function () {
    let element = await this.driver.$('button[class="gh-revert-to-draft"]');
    return await element.click();
});

When('I click on page setting button', async function () {
    let element = await this.driver.$('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]');
    return await element.click();
});

When('I click on delete page button', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]');
    return await element.click();
});

When('I click on confirmation delete page button', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    return await element.click();
});

Then('The most recent page status should be {kraken-string}', async function (expectedTitle) {
    let textFirstPage = await this.driver.$('ol[class="pages-list gh-list  "]').$$('li')[0].$('a').$('p[class="gh-content-entry-status"]').$('span').getText();
    return await expect(expectedTitle).to.eql(textFirstPage);
});

When('I click on select publish page mode button', async function () {
    let element = await this.driver.$('button[class="gh-publish-setting-title "]');
    return await element.click();
});

When('I select schedule for late option', async function () {
    let element = await this.driver.$('fieldset').$('div[class="gh-publish-schedule"]').$$('div')[2];
    return await element.click();
});

When('I click on go back to editor', async function () {
    let element = await this.driver.$('button[class="gh-btn-editor gh-publish-back-button"]');
    return await element.click();
});



When('I click sign in', async function() {
    let element = await this.driver.$('#ember7');
    return await element.click();
});

When('I click on option Posts', async function() {
    let element = await this.driver.$('ul.gh-nav-list.gh-nav-manage > li:first-child');
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

When('I click on Drafts', async function () {
    let elements = await this.driver.$$('ul.gh-nav-view-list > li:first-child > a');
    return await elements[0].click();
});

When('I click on first draft', async function () {
    let elements = await this.driver.$$('.gh-post-list-button a.gh-post-list-cta');
    return await elements[0].click();
});

When('I click on menu info', async function () {
    let elements = await this.driver.$$('button.gh-btn-editor');
    return await elements[2].click();
});

When('I click on delete button', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button');
    return await element.click();
});

When('I click on modal delete button', async function () {
    let element = await this.driver.$('.modal-footer .gh-btn:not(:first-child)');
    return await element.click();
});

Then('The result should not be {kraken-string}', async function (expectedTitle) {
    let elements = await this.driver.$$('.gh-posts-list-item-labs .gh-content-entry-title');
    return Promise.all(
        elements.map(async(element) => {
            return await element.getText();
        })
    ).then(async(texts) => { 
        let findedText = texts.find(text => text === expectedTitle);
        return await expect(findedText).to.be.an('undefined');
    });
});

When('I click on Published', async function () {
    let elements = await this.driver.$$('ul.gh-nav-view-list > li:nth-child(3) > a');
    return await elements[0].click();
});

When('I click on first published', async function () {
    let elements = await this.driver.$$('.gh-post-list-button a.gh-post-list-cta');
    return await elements[0].click();
});

Then('Should be 0 conversions', async function () {
    let element = await this.driver.$('.gh-tabs-analytics .tab-list h3');
    return expect(await element.getText()).to.eql('0');
});

// STEPS TAGS

When('I click on option Tags', async function() {
    let element = await this.driver.$('a[href="#/tags/"');
    return await element.click();
});

When('I click on New tag', async function() {
    let element = await this.driver.$('a[href="#/tags/new/"');
    return await element.click();
});

When('I type a tag title as {string}', async function (title){
    let element = await this.driver.$('input[id="tag-name"]');
    return await element.setValue(title)
});

When('I type a tag slug as {string}', async function (slug){
    let element = await this.driver.$('input[id="tag-slug"]');
    return await element.setValue(slug)
});

When('I type a tag description as {string}', async function (description){
    let element = await this.driver.$('textarea[id="tag-description"]');
    return await element.setValue(description)
});

When('I type a tag color as {string}', async function (color){
    let element = await this.driver.$('input[name="accent-color"]');
    return await element.setValue(color)
});

When('I click on expand buttons', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-expand"');
    return await element.click();
});

When('I type a tag meta title as {string}', async function (title){
    let element = await this.driver.$('input[id="meta-title"]');
    return await element.setValue(title)
});

When('I type a tag meta description as {string}', async function (description){
    let element = await this.driver.$('textarea[id="meta-description"]');
    return await element.setValue(description)
});

When('I type a tag meta url as {string}', async function (url){
    let element = await this.driver.$('input[id="canonical-url"]');
    return await element.setValue(url)
});

When('I click on save tag', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
    return await element.click();
});

Then('The most recent tag title should be {string}', async function (expectedTitle) {
    let textFirstPage = await this.driver.$('ol[class="tags-list gh-list "]').$$('li[class="gh-list-row gh-tags-list-item"]')[0].$('a').$('h3[class="gh-tag-list-name"]').getText();
    return await expect(expectedTitle).to.eql(textFirstPage);
});

When('I click in first tag list', async function() {
    let element = await this.driver.$('a[href="#/tags/tag-test-1/"]');
    return await element.click();
});

When('I click in delete tag', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon"]');
    return await element.click();
});

When('I click in confirm modal', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    return await element.click();
});

Then('Return the tags list', async function () {    
    let textFirstPage = await this.driver.$('div[class="gh-canvas-header sticky"]').$('header[class="gh-canvas-header-content"]').$('h2').getText();
    return await expect("Tags").to.eql(textFirstPage);
});

When('I click in reject modal', async function() {
    let element = await this.driver.$('button[class="gh-btn"]');
    return await element.click();
});

Then('I expect to see error {string}', error => async function()  {
    $('div=You must specify a name for the tag.').waitForDisplayed(5000);
    var alertText = await this.driver.$('span[class="error"]').$('p[class="response"]').getText();
    return await expect(alertText).to.include(error);
});
