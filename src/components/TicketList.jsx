import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';



function TicketList(props){
  return (
    <div>
      <hr/>
      {/* cycles through all first-level keys in the masterTicketList object; which are unique IDs */}
      {Object.keys(props.ticketList).map(function(ticketId) {
        {/* isolates the ticket object corresponding to the current key */}
        let ticket = props.ticketList[ticketId];
        {/* then pass this ticket's details tot he ticket comp under the relevant props */}
        return <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticketId}
          onTicketSelection={props.onTicketSelection}
          ticketId={ticketId}/>;
      })}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default TicketList;