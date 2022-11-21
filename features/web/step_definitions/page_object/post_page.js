'use strict';

const properties = require('../../../../properties.json');
const { expect } = require('chai');

module.exports = class PostPage {

    constructor(driver) {
		this.driver = driver;
	}

    async ClickPostOption() {
        let element = await this.driver.$('ul.gh-nav-list.gh-nav-manage > li:first-child');
        this.driver.takeScreenshot();
        return await element.click();
    }

    async ClickOnNewPostButton() {
        let element = await this.driver.$('section.view-actions > a');
        this.driver.takeScreenshot();
        return await element.click();
    }

    async TypePostTitle (postTitle) {
        let element = await this.driver.$('textarea.ember-text-area');
        this.driver.takeScreenshot();
        return await element.setValue(postTitle);
    }

    async ClickTextAreaPostContent() {
        let element = await this.driver.$('div.koenig-editor__editor.__mobiledoc-editor');
        this.driver.takeScreenshot();
        return await element.click();
    }

    async TypeAPostContent (postContent) {
        let element = await this.driver.$('div.koenig-editor__editor.__mobiledoc-editor > p');
        return await element.setValue(postContent);
    }

    async ClickOnPublishButton () {
        let element = await this.driver.$('.gh-publish-trigger span');
        this.driver.takeScreenshot();
        return await element.click();
    }

    async ClickOnContinueFinalReviewButton () {
        let element = await this.driver.$('.gh-btn-large span');
        this.driver.takeScreenshot();
        return await element.click();
    }

    async ClickOnPublishPostRightNow () {
        let element = await this.driver.$('.gh-btn-large span');
        this.driver.takeScreenshot();
        return await element.click();
    }

    async ClickOnPublishPostOn2Days () {
        let element = await this.driver.$('.gh-btn-large span');
        this.driver.takeScreenshot();
        return await element.click();
    }

    async ClickOnBackToEditorButton () {
        let element = await this.driver.$('.gh-back-to-editor span');
        this.driver.takeScreenshot();
        return await element.click();
    }

    async ClickOnBackToEditorButtonForScheduledPost () {
        let element = await this.driver.$('.gh-btn-editor:not(.gh-publish-trigger) span');
        this.driver.takeScreenshot();
        return await element.click();
    }

    async ClickToGoBackToPostList () {
        let element = await this.driver.$('.gh-btn-editor:not(.gh-publish-trigger) span');
        this.driver.takeScreenshot();
        return await element.click();
    }

    async SelectFirstItemFromPostList () {
        let elements = await this.driver.$$('.gh-posts-list-item-labs .gh-content-entry-title');
        this.driver.takeScreenshot();
        return Promise.all(
            elements.map(async(element) => {
                return await element.getText();
            })
        );
    }

    async ClickRightNowOption () {
        let element = await this.driver.$('.gh-publish-setting.last > button');
        this.driver.takeScreenshot();
        return await element.click();
    }

    async ClickOnScheduleForLaterButton () {
        let element = await this.driver.$('div .gh-publish-schedule .gh-radio:nth-child(2)');
        this.driver.takeScreenshot();
        return await element.click();
    }

    async ClickOnDatePickerButton () {
        let element = await this.driver.$('div .ember-power-calendar');
        this.driver.takeScreenshot();
        return await element.click();
    }

    async Select2DaysAfter (days) {
        let date = new Date();
        date.setDate(date.getDate() + parseInt(days));
        let element = await this.driver.$('div .ember-power-calendar > div:first-child > div:first-child > input');
        this.driver.takeScreenshot();
        return await element.setValue(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
    }

    async ClickOnDraftsOption () {
        let elements = await this.driver.$$('ul.gh-nav-view-list > li:first-child > a');
        this.driver.takeScreenshot();
        return await elements[0].click();
    }

    async ClickOnFirstDraft () {
        let elements = await this.driver.$$('.gh-post-list-button a.gh-post-list-cta');
        this.driver.takeScreenshot();
        return await elements[0].click();
    }

    async ClickOnMenuInfoButton () {
        let elements = await this.driver.$$('button.gh-btn-editor');
        this.driver.takeScreenshot();
        return await elements[2].click();
    }

    async ClickOnDeleteButton () {
        let element = await this.driver.$('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button');
        this.driver.takeScreenshot();
        return await element.click();
    }

    async ClickOnModalDeleteButton () {
        let element = await this.driver.$('.modal-footer .gh-btn:not(:first-child)');
        this.driver.takeScreenshot();
        return await element.click();
    }

    async ClickOnPublishedOption () {
        let elements = await this.driver.$$('ul.gh-nav-view-list > li:nth-child(3) > a');
        this.driver.takeScreenshot();
        return await elements[0].click();
    }

    async ClickOnFirstPublishedOption () {
        let elements = await this.driver.$$('.gh-post-list-button a.gh-post-list-cta');
        this.driver.takeScreenshot();
        return await elements[0].click();
    }

    async SelectFirstStatistic () {
        let element = this.driver.$('.gh-tabs-analytics .tab-list h3')
        this.driver.takeScreenshot();
        return await element;
    }
}