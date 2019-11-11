/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import './DayCalendar.scss';
import { weekdays, months, cellWidthDayView } from '../utils/constants';

const today = new Date();

// eslint-disable-next-line react/prop-types
const DisplayText = ({ text, style={} }) => (
  <span style={style}>{text}</span>
);

const formatHours = (hour) => {
  if (hour > 12) return `${hour - 12}PM`;
  if (hour === 12) return `${hour}PM`;
  return `${hour}AM`;
}

const addSuffix = (date) => {
  const moduloTen = date % 10,
        moduloHundred = date % 100;
  if (moduloTen === 1 && moduloHundred !== 11) {
      return date + "st";
  }
  if (moduloTen === 2 && moduloHundred !== 12) {
      return date + "nd";
  }
  if (moduloTen === 3 && moduloHundred !== 13) {
      return date + "rd";
  }
  return date + "th";
}

const DayCalendar = () => {

  const [day, setDay] = useState(today);

  const calendarBody = useRef(null);

  useEffect(()=>{
    startOn(day.getHours())
  });

  const startOn = (hour) => {
    calendarBody.current.scrollBy(({
      top: 0,
      left: hour * cellWidthDayView,
    }));
  };

  const next = () => {
    const newDay = new Date(moment(day).add(1, 'day'));
    setDay(newDay)
  };

  const prev = () => {
    const newDay = new Date(moment(day).add(-1, 'week'));
    setDay(newDay)
  };

  const nextMonth = () => {
    const newDay = new Date(moment(day).add(1, 'month'));
    setDay(newDay);
  };

  const prevMonth = () => {
    const newDay = new Date(moment(day).add(-1, 'month'));
    setDay(newDay);
  };

  const events = [
    {
    title: 'The title...The title...The title...The title...The title...The title...',
    startTime: new Date(),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(-3, "hour")),
    endTime: new Date(moment().add(-2, "hour")),
  },{
    title: 'The title.The title...The title...The title...The title...The title.....',
    startTime: new Date(moment().add(1, "hour")),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title.The title...The title...The title.....',
    startTime: new Date(moment().add(-3, "hour")),
    endTime: new Date(moment().add(-2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(1, "hour")),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(-3, "hour")),
    endTime: new Date(moment().add(-2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(1, "hour")),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(-3, "hour")),
    endTime: new Date(moment().add(-2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(1, "hour")),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(-3, "hour")),
    endTime: new Date(moment().add(-2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(1, "hour")),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(-3, "hour")),
    endTime: new Date(moment().add(-2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(1, "hour")),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(-3, "hour")),
    endTime: new Date(moment().add(-2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(1, "hour")),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(-3, "hour")),
    endTime: new Date(moment().add(-2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(1, "hour")),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(-3, "hour")),
    endTime: new Date(moment().add(-2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(1, "hour")),
    endTime: new Date(moment().add(2, "hour")),
  },{
    title: 'The title...',
    startTime: new Date(moment().add(3, "hour")),
    endTime: new Date(moment().add(5, "hour")),
  }];

  events.sort((a, b) => a.startTime.getHours() - b.startTime.getHours());

  const history = [];

  return (
    <div id="day-calendar">
      <div className="calendar-header">
        <div className="month">
          <ul>
            <li className="navigation" onClick={() => prev()}>&#10094;</li>
            <li className="">
              <DisplayText text={`${weekdays[day.getDay()]} ${addSuffix(day.getDate())}`} />
            </li>
            <li className="navigation" onClick={() => next()}>&#10095;</li>
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
              // if(event.startTime.getHours() === index) {
                const time = event.startTime.getHours();
                const minutPush = event.startTime.getMinutes() * (cellWidthDayView / 60);
                const duration = ((event.endTime.getTime() - event.startTime.getTime()) / 60000) * (cellWidthDayView / 60); // duration in px
                const exist = history.filter((el) => 
                                  el.time === time
                                  ||
                                  (
                                  (el.time * cellWidthDayView + el.minutPush)
                                  < 
                                  (time * cellWidthDayView + minutPush)
                                  &&
                                  (time * cellWidthDayView + minutPush)
                                  <
                                  (el.time * cellWidthDayView + el.minutPush + el.duration))
                );
                            
                console.log(exist);
            
                history.push({time, duration, minutPush});
                return (
                  <div className="event" key={Math.random()} style={{
                    left: `${time * cellWidthDayView}px`,
                    top: `${exist.length * 32}px`,
                    marginLeft: `${minutPush}px`,
                    width: `${duration}px` }}>
                    <DisplayText text={event.title} />
                  </div>
                )
              // }
              // return null
            })
          }
          {[...(Array(24 * 18))].map((value, index) =>  (
            <li style={{}} key={Math.random()}>{
             
            }</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default DayCalendar;
