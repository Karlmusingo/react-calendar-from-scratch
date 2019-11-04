/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './WeekCalendar.scss';
import { weekdays, months, cellHeight } from '../utils/constants';
import Event from './Event';
import DisplayText from './DisplayText';

const today = new Date();
const monthDefault = today.getMonth();
const yearDefault = today.getFullYear();
const firstDayOfTheWeekDefault = today.getDate() - today.getDay();

const WeekCalendar = ({events = []}) => {
  const [month, setMonth] = useState(monthDefault);
  const [year, setyear] = useState(yearDefault);
  const [firstDayOfTheWeek, setFirstDayOfTheWeek] = useState(firstDayOfTheWeekDefault);
  const [lastDayOfTheWeek, setLastDayOfTheWeek] = useState(new Date(year, month, firstDayOfTheWeekDefault + 6).getDate());

  const numberOfDays = new Date(year, month + 1, 0).getDate();

  const next = () => {
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

    setMonth(newMonth);
    setyear(newYear);
  };

  const prevMonth = () => {
    const newYear = month === 0 ? year - 1 : year;
    const newMonth = month === 0 ? 11 : month - 1;

    // get the first week of the month
    const firstDay = new Date(newYear, newMonth, 1); // first day of the month

    const newFirstDayOfTheWeek = new Date(newYear, newMonth, 1 - firstDay.getDay()).getDate();
    const newLastDayOfTheWeek = new Date(
      newYear,
      newMonth, 
      new Date(newYear, newMonth - 1, newFirstDayOfTheWeek + 6).getDate()).getDate();
    
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
            <li>
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
        {[...(Array(168))].map((value, index) =>  (
          <li key={Math.random()} style={{}}>{
            events.map((event) => {
              if((index % 7) === event.startTime.getDay()) {
                if(event.startTime.getHours() === Math.trunc(index / 7)) {
                  const minutPush = event.startTime.getMinutes() * (cellHeight / 60);
                  const duration = ((event.endTime.getTime() - event.startTime.getTime()) / 60000) * (cellHeight / 60); // duration in px
                  return (
                    <Event key={Math.random()}
                      title={event.title}
                      style={{
                        marginTop: `${minutPush}px`,
                        height: `${duration}px`
                      }}
                    />
                  )
                }
              }
              return null;
            })
          }</li>
        ))}
      </ul>
    </div>
  );
};

WeekCalendar.propTypes = {
  events: PropTypes.arrayOf(
      PropTypes.shape({
      startTime: PropTypes.object,
      fontSize: PropTypes.number
    })
  )
}

export default WeekCalendar;
