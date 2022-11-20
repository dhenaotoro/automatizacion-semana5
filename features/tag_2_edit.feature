Feature: Tags functionality

@user1 @web
Scenario: Edit title and color tag
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I signin into ghost admin   
  And I wait for 2 seconds   
  And I click on option Tags
  And I wait for 2 seconds
  And I click in first tag list
  And I wait for 2 seconds
  And I type a tag title as "Tag Edit Test 1"
  And I wait for 2 seconds   
  And I type a tag color as "650de7"
  And I wait for 2 seconds 
  And I click on save tag
  And I wait for 2 seconds
  And I click on option Tags
  Then The most recent tag title should be "Tag Edit Test 1" 
