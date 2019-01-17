import React from 'react'
import './header.component.css';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Report</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMobileToggle" aria-controls="navbarMobileToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMobileToggle">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/calendar">Calendar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/range-calender">Range Calendar</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">Table</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown Menu
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item">Action</a>
                <a className="dropdown-item">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
