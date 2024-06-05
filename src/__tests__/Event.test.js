import { render } from '@testing-library/react';
import Event from '../components/Event';
import userEvent from "@testing-library/user-event";
import { getEvents } from '../api';

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test('renders event title', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('renders event start time', () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });

  test('renders event location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  test('renders event details button with the title "show details"', () => {
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
  });

  test('by default, event\'s details section should be hidden', () => {
    expect(EventComponent.queryByText('About event:')).not.toBeInTheDocument();
    expect(EventComponent.queryByText('See details on Google Calendar')).not.toBeInTheDocument();
    expect(EventComponent.queryByText(allEvents[0].description)).not.toBeInTheDocument();
  });

  test('shows the details section when the user clicks on the "show details" button', async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText('Show Details');
    await user.click(showDetailsButton);

    expect(EventComponent.queryByText('About event:')).toBeInTheDocument();
    expect(EventComponent.queryByText('See details on Google Calendar')).toBeInTheDocument();
    expect(EventComponent.container.querySelector('.event-description')).toBeInTheDocument();
    expect(EventComponent.queryByText('Show Details')).not.toBeInTheDocument();
    expect(EventComponent.queryByText('Hide Details')).toBeInTheDocument();
  });

  test('hides the details section when the user clicks on the "hide details" button', async () => {
    const user = userEvent.setup();

    const showDetailsButton = EventComponent.queryByText('Show Details');
    await user.click(showDetailsButton);

    const hideDetailsButton = EventComponent.queryByText('Hide Details');
    await user.click(hideDetailsButton);

    expect(EventComponent.queryByText('About event:')).not.toBeInTheDocument();
    expect(EventComponent.queryByText('See details on Google Calendar')).not.toBeInTheDocument();
    expect(EventComponent.queryByText(allEvents[0].description)).not.toBeInTheDocument();
    expect(EventComponent.queryByText('Hide Details')).not.toBeInTheDocument();
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
  });

});