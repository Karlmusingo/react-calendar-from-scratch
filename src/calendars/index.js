/* eslint-disable react/require-default-props */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import DayCalendar from './DayCalendar';
import WeekCalendar from './WeekCalendar';
import MonthCalendar from './MonthCalendar';
import VerticalDayCalendar from './VerticalDayCalendar';
import '../styles/calendarEvents.scss';


const titleText = 'working in the weekend';

const eventsDefault = [
  {
    startTime: new Date(),
    endTime: new Date(moment().add(1, 'hour')),
    title: `${titleText}`,
  },
  {
    startTime: new Date(),
    endTime: new Date(moment().add(1, 'hour')),
    title: `${titleText}`,
  },
  {
    startTime: new Date(),
    endTime: new Date(moment().add(1, 'hour')),
    title: `${titleText}`,
  },
  {
    startTime: new Date(moment().add(2, 'hour')),
    endTime: new Date(moment().add(3, 'hour')),
    title: `${titleText}`,
  },
  {
    startTime: new Date(moment().add(-3, 'hour')),
    endTime: new Date(moment().add(-2, 'hour')),
    title: `${titleText}`,
  },
  {
    startTime: new Date(),
    endTime: new Date(moment().add(1, 'hour')),
    title: `${titleText}`,
  },
];

const Calendar = ({ events = eventsDefault, dayOrientation = 'horizontal' }) => {
  const [calendarView, setCalendarView] = useState('week');

  // eslint-disable-next-line no-shadow
  const formatEventTime = (events) => {
    const newEvents = events.map((event) => ({
      ...event,
      title: event.eventTitle,
      startTime: new Date(event.startTime),
      endTime: new Date(event.endTime),
    }));
    return newEvents;
  };

  const calendarSetting = (view) => {
    setCalendarView(view);
  };

  return (
    <div style={{ marginTop: '50px', position: 'relative' }}>
      <div className="calendar-view-setting">
        <button
          className={calendarView === 'day' ? 'active' : ''}
          onClick={() => calendarSetting('day')}
        >
          D
        </button>
        <button
          className={calendarView === 'week' ? 'active' : ''}
          onClick={() => calendarSetting('week')}
        >
          W
        </button>
        <button
          className={calendarView === 'month' ? 'active' : ''}
          onClick={() => calendarSetting('month')}
        >
          M
        </button>
      </div>
      {calendarView === 'day' ? (
        dayOrientation === 'horizontal' ? <DayCalendar events={events} /> : <VerticalDayCalendar events={events} />
      ) : null}
      {calendarView === 'week' ? <WeekCalendar events={events} /> : null}
      {calendarView === 'month' ? <MonthCalendar events={events} /> : null}
    </div>
  );
};

Calendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      startTime: PropTypes.instanceOf(Date),
      endTime: PropTypes.instanceOf(Date),
    }),
  ),
  dayOrientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default Calendar;
