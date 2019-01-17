import React from 'react'
import './header.component.css';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMobileToggle" aria-controls="navbarMobileToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarMobileToggle">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/calendar">Calendar</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/range-calender">Range Calendar</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link">Table</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown Menu
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item">Action</a>
                <a class="dropdown-item">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
