Feature: Tags functionality

@user1 @web
Scenario: Do a login and create a tag and see it on the tag list
  Given I navigate to page "<URL>"
  And I wait for 3 seconds
  When I signin into ghost admin  
  And I click on option Tags
  And I wait for 1 seconds
  And I click on New tag
  And I wait for 1 seconds
  And I type a tag title as "Tag Test 1"
  And I wait for 1 seconds  
  And I type a tag description as "Tag description Test 1 MISO"
  And I wait for 1 seconds
  And I type a tag color as "15171A"
  And I wait for 1 seconds
  And I click on expand buttons
  And I wait for 1 seconds
  And I type a tag meta title as "Tag Meta title Test 1 meta title"
  And I wait for 1 seconds
  And I type a tag meta description as "Tag Meta description Test 1 meta description"
  And I wait for 1 seconds
  And I type a tag meta url as "http://localhost:2369/test"
  And I wait for 1 seconds
  And I click on save tag
  And I wait for 1 seconds
  And I click on option Tags
  Then The most recent tag title should be "Tag Test 1" 