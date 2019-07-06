import React from 'react';

const ProfileMenu = ({ currentUser, logout }) => {
  const profileDiv = () => (
    <div className="profileDiv">
      <div className="profileArrow"></div>
      <div className="profileMenu">
        <h6 className="currentUserName">{currentUser.first_name} {currentUser.last_name}</h6>
        <br />
        <h6 className="currentUserId">User Id: {currentUser.id}</h6>
        <br />
        <h6 onClick={logout} className="logoutBtn">Log Out</h6>
      </div>
    </div>
  );

  return currentUser ? profileDiv() : null;
};


export default ProfileMenu;
