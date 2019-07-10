import React from 'react';
import PropTypes from 'prop-types';


function Ticket(props) {
  return (
    <div>
      <style jsx>{`
        div{
          background-color: #04b3b3;
          font-family: sans-serif;
          margin-left: 100px;
          margin-right: 100px;
        }
        `}</style>
      <h3>{props.location} - {props.names}
      </h3>
      <h4>{props.formattedWaitTime}</h4>
      <p><em>{props.issue}</em></p>
      <hr />
    </div>
  );
}


Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
};

export default Ticket;