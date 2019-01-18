import React, { Component } from 'react';
import './calendar.css';
import CalendarComponent from './component/calendar.component';
import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import moment from 'moment';

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      calendarEvent: null
    }

    this.fCalendarRef = React.createRef();
  }




  componentDidMount = () => {
    this.loadCalendar();
  }




  handleSelect = (start, end, event, view) => {
    if (start.add('days', 1).date() !== end.date()) {
      this.state.calendarEvent.fullCalendar('unselect');
    }
  }




  loadCalendar = () => {
    let calendarEvent = $('#mycalendar').fullCalendar({
      defaultView: 'month',
      header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'month'
      },
      defaultDate: moment(),
      height: 500,
      showNonCurrentDates: false,
      selectable: true,
      timezone: 'local',
      select: this.handleSelect
    });
    this.setState({ calendarEvent });
  }




  render() {
    return (
      <CalendarComponent />
    )
  }
};


export default Calendar;
