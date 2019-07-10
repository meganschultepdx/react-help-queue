import React from 'react';
import Ticket from './Ticket';
import ouf from '../assets/img/ouf.jpg';
import PropTypes from 'prop-types';


function TicketList(props) {
  return (
    <div>
      <img id="ouf" width="100%" src={ouf}/>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue} 
          formattedWaitTime={ticket.formattedWaitTime}
          key={ticket.id}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;