import React from 'react'
import './calendar.component.css';
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';

const CalendarComponent = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="calendar-container">
          <div className="header">
            <h2>Calendar</h2>
          </div>

          <br/>

          <FullCalendar
            id = "your-custom-ID"
            header = {{
              left: 'prev,next today myCustomButton',
              center: 'title',
              right: 'month,basicWeek,basicDay'
            }}
            defaultDate={'2019-01-12'}
          />
        </div>
      </div>
    </>
  )
};

export default CalendarComponent;
