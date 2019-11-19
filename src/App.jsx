import React, { useState, useEffect } from 'react';
import MonthCalendar from './component/MonthCalendar';
import WeekCalendar from './component/WeekCalendar';
import DayCalendar from './component/DayCalendar';
import './App.scss';

const App = () => {
  
  const [day, setDay] = useState(new Date());
  const [calendarView, setCalendarView] = useState('week');

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
      {calendarView === 'day' ? <DayCalendar day={day} setDay={setDay} /> : null}
      {calendarView === 'week' ? <WeekCalendar day={day} setDay={setDay} /> : null}
      {calendarView === 'month' ? <MonthCalendar day={day} setDay={setDay} /> : null}
    </div>
  )
};

export default App;
