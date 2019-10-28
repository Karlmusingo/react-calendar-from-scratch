/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import moment from 'moment';
import './WeekCalendar.scss';
import Week from './Week';
import { weekdays, months } from '../utils/constants';

const today = new Date();
const monthDefault = today.getMonth();
const yearDefault = today.getFullYear();
const firstDayOfTheWeekDefault = today.getDate() - today.getDay();

// eslint-disable-next-line react/prop-types
const DisplayText = ({ text }) => (
  <span>{text}</span>
);

const WeekCalendar = () => {
  const [month, setMonth] = useState(monthDefault);
  const [year, setyear] = useState(yearDefault);
  const [firstDayOfTheWeek, setFirstDayOfTheWeek] = useState(firstDayOfTheWeekDefault);
  const [lastDayOfTheWeek, setLastDayOfTheWeek] = useState(new Date(year, month, firstDayOfTheWeekDefault + 6).getDate());

  const numberOfDays = new Date(year, month + 1, 0).getDate();
  // week class
  // console.log('week',moment().startOf('week') );
  // console.log('week',moment().startOf('week').add(1, 'week') );

  const next = () => {
    // const numberOfThisDays = new Date(year, month + 1, 0).getDate();
    if ((firstDayOfTheWeek + 7) > numberOfDays) {
      const newYear = month === 11 ? year + 1 : year;
      const newMonth = (month + 1) % 12;
      setMonth(newMonth);
      setyear(newYear);
    };

    const newFirstDayOfTheWeek = new Date(year, month, (firstDayOfTheWeek + 7)).getDate();
    const newLastDayOfTheWeek = new Date(year, month, (newFirstDayOfTheWeek + 6)).getDate();

    setFirstDayOfTheWeek(newFirstDayOfTheWeek);
    setLastDayOfTheWeek(newLastDayOfTheWeek);
  };

  const prev = () => {
    if ((firstDayOfTheWeek - 7) < 1) {
      const newYear = month === 0 ? year - 1 : year;
      const newMonth = month === 0 ? 11 : month - 1;
      setMonth(newMonth);
      setyear(newYear);
    }

    const newFirstDayOfTheWeek = new Date(year, month, (firstDayOfTheWeek - 7)).getDate();
    const newLastDayOfTheWeek = new Date(year, (firstDayOfTheWeek - 7) < 1 ? month - 1 : month, (newFirstDayOfTheWeek + 6)).getDate();

    setFirstDayOfTheWeek(newFirstDayOfTheWeek);
    setLastDayOfTheWeek(newLastDayOfTheWeek);
  };

  const nextMonth = () => {
    const newYear = month === 11 ? year + 1 : year;
    const newMonth = (month + 1) % 12;

    // get the first week of the month

    // setFirstDayOfTheWeek(newYear, newMonth, )

    // end

    setMonth(newMonth);
    setyear(newYear);
  };

  const prevMonth = () => {
    const newYear = month === 0 ? year - 1 : year;
    const newMonth = month === 0 ? 11 : month - 1;

    // get the first week of the month
    const firstDay = new Date(newYear, newMonth, 1); // first day of the month
    // const firstDayOfTheFirstWeek = firstDay.getDay();
    const newFirstDayOfTheWeek = new Date(newYear, newMonth, 1 - firstDay.getDay()).getDate();
    const newLastDayOfTheWeek = new Date(
      newYear,
      newMonth, 
      new Date(newYear, newMonth - 1, newFirstDayOfTheWeek + 6).getDate()).getDate();
    console.log(newYear, newMonth, newFirstDayOfTheWeek, newLastDayOfTheWeek)
    console.log(year, month, newFirstDayOfTheWeek, newLastDayOfTheWeek)
    
    setFirstDayOfTheWeek(newFirstDayOfTheWeek);
    setLastDayOfTheWeek(newLastDayOfTheWeek);
    // end

    setMonth(newMonth);
    setyear(newYear);
  };

  return (
    <div id="week-calendar">
      <div className="calendar-header">
        <div className="month">
          <ul>
            <li className="navigation" onClick={() => prev()}>&#10094;</li>
            <li className="">
              <DisplayText text={`Sun ${firstDayOfTheWeek} - Sat ${lastDayOfTheWeek}`} />
            </li>
            <li className="navigation" onClick={() => next()}>&#10095;</li>
          </ul>
        </div>
        <div className="month">
          <ul>
            <li className="navigation" onClick={() => prevMonth()}>&#10094;</li>
            <li className="">
              <DisplayText text={`${months[month]} ${year}`} />
            </li>
            <li className="navigation" onClick={() => nextMonth()}>&#10095;</li>
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
        {[...(Array(168))].map((day) => (
          <li key={Math.random()}>{}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeekCalendar;
