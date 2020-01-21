import React, { useState } from 'react';
import moment from 'moment';
import DayCalendar from './DayCalendar';
import WeekCalendar from './WeekCalendar';
import MonthCalendar from './MonthCalendar';
import '../styles/calendarEvents.scss';


const titleText = 'Some title Some title Some title Some title Some title Some... title';

const eventsDefault = [
  {
    startTime: new Date(),
    endTime: new Date(moment().add(1, 'hour')),
    title: `${titleText}`
  },
  {
    startTime: new Date(),
    endTime: new Date(moment().add(1, 'hour')),
    title: `${titleText}`
  },
  {
    startTime: new Date(),
    endTime: new Date(moment().add(1, 'hour')),
    title: `${titleText}`
  },
];

const Calendar = (events = eventsDefault) => {
  const [calendarView, setCalendarView] = useState('week');

  const formatEventTime = (events) => {
    const newEvents = events.map(event => ({
      ...event,
      title: event.eventTitle,
      startTime: new Date(event.startTime),
      endTime: new Date(event.endTime),
    }));
    return newEvents;
  };

  const calendarSetting = (view) => {
    setCalendarView(view);
  };

  return (
    <div style={{ marginTop: '50px', position: 'relative' }}>
      <div className="calendar-view-setting">
        <button
          className={calendarView === 'day' ? 'active' : ''}
          onClick={() => calendarSetting('day')}
        >
          D
        </button>
        <button
          className={calendarView === 'week' ? 'active' : ''}
          onClick={() => calendarSetting('week')}
        >
          W
        </button>
        <button
          className={calendarView === 'month' ? 'active' : ''}
          onClick={() => calendarSetting('month')}
        >
          M
        </button>
      </div>
      {calendarView === 'day' ? <DayCalendar events={eventsDefault} /> : null}
      {calendarView === 'week' ? <WeekCalendar events={eventsDefault} /> : null}
      {calendarView === 'month' ? <MonthCalendar events={eventsDefault} /> : null}
    </div>
  );
};

export default Calendar;
