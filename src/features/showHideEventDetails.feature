Feature: Show/Hide event details
  Scenario: An event element is collapsed by default.
    Given a user hasn't clicked on an event yet
    When the user opens the app
    Then an event element will be shown as collapsed

  Scenario: User can expand an event to see details.
    Given an event has been loaded on the main page
    When a user clicks on the "Show details" button
    Then the event will be expanded to show event details

  Scenario: User can collapse an event to hide details.
    Given an event has been expanded with event details displayed
    When a user clicks on the "Hide details" button
    Then the event details will be collapsed