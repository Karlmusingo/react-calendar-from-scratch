/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Calendar from './calendars';
import './App.scss';

const App = () => {
  const [day, setDay] = useState(new Date());
  const [calendarView, setCalendarView] = useState('week');

  const calendarSetting = (view) => {
    setCalendarView(view);
  };

  return (
    <div style={{ marginTop: '50px', position: 'relative' }}>
      <Calendar />
      {/* <div className="calendar-view-setting">
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
      {calendarView === 'day' ? <DayCalendar day={day} setDay={setDay} /> : null}
      {calendarView === 'week' ? <WeekCalendar day={day} setDay={setDay} /> : null}
      {calendarView === 'month' ? <MonthCalendar day={day} setDay={setDay} /> : null} */}
    </div>
  );
};

export default App;
