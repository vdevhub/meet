import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
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