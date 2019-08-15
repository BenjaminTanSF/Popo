import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => (
  <div className="splash" style={{ backgroundImage: `url(${window.splashBgURL})` }}>
    <div className="btnDiv">
      <Link to="/login">ACCESS POPO CRM</Link>
    </div>
  </div>
);

export default Splash;