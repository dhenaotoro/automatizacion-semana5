Feature: Page functionality

@user1 @web
Scenario: Edit first page
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I signin into ghost admin
  And I wait for 2 seconds
  And I click pages
  And I wait for 2 seconds
  And I click firt page to edit
  And I wait for 2 seconds
  And I enter pageTitle "Kraken Test Page edited"
  And I click on page content
  And I type a page content as " edited"
  And I click on update button
  And I wait for 2 seconds
  And I click on confirm update button
  And I wait for 2 seconds
  And I go back to pages
  And I wait for 2 seconds
  Then The most recent page title should be "Kraken Test Page edited"