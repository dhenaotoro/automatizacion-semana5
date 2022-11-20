Feature: Post functionality
@user3 @web
Scenario: Do a login and get a draft post and see it on the post list
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I signin into ghost admin
  And I wait for 2 seconds
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
