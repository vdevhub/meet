import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event" key={event.id} >
      <h2>{event.summary}</h2>
      <p>{event.created}</p>
      <p>{event.location}</p>
      {showDetails ? (
        <div>
          <h3>About event:</h3>
          <p><a href={event.htmlLink}>See details on Google Calendar</a></p>
          <p className="event-description">{event.description}</p>
        </div>) : null}
      <button className='showDetailsButton' onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </li>
  )
}

export default Event;