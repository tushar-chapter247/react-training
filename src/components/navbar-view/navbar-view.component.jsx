import React from 'react';
import './navbar-view.css';

const NavbarView = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top">
        <a className="navbar-brand" href="//localhost:3000">
          <img src="//getbootstrap.com/docs/4.2/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
          &nbsp; Burger Builder
        </a>
      </nav>
    </>
  )
};

export default NavbarView;
