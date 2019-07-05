import React from 'react';
import Ticket from './Ticket';
import ouf from '../assets/img/ouf.jpg';

let masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];



function TicketList() {
  return (
    <div>
      <img id="ouf" width="100%" src={ouf}/>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue} 
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;