# Meet App
## Live App
The app is deployed [on GitHub.io](https://vdevhub.github.io/meet/).

![MeetMain](https://github.com/user-attachments/assets/aaab55a7-7479-4b68-8d0d-9e7bb13aed3f)

## Description
Meet is an application showing upcoming events in a selected city. It is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Key Features
1. Filter events by city.
2. Show/Hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add an app shortcut to the home screen.
6. Display charts visualizing event details.

## User Stories
1. As a user, I should be able to filter events by city so that I can see a list of events taking place in that city.
2. As a user, I should be able to show/hide event details so that I can read more about an event or close the detail when finished reading and increase or reduce the information on the screen as needed.
3. As a user, I should be able to specify number of events so that I can get a shorter/longer list of events displayed for convenient searching.
4. As a user, I should be able to use the app when offline so that I can browse events regardless of my current connection.
5. As a user, I should be able to add an app shortcut to the home screen so that I have an easy and quick access to the app.
6. As a user, I should be able to display charts visualizing event details so that I can see how many events are taking place in a city and their popularity easily to help me make a decision.

## Scenarios
### Scenario 1.1
When user hasn’t searched for a city, show upcoming events from all cities.
- Given a user hasn’t searched for a city;
- When the user opens the app;
- Then the user should see a list of upcoming events.

### Scenario 1.2
User should see a list of suggestions when they search for a city.
- Given the main page is open;
- When a user starts typing in the city textbox;
- Then the user should receive a list of cities (suggestions) that match what they've typed.

### Scenario 1.3
User can select a city from the suggested list.
- Given a user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
- When the user selects a city (e.g., “Berlin, Germany”) from the list;
- Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

### Scenario 2.1
An event element is collapsed by default.
- Given a user hasn't clicked on an event yet;
- When the user opens the app or filters the events;
- Then an event element will be shown as collapsed.

### Scenario 2.2
User can expand an event to see details.
- Given an event or events has/have been loaded on the main page;
- When a user finds an event and clicks on the "Show details" button;
- Then the event will be expanded and event details will be shown.

### Scenario 2.3
User can collapse an event to hide details.
- Given an event has been expanded and event details displayed;
- When a user clicks on the "Hide details" button;
- Then the event details will be collapsed.

### Scenario 3.1
When user hasn’t specified a number, 32 events are shown by default.
- Given a user hasn't specified a number of events;
- When the user opens the app;
- Then 32 events are shown by default.

### Scenario 3.2
User can change the number of events displayed.
- Given there is a selected number of events or the default number of events displayed;
- When a user changes the number of events displayed;
- Then the new number of events added by the user will be shown.

### Scenario 4.1
Show cached data when there’s no internet connection.
- Given there's no internet connection and the user has previously opened and browsed the content online;
- When a user opens the app and browses the content offline;
- Then show cached data to the user.

### Scenario 4.2
Show error when user changes search settings (city, number of events).
- Given there's no internet connection and the main page is open;
- When a user attempts to change search settings (city, number of events);
- Then show an error.

### Scenario 5.1
User can install the meet app as a shortcut on their device home screen.
- Given a user opened the app;
- When the user selects to "Add to Home Screen";
- Then a new app shortcut will be added to the device's home screen.

### Scenario 6.1
Show a chart with the number of upcoming events in each city.
- Given the main page is open and events are loaded;
- When a user navigates to the charts section;
- Then a chart with the number of upcoming events in each city will be displayed.

## Using Serverless Functions
In this Meet App, serverless functions (aka FaaS) are used to handle the authorization process for accessing calendar events through Google calendar API. An AWS Lambda hosted serverless function makes sure an authorization token is correctly obtained given that the accessing user logs in to their Google account and provides consent to grant access. As a result, the application renders events in the UI. All users of the application have to be authorized to display events and work with the app in general. 

As building a dedicated API (full backend) for this single process wouldn't be efficient, the serverless approach has been evaluated as the most suitable, cost effective, and the fastest. 

## Cloning Repository
```
git clone https://github.com/vdevhub/meet.git
```