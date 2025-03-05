Feature: Chat Room Functionality

  Background:
    Given I am logged in and in the chat room

  Scenario: Verify that the chat room displays the title "Chat Room" correctly.
    Then the chat room title should display "Chat Room"

  Scenario: Check that the chat messages are visible and correctly formatted in the chat area.
    Then the chat messages container should be visible
    And there should be at least one message in the chat area

  Scenario: Ensure that the input field for typing messages is present and accepts text input.
    Then the message input field should be visible and enabled
    When I enter a message "Hello, World!"
    Then the input field should contain "Hello, World!"

  Scenario: Validate that clicking the "Send" button sends the message typed in the input field.
    When I enter a message "Hello, World!"
    And I click the send button
    Then my message "Hello, World!" should appear in the chat area

  Scenario: Test that after sending a message, it appears in the chat messages area with the correct username and message content.
    When I enter a message "Hello, World!"
    And I click the send button
    Then my message "Hello, World!" should appear in the chat area
    And the message should show the username "Leo"

  Scenario: Confirm that clicking the "Logout" button logs the user out and redirects to the appropriate page.
    When I click the logout button
    Then I should be redirected to the login page "http://localhost:4200/"