import React, { Component } from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import './calendar.css';
import CalendarComponent from './component/calendar.component';

class Calendar extends Component {
  render() {
    return (
      <CalendarComponent />
    )
  }
};

export default Calendar;
