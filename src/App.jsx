import React from 'react';
import Calendar from './calendars';
import './App.scss';

const App = () => {
  const anyFunction = () => {
  };

  return (
    <div style={{ marginTop: '50px', position: 'relative' }}>
      <Calendar
        // onDayChange={(data) => anyFunction(data)}
        // onWeekChange={(data) => anyFunction(data)}
        // onMonthChange={(data) => anyFunction(data)}
      />
    </div>
  );
};

export default App;
