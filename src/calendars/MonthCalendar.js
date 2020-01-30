/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { weekdays, months } from '../utils/constants';
import DisplayText from './DisplayText';
import DisplayEvent from './DisplayEvent';
import '../styles/MonthCalendar.scss';

const today = new Date();

const MonthCalendar = ({
  events, onMonthChange, day, setDay,
}) => {
  const [month, setMonth] = useState(day.getMonth());
  const [year, setYear] = useState(day.getFullYear());

  const numberOfDays = new Date(year, month + 1, 0).getDate();
  const numberOfDaysPreviousMonth = new Date(year, month, 0).getDate();
  const skipDays = new Date(year, month).getDay();

  useEffect(() => {
    setMonth(day.getMonth());
    setYear(day.getFullYear());
    onMonthChange(month, year);
  }, [day, onMonthChange, month, year]);

  const next = () => {
    const newDay = new Date(moment(day).add(1, 'month'));
    setDay(newDay);
  };

  const prev = () => {
    const newDay = new Date(moment(day).add(-1, 'month'));
    setDay(newDay);
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
           // eslint-disable-next-line no-shadow
           weekdays.map((day) => (
             <li key={Math.random()}>
               {day}
             </li>
           ))
         }
      </ul>

      <ul id="days">
        {
          [
            ...(Array(skipDays)).fill('*'),
            ...Array(numberOfDays).keys(),
            ...Array(42 - (skipDays + numberOfDays)).keys(),
          // eslint-disable-next-line no-shadow
          ].map((day, index) => (
            day === '*'
              ? (
                <li className="empty-cells" key={Math.random()}>
                  { numberOfDaysPreviousMonth - (skipDays - 1) + index }
                </li>
              )
              : (
                <li className={index > (numberOfDays + skipDays - 1) ? 'empty-cells' : ' '} key={Math.random()}>
                  {
                  day + 1 && day + 1 === today.getDate() && today.getMonth() === month
                  && today.getFullYear() === year ? (
                    <span className="currentDay">
                      {day + 1}
                    </span>
                    ) : day + 1
              }
             &nbsp;
                  <br />
                  {
                  events.map((event) => {
                    if (day + 1 === event.startTime.getDate()
                     && month === event.startTime.getMonth()) {
                      return (
                        <DisplayEvent
                          className="event-month-calendar"
                          key={Math.random()}
                          text={`${event.startTime.getHours()}:${event.startTime.getMinutes()}`}
                          name={event.title}
                        />
                      );
                    }
                  })
                }
                </li>
              )
          ))
        }

      </ul>
    </div>
  );
};

export default MonthCalendar;
