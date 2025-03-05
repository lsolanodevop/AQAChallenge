Feature: Login Functionality

  Scenario: Verify that the user can successfully log in with valid username and password.
    Given I am on the login page
    When I enter a valid username "Leo" and password "leo"
    And I click the login button
    Then I should be redirected to the dashboard "/chatRoom"

  Scenario: Validate that the password input field masks the input characters appropriately.
    Given I am on the login page
    When I enter a password "testPassword"
    Then the password input should be masked

  Scenario: Attempt to log in with an incorrect username and correct password and verify that an appropriate error message is displayed.
    Given I am on the login page
    When I enter an incorrect username "invalidUser" and a valid password "validPassword"
    And I click the login button
    Then an alert should be displayed with message "Error logging in or user not found"
    And I accept the alert

  Scenario: Try logging in with a correct username and incorrect password, ensuring that an error message is shown.
    Given I am on the login page
    When I enter a valid username "Chuck" and an incorrect password "invalidPassword"
    And I click the login button
    Then an alert should be displayed with message "Error logging in or user not found"