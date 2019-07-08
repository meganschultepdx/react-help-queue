import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>{`
        h1 {
          font-family: sans-serif;
          text-align: center;
          text-transform: uppercase;
          `}</style>
      <h1>Help Queue!</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;