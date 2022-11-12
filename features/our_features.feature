Feature: Post functionality

@user1 @web

Scenario: Do a login and public a post and see it on the post list
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 10 seconds
  And I click on option Posts
  And I wait for 2 seconds
  And I click on New post
  And I wait for 2 seconds
  And I type a post title as "Post Test 1"
  And I wait for 2 seconds
  And I click on post content
  And I wait for 2 seconds
  And I type a post content as "Post content 1"
  And I wait for 2 seconds
  And I click on publish
  And I wait for 4 seconds
  And I click on continue, final review
  And I wait for 4 seconds
  And I click on publish post, right now
  And I wait for 4 seconds
  And I click on back to editor
  And I wait for 4 seconds
  And I go back to posts
  And I wait for 4 seconds
  Then The result should be "Post Test 1"
  And I wait for 4 seconds

@user2 @web

Scenario: Do a login and schedule a post and see it on the post list
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 10 seconds
  And I click on option Posts
  And I wait for 2 seconds
  And I click on New post
  And I wait for 2 seconds
  And I type a post title as "Post Scheduled Test 1"
  And I wait for 2 seconds
  And I click on post content
  And I wait for 2 seconds
  And I type a post content as "Post content 1"
  And I wait for 2 seconds
  And I click on publish
  And I wait for 2 seconds
  And I click on right now option
  And I wait for 2 seconds
  And I click on schedule for later
  And I wait for 2 seconds
  And I click on datepicker
  And I wait for 2 seconds
  And I select "2" days after
  And I wait for 2 seconds
  And I click on continue, final review
  And I wait for 2 seconds
  And I click on publish post, on 2 days
  And I wait for 2 seconds
  And I click on back to editor for scheduled posts
  And I wait for 2 seconds
  And I go back to posts
  And I wait for 2 seconds
  Then The result should be "Post Scheduled Test 1"
  And I wait for 4 seconds

@user3 @web
Scenario: Do a login and get a draft post and see it on the post list
Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 10 seconds
  And I click on option Posts
  And I wait for 2 seconds
  And I click on New post
  And I wait for 2 seconds
  And I type a post title as "Draft post Test 1"
  And I wait for 2 seconds
  And I click on post content
  And I wait for 2 seconds
  And I type a post content as "Post content 1"
  And I wait for 2 seconds
  And I go back to posts
  And I wait for 2 seconds
  Then The result should be "Draft post Test 1"
  And I wait for 4 seconds