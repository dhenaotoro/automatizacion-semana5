Feature: Tags functionality

@user1 @web
Scenario: Delete tag
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I signin into ghost admin
  And I wait for 2 seconds
  And I click on option Tags
  And I wait for 2 seconds
  And I click in first tag list
  And I wait for 2 seconds
  And I click in delete tag
  And I wait for 2 seconds
  And I click in confirm modal
  And I wait for 2 seconds  
  Then Return the tags list