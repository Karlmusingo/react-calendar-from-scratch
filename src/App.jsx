import React from 'react';
import MonthCalendar from './component/MonthCalendar';
import WeekCalendar from './component/WeekCalendar';
import './App.scss';

const App = () => (
  <React.Fragment id="calendar">
    <WeekCalendar />
    <br />
    <br />
    <br />
    <MonthCalendar />
  </React.Fragment>
);

export default App;
