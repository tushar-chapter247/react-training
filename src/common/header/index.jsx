import React, { Component } from 'react'
import HeaderComponent from './component/header.component';
import { Route, Link, Switch } from 'react-router-dom';
import Calendar from '../../containers/calendar';
import RangeCalendar from '../../containers/range-calendar';

class Header extends Component {
  constructor() {
    super();
  }



  render() {
    return (
      <>
        <HeaderComponent />
        <Switch>
          <Route path="/calendar" component={Calendar} />
          <Route path="/range-calender" component={RangeCalendar} />
        </Switch>
      </>
    );
  }

};

export default Header;
