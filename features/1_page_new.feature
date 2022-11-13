Feature: Page functionality

@user1 @web
Scenario: Create new page
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I click login
  And I wait for 2 seconds
  And I click pages
  And I wait for 2 seconds
  And I click newPage
  And I wait for 2 seconds
  And I enter pageTitle "Kraken Test Page"
  And I click on page content
  And I type a page content as "Kraken Test Page Content"
  And I click on publish button
  And I wait for 2 seconds
  And I click on continue button
  And I wait for 2 seconds
  And I click on publish right now button
  And I wait for 2 seconds
  And I click on back to page editor
  And I wait for 2 seconds
  And I go back to pages
  And I wait for 2 seconds
  Then The most recent page title should be "Kraken Test Page"