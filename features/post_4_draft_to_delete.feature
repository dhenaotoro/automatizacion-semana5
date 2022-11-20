
Feature: Post functionality
@user4 @web
Scenario: Do a login and public a draft post and delete it over draft post list
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I signin into ghost admin
  And I wait for 2 seconds
  And I click on option Posts
  And I wait for 2 seconds
  And I click on New post
  And I wait for 2 seconds
  And I type a post title as "Draft post Test 1 to delete"
  And I wait for 2 seconds
  And I click on post content
  And I wait for 2 seconds
  And I type a post content as "Post content 1"
  And I wait for 2 seconds
  And I go back to posts
  And I wait for 2 seconds
  And I click on Drafts
  And I wait for 2 seconds
  And I click on first draft
  And I wait for 2 seconds
  And I click on menu info
  And I wait for 2 seconds
  And I click on delete button
  And I wait for 3 seconds
  And I click on modal delete button
  And I wait for 10 seconds
  Then The result should not be "Draft post Test 1 to delete"
  And I wait for 2 seconds