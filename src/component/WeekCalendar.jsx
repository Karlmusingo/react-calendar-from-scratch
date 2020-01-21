/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './WeekCalendar.scss';
import { weekdays, months, cellHeight } from '../utils/constants';
import Event from './Event';
import DisplayText from './DisplayText';

const WeekCalendar = ({day, setDay}) => {

  const events = [
    {
      title: 'The title...The title...The title...The title...The title...The title...',
      startTime: new Date(),
      endTime: new Date(moment().add(1, "hour")),
    },{
      title: 'The title...The title...The title...The title...The title...The title...',
      startTime: new Date(),
      endTime: new Date(moment().add(2, "hour")),
    },{
      title: 'The title...The title...The title...The title...The title...The title...',
      startTime: new Date(moment().add(1, "hour")),
      endTime: new Date(moment().add(2, "hour")),
    }
  ];

  // const [] = useState(new Date());
  const monthDefault = day.getMonth();
  const yearDefault = day.getFullYear();
  const firstDayOfTheWeekDefault = day.getDate() - day.getDay();

  const [month, setMonth] = useState(monthDefault);
  const [year, setYear] = useState(yearDefault);
  const [firstDayOfTheWeek, setFirstDayOfTheWeek] = useState(firstDayOfTheWeekDefault);
  const [lastDayOfTheWeek, setLastDayOfTheWeek] = useState(new Date(year, month, firstDayOfTheWeekDefault + 6).getDate());

  const numberOfDays = new Date(year, month + 1, 0).getDate();

  useEffect(() => {
    setMonth(day.getMonth());
    setYear(day.getFullYear());
    setFirstDayOfTheWeek(day.getDate() - day.getDay());
    setLastDayOfTheWeek(new Date(year, month, firstDayOfTheWeekDefault + 6).getDate())
  }, [day])

  const next = () => {
    setDay(new Date(moment(day).add(1, 'week')));
  }

  const prev = () => {
    setDay(new Date(moment(day).add(-1, 'week')));
  }

  const nextMonth = () => {
    setDay(new Date(moment(day).add(1, 'month')));
  }

  const prevMonth = () => {
    setDay(new Date(moment(day).add(-1, 'month')));
  }
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
