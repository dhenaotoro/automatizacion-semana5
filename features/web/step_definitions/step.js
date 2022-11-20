const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

const SigninPage = require('./page_object/signin_page.js');
const DashboardPage = require('./page_object/dashboard_page.js');
const PagesPage = require('./page_object/pages_page.js');
const TagPage = require('./page_object/tag_page.js');
const PostPage = require('./page_object/post_page.js')

const signinPage = new SigninPage(this.driver);
const dashboardPage = new DashboardPage(this.driver);
const pagesPage = new PagesPage(this.driver);
const tagPage = new TagPage(this.driver);
const postPage = new PostPage(this.driver);

// Sign in capability
Given('I signin into ghost admin', signinPage.EnterLoginCredentials);

// Pages Capabilities
When('I click pages', dashboardPage.ClickPagesLink);

When('I click newPage', pagesPage.ClickNewPageButton);

When('I enter pageTitle {string}', pagesPage.EnterPageTitle);

When('I type a page content as {string}', pagesPage.EnterPageContent);

When('I click on page content', pagesPage.ClickOnPageContent);

When('I click on publish button', pagesPage.ClickOnPublishPageButton);

When('I click on continue button', pagesPage.ClickOnContinuePublishPageButton);

When('I click on publish right now button', pagesPage.ClickOnPublishPageRightNowButton);

When('I click on back to page editor', pagesPage.ClickOnBackToPageEditorButton);

When('I go back to pages', pagesPage.ClickOnGoBackToPagesButton);

Then('The most recent page title should be {string}', pagesPage.ValidateRecentPageMustToHaveTheTitle);

Then('The most recent page title should not be {string}', pagesPage.ValidateRecentPageMustNotToHaveTheTitle);

Then('I click firt page to edit', pagesPage.ClickFirstPageToEdit);

When('I click on update button', pagesPage.ClickOnUpdatePageButton);

When('I click on unpublish button', pagesPage.ClickOnUnpublishPageButton);

When('I click on unpublish confirmation button', pagesPage.ClickOnUnpublishPageConfirmationButton);

When('I click on page setting button', pagesPage.ClickOnPageSettingButton);

When('I click on delete page button', pagesPage.ClickOnDeletePageButton);

When('I click on confirmation delete page button', pagesPage.ClickOnConfirmationDeletePageButton);

Then('The most recent page status should be {string}', pagesPage.ValidateRecentStatusPageMustBe);

When('I click on select publish page mode button', pagesPage.ClickOnSelectPublishPageModeButton);

When('I select schedule for late option', pagesPage.SelectScheduleForLateOption);

When('I click on go back to page editor', pagesPage.ClickOnGoBackToPageEditorButton);

When('I click on option Posts', postPage.ClickPostOption);

When('I click on New post', postPage.ClickOnNewPostButton);

When('I type a post title as {kraken-string}', postPage.TypePostTitle);

When('I click on post content', postPage.ClickTextAreaPostContent);

When('I type a post content as {kraken-string}', postPage.TypeAPostContent);

When('I click on publish', postPage.ClickOnPublishButton);

When('I click on continue, final review', postPage.ClickOnContinueFinalReviewButton);

When('I click on publish post, right now', postPage.ClickOnPublishPostRightNow);

When('I click on publish post, on 2 days', postPage.ClickOnPublishPostOn2Days);

When('I click on back to editor', postPage.ClickOnBackToEditorButton);

When('I click on back to editor for scheduled posts', postPage.ClickOnBackToEditorButtonForScheduledPost);

When('I go back to posts', postPage.ClickToGoBackToPostList);

Then('The result should be {kraken-string}', async function (expectedTitle) {
    postPage.SelectFirstItemFromPostList().then(async(texts) => { 
        let findedText = texts.find(text => text === expectedTitle);
        return await expect(findedText).not.to.eql(undefined);
    })
});

When('I click on right now option', postPage.ClickRightNowOption);

When('I click on schedule for later', postPage.ClickOnScheduleForLaterButton);

When('I click on datepicker', postPage.ClickOnDatePickerButton);

When('I select {kraken-string} days after', postPage.Select2DaysAfter);

When('I click on Drafts', postPage.ClickOnDraftsOption);

When('I click on first draft', postPage.ClickOnFirstDraft);

When('I click on menu info', postPage.ClickOnMenuInfoButton);

When('I click on delete button', postPage.ClickOnDeleteButton);

When('I click on modal delete button', postPage.ClickOnModalDeleteButton);

Then('The result should not be {kraken-string}', async function (expectedTitle) {
    postPage.SelectFirstItemFromPostList().then(async(texts) => { 
        let findedText = texts.find(text => text === expectedTitle);
        return await expect(findedText).to.be.an('undefined');
    });
});

When('I click on Published', postPage.ClickOnPublishedOption);

When('I click on first published', postPage.ClickOnFirstPublishedOption);

Then('Should be 0 conversions', async function () {
    let element = postPage.SelectFirstStatistic()
    return expect(await element.getText()).to.eql('0');
});

// STEPS TAGS


When('I click on option Tags', tagPage.clickToTagLink);

When('I click on New tag', tagPage.clickToNewTagButton);

When('I type a tag title as {string}', tagPage.putInputTagName);

When('I type a tag description as {string}', tagPage.putTextAreaTagDescription);

When('I type a tag color as {string}', tagPage.putInputTagColor);

When('I click on expand buttons', tagPage.clickToButtonTagExpand);

When('I type a tag meta title as {string}',tagPage.putInputTagMetaTitle);

When('I type a tag meta description as {string}', tagPage.putTextAreaTagMetaDescription);

When('I type a tag meta url as {string}',tagPage.putInputTagCannonicalUrl);

When('I click on save tag', tagPage.clickToButtonSaveTag);

Then('The most recent tag title should be {string}', tagPage.verifyTitleTag);

When('I click in first tag list', tagPage.clickToLinkFirstTagList);

When('I click in delete tag', tagPage.clickToButtonTagDelete);

When('I click in confirm modal', tagPage.clickToButtonTagAcceptModal);

Then('Return the tags list', tagPage.clickToTagLink);

When('I click in reject modal', tagPage.clickToButtonTagRejectModal);

Then('I expect to see error {string}', tagPage.messageError);
