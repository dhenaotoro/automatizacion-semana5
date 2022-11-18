Feature: Tags functionality

@user1 @web
Scenario: Do a login and create a tag and see it on the tag list
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 5 seconds
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

@user2 @web
Scenario: Edit title and color tag
  Given I navigate to page "<URL>"
  And I wait for 19 seconds
  When I enter email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 3 seconds
  And I click on option Tags
  And I wait for 1 seconds
  And I click in first tag list
  And I wait for 1 seconds
  And I type a tag title as "Tag Edit Test 1"
  And I wait for 1 seconds   
  And I type a tag color as "650de7"
  And I wait for 1 seconds 
  And I click on save tag
  And I wait for 1 seconds
  And I click on option Tags
  Then The most recent tag title should be "Tag Edit Test 1" 

@user3 @web
Scenario: Reject Delete
  Given I navigate to page "<URL>"
  And I wait for 28 seconds
  When I enter email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 3 seconds
  And I click on option Tags
  And I wait for 1 seconds
  And I click in first tag list
  And I wait for 1 seconds
  And I click in delete tag
  And I wait for 1 seconds
  And I click in reject modal
  And I wait for 1 seconds  
  And I click on option Tags
  And I wait for 1 seconds  
  Then return the tags list


@user4 @web
Scenario: Do a login and create a tag and see it on the tag list
  Given I navigate to page "<URL>"
  And I wait for 39 seconds
  When I enter email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 3 seconds
  And I click on option Tags
  And I wait for 1 seconds
  And I click on New tag
  And I wait for 1 seconds  
  And I click on save tag
  And I wait for 1 seconds
  Then I expect to see error "You must specify a name for the tag"


@user5 @web
Scenario: Delete tag
  Given I navigate to page "<URL>"
  And I wait for 50 seconds
  When I enter email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 3 seconds
  And I click on option Tags
  And I wait for 1 seconds
  And I click in first tag list
  And I wait for 1 seconds
  And I click in delete tag
  And I wait for 1 seconds
  And I click in confirm modal
  And I wait for 1 seconds  
  Then Return the tags list