import React, { Component } from 'react'
import HeaderComponent from './component/header.component';
import { Route, Switch } from 'react-router-dom';
import Home from '../../containers/home';
import Calendar from '../../containers/calendar';
import RangeCalendar from '../../containers/range-calendar';
import FourZeroFour from '../../common/404';

class Header extends Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/range-calender" component={RangeCalendar} />
          <Route path="**" component={FourZeroFour} />
        </Switch>
      </>
    );
  }

};

export default Header;
