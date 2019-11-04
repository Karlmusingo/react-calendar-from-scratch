/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './MonthCalendar.scss';
import { weekdays, months } from '../utils/constants';
import DisplayText from './DisplayText';

const today = new Date();
const monthDefault = today.getMonth();
const yearDefault = today.getFullYear();

const MonthCalendar = () => {
  const [month, setMonth] = useState(monthDefault);
  const [year, setyear] = useState(yearDefault);

  const numberOfDays = new Date(year, month + 1, 0).getDate();
  const skipDays = new Date(year, month).getDay();

  const next = () => {
    const newYear = month === 11 ? year + 1 : year;
    const newMonth = (month + 1) % 12;
    setMonth(newMonth);
    setyear(newYear);
  };

  const prev = () => {
    const newYear = month === 0 ? year - 1 : year;
    const newMonth = month === 0 ? 11 : month - 1;
    setMonth(newMonth);
    setyear(newYear);
  };

  return (
    <div id="month-calendar">
      <div className="calendar-header">
        <div className="month">
          <ul>
            <li id="prev" className="navigation" onClick={() => prev()}>&#10094;</li>
            <li id="month">
              <DisplayText text={`${months[month]} ${year}`} />
            </li>
            <li id="next" className="navigation" onClick={() => next()}>&#10095;</li>
          </ul>
        </div>
      </div>

      <ul id="weekdays">
        {
          weekdays.map((day) => (
            <li key={Math.random()}>{day}</li>
          ))
        }
      </ul>

      <ul id="days">
        {[...(Array(skipDays)).fill('*'), ...Array(numberOfDays).keys()].map((day) => (
          day === '*' ? <li key={Math.random()}>{}</li> : <li key={Math.random()}>{day + 1}</li>
        ))}
      </ul>
    </div>
  );
};

export default MonthCalendar;
