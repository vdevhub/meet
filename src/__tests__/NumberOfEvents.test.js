import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';
import App from '../App';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} />);
  });

  test('renders text input', () => {
    const numberOfEventsTextBox = NumberOfEventsComponent.queryByRole('spinbutton');
    expect(numberOfEventsTextBox).toBeInTheDocument();
    expect(numberOfEventsTextBox).toHaveClass('events-number-input');
  });

  test('default value 32', () => {
    const numberOfEventsTextBox = NumberOfEventsComponent.queryByRole('spinbutton');
    expect(numberOfEventsTextBox).toHaveValue(32);
  });

  test('value of input changes when user types in it', async () => {
    const user = userEvent.setup();
    const numberOfEventsTextBox = NumberOfEventsComponent.queryByRole('spinbutton');
    await user.type(numberOfEventsTextBox, '{backspace}{backspace}10');
    expect(numberOfEventsTextBox).toHaveValue(10);
  });
});

describe('<NumberOfEvents /> integration', () => {
  test('renders suggestions list when the app is rendered.', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const numberOfEventsDOM = AppDOM.querySelector('#events-number');
    const numberOfEventsTextBox = within(numberOfEventsDOM).queryByRole('spinbutton');
    await user.type(numberOfEventsTextBox, '{backspace}{backspace}6');

    const eventsListDOM = AppDOM.querySelector('#event-list');
    const eventListItems = within(eventsListDOM).queryAllByRole('listitem');
    expect(eventListItems.length).toBe(6);
  });
});