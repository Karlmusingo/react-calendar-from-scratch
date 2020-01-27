/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
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
import { weekdays, months, cellHeightVerticalDayView } from '../utils/constants';
import compareDate from '../utils/compareDate';
import '../styles/verticalDayCalendar.scss';

export const addSuffix = (date) => {
  const moduloTen = date % 10;
  const moduloHundred = date % 100;
  if (moduloTen === 1 && moduloHundred !== 11) {
    return `${date}st`;
  }
  if (moduloTen === 2 && moduloHundred !== 12) {
    return `${date}nd`;
  }
  if (moduloTen === 3 && moduloHundred !== 13) {
    return `${date}rd`;
  }
  return `${date}th`;
};

const DayCalendar = ({
  events = [], onDayChange, day, setDay,
}) => {
  const calendarBody = useRef(null);

  useEffect(() => {
    let i = 0;
    const allEvents = document.querySelectorAll('.event');
    for (i = 0; i < allEvents.length; i++) {
      allEvents[i].style.width = `${98 / allEvents.length}%`;
    }
    startOn(day.getHours());
  }, [day]);


  const formatHours = (hour) => {
    if (hour > 12) return `${hour - 12}PM`;
    if (hour === 12) return `${hour}PM`;
    return `${hour}AM`;
  };
  const startOn = (hour) => {
    calendarBody.current.scrollBy({
      top: hour * cellHeightVerticalDayView,
      left: 0,
    });
  };

  const next = () => {
    const newDay = new Date(moment(day).add(1, 'day'));
    setDay(newDay);
    onDayChange(day, newDay);
  };

  const prev = () => {
    const newDay = new Date(moment(day).add(-1, 'week'));
    setDay(newDay);
    onDayChange(day, newDay);
  };

  const nextMonth = () => {
    const newDay = new Date(moment(day).add(1, 'month'));
    setDay(newDay);
    onDayChange(day, newDay);
  };

  const prevMonth = () => {
    const newDay = new Date(moment(day).add(-1, 'month'));
    setDay(newDay);
    onDayChange(day, newDay);
  };

  events.sort((a, b) => a.startTime.getHours() - b.startTime.getHours());

  const history = [];

  return (
    <div id="vertical-day-calendar">
      <div className="calendar-header">
        <div className="month" style={{ marginLeft: '196px' }}>
          <ul>
            <li
              className="navigation"
              onClick={() => prev()}
              role="button"
            >
&#10094;
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
        <ul id="days">
          {[...(Array(24 * 2))].map((value, index) => {
            if (index % 2 === 0) {
              return (
                <li className="hour" key={Math.random()}>
                  <DisplayText text={formatHours(index / 2)} />
                </li>
              );
            }
            return (
              <li className="events-cells" style={{}} key={Math.random()}>
                {
                events.map((event) => {
                  if (!compareDate(event.startTime, day)) return null;
                  event.startTime = new Date(event.startTime);
                  const time = event.startTime.getHours();
                  if (index !== (time * 2) + 1) return null;
                  const minutPush = event.startTime.getMinutes() * (cellHeightVerticalDayView / 60);
                  const duration = ((event.endTime.getTime() - event.startTime.getTime())
                        / 60000) * (cellHeightVerticalDayView / 60);
                  const exist = history.filter((el) => el.time === time
                                  || (
                                    (el.time * cellHeightVerticalDayView + el.minutPush)
                                  < (time * cellHeightVerticalDayView + minutPush)
                                  && (time * cellHeightVerticalDayView + minutPush)
                                  < (el.time * cellHeightVerticalDayView
                                    + el.minutPush + el.duration)));
                  history.push({ time, duration, minutPush });
                  return (
                    <Event
                      key={Math.random()}
                      style={{
                        height: `${duration}px`,
                        marginTop: `${minutPush}px`,
                      }}
                      title={event.title}
                    />
                  );
                })
              }
              </li>
            );
          })}
        </ul>
      </div>

    </div>
  );
};

DayCalendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      startTime: PropTypes.instanceOf(Date),
      endTime: PropTypes.instanceOf(Date),
    }),
  ),
};

export default DayCalendar;
