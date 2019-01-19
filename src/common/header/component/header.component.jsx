import React from 'react'
import './header.component.css';
import { Link, withRouter } from 'react-router-dom';

const HeaderComponent = (props) => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Report</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMobileToggle" aria-controls="navbarMobileToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMobileToggle">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className={props.location.pathname === '/calendar' ? "nav-link active" : "nav-link"} to="/calendar">Calendar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" className={props.location.pathname === '/range-calender' ? "nav-link active" : "nav-link"} to="/range-calender">Range Calendar</Link>
            </li>
            <li className="nav-item">
              <Link to="/table" className={props.location.pathname === '/table' ? "nav-link active" : "nav-link"}>Table</Link>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown Menu
              </span>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/no-match" className="dropdown-item">Action</Link>
                <Link to="/no-match" className="dropdown-item">Another action</Link>
                <div className="dropdown-divider"></div>
                <Link to="/no-match" className="dropdown-item">Something else here</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default withRouter(HeaderComponent);
