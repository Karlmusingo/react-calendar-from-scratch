/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  weekdays, months, cellHeight, monthsShort,
} from '../utils/constants';
import displayHours from '../utils/displayHours';
import Event from './Event';
import DisplayText from './DisplayText';
import '../styles/WeekCalendars.scss';

const d = new Date();
const WeekCalendar = ({ events = [] }) => {
  const [today, setToday] = useState(new Date());
  const monthDefault = today.getMonth();
  const yearDefault = today.getFullYear();
  const firstDayOfTheWeekDefault = today.getDate() - today.getDay();

  const [month, setMonth] = useState(monthDefault);
  const [year, setYear] = useState(yearDefault);
  const [firstDayOfTheWeek, setFirstDayOfTheWeek] = useState(firstDayOfTheWeekDefault);
  const [lastDayOfTheWeek, setLastDayOfTheWeek] = useState(new Date(year, month,
    firstDayOfTheWeekDefault + 6).getDate());

  const dispalyMonth = () => {
    const startOfTheWeek = new Date(year, month, today.getDate() - today.getDay());
    const endOfTheWeek = new Date(year, month, firstDayOfTheWeekDefault + 6);
    if (startOfTheWeek.getMonth() !== endOfTheWeek.getMonth()) {
      if (startOfTheWeek.getFullYear() !== endOfTheWeek.getFullYear()) {
        return `${monthsShort[startOfTheWeek.getMonth()]} ${startOfTheWeek.getFullYear()} - 
                        ${monthsShort[endOfTheWeek.getMonth()]} ${endOfTheWeek.getFullYear()}`;
      }
      return `${monthsShort[startOfTheWeek.getMonth()]} - ${monthsShort[endOfTheWeek.getMonth()]} ${year}`;
    }
    return `${months[month]} ${year}`;
  };

  // const numberOfDays = new Date(year, month + 1, 0).getDate();

  useEffect(() => {
    setMonth(today.getMonth());
    setYear(today.getFullYear());
    setFirstDayOfTheWeek(today.getDate() - today.getDay());
    setLastDayOfTheWeek(new Date(year, month, firstDayOfTheWeekDefault + 6).getDate());
  }, [today]);

  const next = () => {
    setToday(new Date(moment(today).add(1, 'week')));
  };

  const prev = () => {
    setToday(new Date(moment(today).add(-1, 'week')));
  };

  const nextMonth = () => {
    setToday(new Date(moment(today).add(1, 'month')));
  };

  const prevMonth = () => {
    setToday(new Date(moment(today).add(-1, 'month')));
  };
  return (
    <div id="week-calendar">
      <div className="calendar-header">
        <div className="month day">
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
              <DisplayText text={dispalyMonth()} />
            </li>
            <li className="navigation" onClick={() => nextMonth()}>&#10095;</li>
          </ul>
        </div>
      </div>
      <ul id="weekdays">
        <li>Time</li>
        {
           weekdays.map((day, index) => (
             <li key={Math.random()}>
               {
                  (
                    <span className={day && day === d.toDateString().slice(0, 3) ? "currentDay" : " "}>
                      {`${day} ${new Date(year, month, firstDayOfTheWeek + index).getDate()}`}
                    </span>
                  ) 
              }
             </li>
           ))
         }
      </ul>
      <ul id="days">
        {[...(Array(188))].map((value, index) => (
          <li>
            {
              index % 8 === 0 ? (
                <span className="hours">
                  {displayHours(index / 8)}
                </span>
              ) : null
            }
            {

             events.map((event) => {
               const startOfTheWeek = new Date(year, month, firstDayOfTheWeek).getTime();
               const endOfTheWeek = new Date(year, month, lastDayOfTheWeek).getTime();
               if (startOfTheWeek <= event.startTime.getTime()
               && event.startTime.getTime() <= endOfTheWeek) {
                 if ((index % 7) === event.startTime.getDay()) {
                   if (event.startTime.getHours() === Math.trunc(index / 7)) {
                     const minutPush = event.startTime.getMinutes() * (cellHeight / 60);
                     const duration = ((event.endTime.getTime() - event.startTime.getTime())
                      / 60000) * (cellHeight / 60);
                     return (
                       <div>
                         <Event
                           key={Math.random()}
                          //  ttitle={event.title}
                           title={`${event.startTime.getHours()}:${event.startTime.getMinutes()} PM`}
                           style={{
                             marginTop: `${minutPush}px`,
                             height: `${duration}px`,
                           }}
                         />
                       </div>
                     );
                   }
                 }
                 return null;
               }
               return null;
             })
           }
          </li>
        ))}
      </ul>
    </div>
  );
};

WeekCalendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      startTime: PropTypes.object,
      fontSize: PropTypes.number,
    }),
  ),
};

export default WeekCalendar;
