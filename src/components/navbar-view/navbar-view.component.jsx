import React from 'react';
import './navbar-view.css';

const NavbarView = (props) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top">
        <a className="navbar-brand" href="//localhost:3000">
          <img src="//getbootstrap.com/docs/4.2/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
          &nbsp; {props.appName}
        </a>

        <ul className="navbar-nav pull-right">
          <li>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Login">
              <span>Login</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default NavbarView;
