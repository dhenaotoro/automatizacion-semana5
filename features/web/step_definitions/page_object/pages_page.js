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
		let element = await this.driver.$('textarea[placeholder="Page Title"]');
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
		let element = await this.driver.$('div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]');
    	return await element.click();
	}

	async ClickOnContinuePublishPageButton() {
		let element = await this.driver.$('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]');
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
		let textFirstPage = await this.driver.$('ol[class="gh-list "]').$$('li')[1].$('a[class="ember-view permalink gh-list-data gh-post-list-title"]').$('h3[class="gh-content-entry-title"]').getText();
    	return expect(expectedTitle).to.eql(textFirstPage);
	}

	async ValidateRecentPageMustNotToHaveTheTitle(expectedTitle) {
		let textFirstPage = await this.driver.$('h3').getText();
    	return expect(expectedTitle).not.to.eql(textFirstPage);
	}

	async ClickFirstPageToEdit() {
		let firstPage = await this.driver.$('ol[class="gh-list "]').$$('li')[1];
    	return await firstPage.click();
	}

	async ClickOnUpdatePageButton() {
		let element = await this.driver.$('div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]');
    	return await element.click();
	}

	async ClickOnUpdateConfirmButton() {
		let element = await this.driver.$('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]');
    	return await element.click();
	}

	async ClickOnUnpublishPageButton() {
		let element = await this.driver.$('div[class="gh-publishmenu-radio-button"]');
    	return await element.click();
	}

	async ClickOnUnpublishPageConfirmationButton() {
		let element = await this.driver.$('button[class="gh-revert-to-draft"]');
    	return await element.click();
	}

	async ClickOnPageSettingButton() {
		let element = await this.driver.$('button[class="post-settings"]');
    	return await element.click();
	}

	async ClickOnDeletePageButton() {
		let element = await this.driver.$('div[class="settings-menu-content"]').$("form").$('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]');
    	return await element.click();
	}

	async ClickOnConfirmationDeletePageButton() {
		let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    	return await element.click();
	}

	async ValidateRecentStatusPageMustBe(expectedStatus) {
		let textFirstPage = await this.driver.$('ol[class="gh-list "]').$$('li')[1].$('a[class="ember-view permalink gh-list-data gh-post-list-status"]').$('div[class="flex items-center"]').$('span[class="gh-content-status-draft gh-badge gh-badge-purple nowrap"]').getText();
    	return expect(expectedStatus).to.eql(textFirstPage);
	}

	async ClickOnSelectPublishPageModeButton() {
		let element = await this.driver.$('div[class="ember-view"]').$('section[class="gh-publishmenu-content"]').$('div[class="gh-publishmenu-section"]').$$('div')[1].$('div[class="gh-publishmenu-radio "]').$$('div')[0];
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