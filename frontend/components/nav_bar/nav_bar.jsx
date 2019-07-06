import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from '../modal/modal';

const NavBar = ({ currentUser, modalState, openModal, closeModal }) => {
  const sessionLinks = () => (
    <div className="navBar">
      <div className="navBarLeft">
        <Link to="/">Home</Link>
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
        <Link to="/">Home</Link>
      </div>
      <div className="navBarRight">
        <div className="userThumbnail">
          <img className="img-responsive"
            src={window.userThumbnailURL}
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