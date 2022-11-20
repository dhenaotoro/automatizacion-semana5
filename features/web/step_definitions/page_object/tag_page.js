'use strict';

const properties = require('../../../../properties.json');
const { expect } = require('chai');

const tagLocators = {
    buttonTagLink:"a[href='#/tags/'",
    newTagButton: "a[href='#/tags/new/'",
    inputTagName: "input[id='tag-name']",
    textAreaTagDescription: "textarea[id='tag-description']",
    inputTagColor: "input[placeholder='abcdef']",
    buttonTagExpand: "button[class='gh-btn']",
    inputTagMetaTitle: "input[id='meta-title']",
    textAreaTagMetaDescription: "textarea[id='meta-description']",
    inputTagCannonicalUrl: "input[id='canonical-url']",
    buttonSaveTag: "button[class='gh-btn gh-btn-blue gh-btn-icon ember-view']",
    linkFirstTagList:"a[href='#/tags/tag-test-1/']",
    buttonLeave:"button[class='gh-btn gh-btn-red']",
    buttonTagDelete: "button[class='gh-btn gh-btn-red gh-btn-icon mb15']",
    buttonTagAcceptModal: "button[class='gh-btn gh-btn-red gh-btn-icon ember-view']",
    buttonTagRejectModal: "button[class='gh-btn']",
    messageError: "span[class='error']",
    tittleTag: "h2[class='gh-canvas-title']",
    tagName: "h3[class='gh-tag-list-name']",
    messageDiv: "div=You must specify a name for the tag."
  };

module.exports = class TagPage {
    constructor(driver) {
		this.driver = driver;
	}


    async clickToTagLink() {
        await this.driver.$(tagLocators.buttonTagLink).click();        
    }

    async clickToNewTagButton() {
        await this.driver.$(tagLocators.newTagButton).click();    
    }

    async putInputTagName(tagName) {
        await this.driver.$(tagLocators.inputTagName).setValue(tagName)
    }

    async putTextAreaTagDescription(tagDescription) {
        await this.driver.$(tagLocators.textAreaTagDescription).setValue(tagDescription)
    }

    async putInputTagColor(tagColor) {
        await this.driver.$(tagLocators.inputTagColor).setValue(tagColor)
    }

    async clickToButtonTagExpand() {
        await this.driver.$(tagLocators.buttonTagExpand).click()
    }

    async putInputTagMetaTitle(tagMetaTitle) {
        await this.driver.$(tagLocators.inputTagMetaTitle).setValue(tagMetaTitle)
    }

    async putTextAreaTagMetaDescription(tagMetaDescription) {
        await this.driver.$(tagLocators.textAreaTagMetaDescription).setValue(tagMetaDescription)
    }

    async putInputTagCannonicalUrl(tagMetaUrl) {
        await this.driver.$(tagLocators.inputTagCannonicalUrl).setValue(tagMetaUrl)
    }

    async clickToButtonSaveTag() {
        await this.driver.$(tagLocators.buttonSaveTag).click();  
    }

    async clickToLinkFirstTagList() {
        await this.driver.$(tagLocators.linkFirstTagList).click()
    }

    async clickToButtonTagDelete() {
        await this.driver.$(tagLocators.buttonTagDelete).click()
    }

    async clickToButtonTagAcceptModal() {
        await this.driver.$(tagLocators.buttonTagAcceptModal).click()
    }

    async clickToButtonTagRejectModal() {
        await this.driver.$(tagLocators.buttonTagRejectModal).click()
    }

    async verifyTitleTag(validateTagTest) {    
        await this.driver.$(tagLocators.tagName).then($items => {
            expect($items.find(item => item.innerText == validateTagTest))
        })
      }
      async clickToButtonLeaveModal() {
        await this.driver.$(tagLocators.buttonLeave).click()
    }

    async verifyTitleTag(titleTag) { 
        let textFirstPage = await this.driver.$(tagLocators.tagName).getText();
        return await expect(textFirstPage).to.eql(titleTag);
      }
      
      async  editColorAndTitleItems(tagTitle, tagColor){     
       await this.driver.$(tagLocators.inputTagName).clear()
       await this.driver.$(tagLocators.inputTagName).setValue(tagTitle);

       await this.driver.$(tagLocators.inputTagColor).clear()
       await this.driver.$(tagLocators.inputTagColor).setValue(tagColor)
    }

    async naviageteReturnList(nameTags){
        let textFirstPage = await this.driver.$(tagLocators.tittleTag).getText();
        return await expect(nameTags).to.eql(textFirstPage);       
    }
    async messageError(message) {       
        var alertText = await this.driver.$(tagLocators.messageError).getText();
        return await expect(alertText).to.include(message);
    }
}