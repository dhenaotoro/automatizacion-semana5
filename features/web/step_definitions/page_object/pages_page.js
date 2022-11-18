'use strict';

const properties = require('../../../../properties.json');
const { expect } = require('chai');

module.exports = class PagesPage {

	constructor(driver) {
		this.driver = driver;
	}

	async ClickNewPageButton() {
		let newPostElement = await this.driver.$('a[href="#/editor/page/"]');
		await newPostElement.click();
	}

	async EnterPageTitle(title) {
		let element = await this.driver.$('textarea[placeholder="Page title"]');
		return await element.setValue(title);
	}

	async ClickOnPageContent() {
		let element = await this.driver.$('div.koenig-editor__editor.__mobiledoc-editor');
    	return await element.click();
	}

	async EnterPageContent(pageContent) {
		let element = await this.driver.$('div.koenig-editor__editor.__mobiledoc-editor > p');
    	return await element.setValue(pageContent);
	}

	async ClickOnPublishPageButton() {
		let element = await this.driver.$('button[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]');
    	return await element.click();
	}

	async ClickOnContinuePublishPageButton() {
		let element = await this.driver.$('button[class="gh-btn gh-btn-black gh-btn-large"]');
    	return await element.click();
	}

	async ClickOnPublishPageRightNowButton() {
		let element = await this.driver.$('button[class="gh-btn gh-btn-large gh-btn-pulse ember-view"]');
    	return await element.click();
	}

	async ClickOnBackToPageEditorButton() {
		let element = await this.driver.$('button[class="gh-back-to-editor"]');
    	return await element.click();
	}

	async ClickOnGoBackToPagesButton() {
		let element = await this.driver.$('a[href="#/pages/"]');
    	return await element.click();
	}

	async ValidateRecentPageMustToHaveTheTitle(expectedTitle) {
		let textFirstPage = await this.driver.$('ol[class="pages-list gh-list  "]').$$('li')[0].$('a').$('h3').getText();
    	return expect(expectedTitle).to.eql(textFirstPage);
	}

	async ValidateRecentPageMustNotToHaveTheTitle(expectedTitle) {
		let textFirstPage = await this.driver.$('ol[class="pages-list gh-list  "]').$$('li')[0].$('a').$('h3').getText();
    	return expect(expectedTitle).not.to.eql(textFirstPage);
	}

	async ClickFirstPageToEdit() {
		let firstPage = await this.driver.$('ol[class="pages-list gh-list  "]').$$('li')[0];
    	return await firstPage.click();
	}

	async ClickOnUpdatePageButton() {
		let element = await this.driver.$('button[class="gh-btn gh-btn-editor gh-editor-save-trigger green ember-view"]');
    	return await element.click();
	}

	async ClickOnUnpublishPageButton() {
		let element = await this.driver.$('button[class="gh-btn gh-btn-editor darkgrey gh-unpublish-trigger"]');
    	return await element.click();
	}

	async ClickOnUnpublishPageConfirmationButton() {
		let element = await this.driver.$('button[class="gh-revert-to-draft"]');
    	return await element.click();
	}

	async ClickOnPageSettingButton() {
		let element = await this.driver.$('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]');
    	return await element.click();
	}

	async ClickOnDeletePageButton() {
		let element = await this.driver.$('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]');
    	return await element.click();
	}

	async ClickOnConfirmationDeletePageButton() {
		let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    	return await element.click();
	}

	async ValidateRecentStatusPageMustBe(expectedStatus) {
		let textFirstPage = await this.driver.$('ol[class="pages-list gh-list  "]').$$('li')[0].$('a').$('p[class="gh-content-entry-status"]').$('span').getText();
    	return expect(expectedStatus).to.eql(textFirstPage);
	}

	async ClickOnSelectPublishPageModeButton() {
		let element = await this.driver.$('button[class="gh-publish-setting-title "]');
    	return await element.click();
	}

	async SelectScheduleForLateOption() {
		let element = await this.driver.$('fieldset').$('div[class="gh-publish-schedule"]').$$('div')[2];
    	return await element.click();
	}

	async ClickOnGoBackToPageEditorButton() {
		let element = await this.driver.$('button[class="gh-btn-editor gh-publish-back-button"]');
    	return await element.click();
	}
};