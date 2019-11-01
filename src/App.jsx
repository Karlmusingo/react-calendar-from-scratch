import React from 'react';
import MonthCalendar from './component/MonthCalendar';
import WeekCalendar from './component/WeekCalendar';
import DayCalendar from './component/DayCalendar';
import './App.scss';

const App = () => (
  <React.Fragment>
    <DayCalendar />
    <br/>
    <br/>
    <br/>
    <WeekCalendar />
    <br />
    <br />
    <br />
    <MonthCalendar />
  </React.Fragment>
);

export default App;
