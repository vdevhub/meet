Feature:  Specify number of events.
  Scenario: When user hasn’t specified a number, 32 events are shown by default.
    Given a user hasn't specified a number of events
    When the user opens the app
    Then 32 events are shown by default

  Scenario: User can change the number of events displayed.
    Given the user opens the app
    When a user changes the number of events displayed
    Then the new number of events added by the user will be shown