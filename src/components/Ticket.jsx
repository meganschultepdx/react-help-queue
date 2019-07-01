import React from 'react';
import PropTypes from 'prop-types';

function Ticket (prop) {
  let ticketStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
  };

  return (
    <div style={ticketStyles}>
      <h3>{prop.location} - {prop.names}</h3>
      <p><em>{prop.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;