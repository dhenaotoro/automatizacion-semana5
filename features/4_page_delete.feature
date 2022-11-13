Feature: Page functionality

@user1 @web
Scenario: Delete first page
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I click login
  And I wait for 2 seconds
  And I click pages
  And I wait for 2 seconds
  And I click firt page to edit
  And I wait for 2 seconds
  And I click on page setting button
  And I wait for 2 seconds
  And I click on delete page button
  And I wait for 2 seconds
  And I click on confirmation delete page button
  And I wait for 2 seconds
  Then The most recent page title should not be "Kraken Test Page edited"