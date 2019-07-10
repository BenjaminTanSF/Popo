import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => (
  <div className="splash">
    <h1>POPO CRM software helps you collect bribes smarter, better, faster.</h1>
    <h3>Reach out to gangs at the right moment and engage them across every channel. POPO CRM software helps dirty cops of all shapes and sizes collect more brown envelopes the smarter way.</h3>
    <div className="btnDiv">
      <Link to="/login">ACCESS POPO CRM</Link>
    </div>
  </div>
);

export default Splash;