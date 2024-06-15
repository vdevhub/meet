import { useState } from "react";
import { format } from 'date-fns';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  function formatDate(string) {
    return format(new Date(string), 'MMMM do yyyy, hh:mm:ss');
  }

  return (
    <li className="event" key={event.id} >
      <div className="event-basic">
        <h2>{event.summary}</h2>
        <p>{formatDate(event.created)}</p>
        <p>{event.location}</p>
      </div>
      {showDetails ? (
        <div className="details">
          <h3>About event:</h3>
          <p><a href={event.htmlLink}>See details on Google Calendar</a></p>
          <p className="event-description">{event.description}</p>
        </div>) : null}
      <button className='details-btn' onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </li>
  )
}

export default Event;