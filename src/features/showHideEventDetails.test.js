import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('a user hasn\'t clicked on an event yet', () => {

    });

    let AppComponent;
    when('the user opens the app', () => {
      AppComponent = render(<App />);
    });

    then('an event element will be shown as collapsed', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItem = EventListDOM.querySelector('.event');
        expect(EventListItem).toBeInTheDocument();
        const EventListItemDetails = EventListItem.querySelector('.details');
        expect(EventListItemDetails).not.toBeInTheDocument();
        expect(within(EventListItem).queryByText('Show Details')).toBeInTheDocument();
      });
    });
  });

  test('User can expand an event to see details.', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    let EventListItem;
    let EventShowButton;
    given('an event has been loaded on the main page', async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        EventListItem = EventListDOM.querySelector('.event');
        expect(EventListItem).not.toBeNull();
      })
    });

    when(/^a user clicks on the "(.*)" button$/, async (arg0) => {
      const user = userEvent.setup();
      EventShowButton = within(EventListItem).queryByText('Show Details');
      user.click(EventShowButton);
    });

    then('the event will be expanded to show event details', () => {
      const EventItemDetails = within(EventListItem).queryByText('About event:');
      expect(EventItemDetails).toBeDefined();
    });
  });

  test('User can collapse an event to hide details.', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    let EventItem;
    let EventShowHideButton;
    given('an event has been expanded with event details displayed', async () => {
      const user = userEvent.setup();
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        EventItem = EventListDOM.querySelector('.event');
        EventShowHideButton = EventItem.querySelector('.details-btn');
        expect(EventShowHideButton).not.toBeNull();
      })

      await user.click(EventShowHideButton);
      const EventItemDetails = within(EventItem).queryByText('About event:');
      expect(EventItemDetails).toBeDefined();
    });

    when(/^a user clicks on the "(.*)" button$/, async (arg0) => {
      const user = userEvent.setup();
      await user.click(EventShowHideButton);
    });

    then('the event details will be collapsed', () => {
      const EventItemDetails = within(EventItem).queryByText('About event:');
      expect(EventItemDetails).not.toBeInTheDocument();
    });
  });
});