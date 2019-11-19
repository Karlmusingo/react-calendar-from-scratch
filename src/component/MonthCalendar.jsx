/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './MonthCalendar.scss';
import { weekdays, months } from '../utils/constants';
import DisplayText from './DisplayText';

const MonthCalendar = ({day, setDay}) => {
  const [month, setMonth] = useState(day.getMonth());
  const [year, setYear] = useState(day.getFullYear());

  const numberOfDays = new Date(year, month + 1, 0).getDate();
  const skipDays = new Date(year, month).getDay();

  useEffect(() => {
    setMonth(day.getMonth());
    setYear(day.getFullYear());
  }, [day])

  const next = () => {
    const newDay = new Date(moment(day).add(1, 'month'));
    setDay(newDay)
  };

  const prev = () => {
    const newDay = new Date(moment(day).add(-1, 'month'));
    setDay(newDay)
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
