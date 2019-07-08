import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from '../modal/modal';

const NavBar = ({ currentUser, modalState, openModal, closeModal }) => {
  const sessionLinks = () => (
    <div className="navBar">
      <div className="navBarLeft">
        <div className="menuItem menuActive">
          <Link to="/">
            <div className="logo">
              <span className="logo-1">P</span>
              <span className="logo-2">O</span>
              <span className="logo-3">P</span>
              <span className="logo-4">O</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="navBarRight">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  )

  const currentUserName = () => (
    <div className="navBar">
      <div className="navBarLeft">
        <div className="menuItem menuActive">
          <Link to="/">
            <div className="logo">
              <span className="logo-1">P</span>
              <span className="logo-2">O</span>
              <span className="logo-3">P</span>
              <span className="logo-4">O</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="navBarRight">
        <div className="userThumbnail">
          <img className="img-responsive"
            src={currentUser.photoUrl}
            alt="" width="33" height="33"
            onClick={modalState ? () => closeModal() : () => openModal('profile')} />
        </div>
        {/* <Modal /> */}
      </div>
    </div>
  );

  return currentUser ? currentUserName() : sessionLinks();
};

export default NavBar;