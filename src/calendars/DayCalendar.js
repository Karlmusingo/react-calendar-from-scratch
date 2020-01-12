/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-use-before-define */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DisplayText from './DisplayText';
import Event from './Event';
import { weekdays, months, cellWidthDayView } from './Constants';
import '../styles/dayCalendar.scss';

const today = new Date();

export const addSuffix = (date) => {
  // eslint-disable-next-line one-var
  const moduloTen = date % 10,
    moduloHundred = date % 100;
  if (moduloTen === 1 && moduloHundred !== 11) {
    /* istanbul ignore next */
    return `${date}st`;
  }
  if (moduloTen === 2 && moduloHundred !== 12) {
    /* istanbul ignore next */
    return `${date}nd`;
  }
  if (moduloTen === 3 && moduloHundred !== 13) {
    /* istanbul ignore next */
    return `${date}rd`;
  }
  return `${date}th`;
};

/* istanbul ignore next */
const DayCalendar = ({ events = [] }) => {
  const [day, setDay] = useState(today);

  const calendarBody = useRef(null);

  useEffect(() => {
    startOn(today.getHours());
  }, [day]);

  const formatHours = (hour) => {
    if (hour > 12) return `${hour - 12}PM`;
    if (hour === 12) return `${hour}PM`;
    return `${hour}AM`;
  };
  const startOn = (hour) => {
    calendarBody.current.scrollBy({
      top: 0,
      left: hour,
    });
  };

  const next = () => {
    const newDay = new Date(moment(day).add(1, 'day'));
    setDay(newDay);
  };

  const prev = () => {
    const newDay = new Date(moment(day).add(-1, 'week'));
    setDay(newDay);
  };

  const nextMonth = () => {
    const newDay = new Date(moment(day).add(1, 'month'));
    setDay(newDay);
  };

  const prevMonth = () => {
    const newDay = new Date(moment(day).add(-1, 'month'));
    setDay(newDay);
  };

  events.sort((a, b) => a.startTime.getHours() - b.startTime.getHours());

  const history = [];

  return (
    <div id="day-calendar">
      <div className="calendar-header">
        <div className="month" style={{ marginLeft: '196px' }}>
          <ul>
            <li
              className="navigation"
              onClick={() => prev()}
              role="button"
            >&#10094;
            </li>
            <li>
              <DisplayText text={`${weekdays[day.getDay()]} ${addSuffix(day.getDate())}`} />
            </li>
            <li role="button" className="navigation" onClick={() => next()}>&#10095;</li>
          </ul>
        </div>
        <div className="month">
          <ul>
            <li className="navigation" onClick={() => prevMonth()}>&#10094;</li>
            <li className="">
              <DisplayText text={`${months[day.getMonth()]} ${day.getFullYear()}`} />
            </li>
            <li className="navigation" onClick={() => nextMonth()}>&#10095;</li>
          </ul>
        </div>
      </div>
      <div className="calendar-body" ref={calendarBody}>
        <ul id="day-time">
          {
           [...(Array(24))].map((el, index) => (
             <li key={Math.random()}>
               <DisplayText text={formatHours(index)} />
             </li>
           ))
         }
        </ul>

        <ul id="days">

          {
              events.map((event) => {
                event.startTime = new Date(event.startTime);
                const time = event.startTime.getHours();
                const minutPush = event.startTime.getMinutes() * (cellWidthDayView / 60);
                const duration = ((event.endTime.getTime() - event.startTime.getTime())
                / 60000) * (cellWidthDayView / 60);
                const exist = history.filter(el =>
                                 el.time === time
                                 ||
                                 (
                                 (el.time * cellWidthDayView + el.minutPush)
                                 <
                                 (time * cellWidthDayView + minutPush)
                                 &&
                                 (time * cellWidthDayView + minutPush)
                                 <
                                 (el.time * cellWidthDayView + el.minutPush + el.duration)),
               );

                history.push({ time, duration, minutPush });
                return (
                  <Event
                    key={Math.random()}
                    style={{
                      left: `${time * cellWidthDayView}px`,
                      top: `${exist.length * 32}px`,
                      marginLeft: `${minutPush}px`,
                      width: `${duration}px`,
                    }}
                    title={event.title}
                  />
                );
              })
           }
          {[...(Array(24 * 18))].map((value, index) => (
            <li style={{}} key={Math.random()} />
           ))}
        </ul>
      </div>

    </div>
  );
};

DayCalendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      startTime: PropTypes.object,
      fontSize: PropTypes.number,
    }),
  ),
};

export default DayCalendar;

