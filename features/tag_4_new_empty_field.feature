Feature: Tags functionality

@user1 @web
Scenario: Do a login and create a tag and see it on the tag list
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I signin into ghost admin
  And I wait for 2 seconds
  And I click on option Tags
  And I wait for 2 seconds
  And I click on New tag
  And I wait for 2 seconds  
  And I click on save tag
  And I wait for 2 seconds
  Then I expect to see error "You must specify a name for the tag."