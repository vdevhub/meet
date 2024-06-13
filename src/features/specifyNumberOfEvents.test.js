import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
    given('a user hasn\'t specified a number of events', () => {

    });

    let AppComponent;
    when('the user opens the app', () => {
      AppComponent = render(<App />);
    });

    then(/^(\d+) events are shown by default$/, async (arg0) => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventItems).toHaveLength(32);
      });
    });
  });

  test('User can change the number of events displayed.', ({ given, when, then }) => {
    let AppComponent;
    given('the user opens the app', () => {
      AppComponent = render(<App />);
    });

    let AppDOM;
    when('a user changes the number of events displayed', async () => {
      const user = userEvent.setup();
      AppDOM = AppComponent.container.firstChild;
      const NumberOfEventsDOM = AppDOM.querySelector('#events-number');
      const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('spinbutton');
      await user.type(NumberOfEventsInput, '{backspace}{backspace}10');
      expect(NumberOfEventsInput).toHaveValue(10);
    });

    then('the new number of events added by the user will be shown', async () => {
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventItems).toHaveLength(10);
      });
    });
  });
});