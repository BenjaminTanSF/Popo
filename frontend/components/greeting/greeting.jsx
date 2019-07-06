import React from 'react';

const Greeting = ({ currentUser }) => {
  const personalGreeting = () => (
    <div className="personalGreeting">
      <h2>Welcome {currentUser.first_name} {currentUser.last_name}</h2>
    </div>
  );

  return currentUser ? personalGreeting() : <div></div>;
};


export default Greeting;
