# REACT EVENT CALENDAR FROM SCRATCH

An event calendar like the google's calendar with generic style.


<!-- Generate a complete NodeJS app (API) with babel, jest, Sequelize, JWT already configured for you.

- [Creating an App](#creating-an-app) – How to create a new app.

Generate Node Project works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/abayo-luc/generate-node-project/issues/new).<br>
If you have questions or need help, please ask via email: luc.bayo@gmail.com -->

## Installation

```sh
npm i react-full-event-calendar
```

or

```sh
yarn add react-full-event-calendar
```

## Day Calendar
<!-- Day calendar screenshot -->

## Week Calendar
<!-- Week calendar screenshot -->

## Month Calendar
<!-- Month calendar screenshot -->

## Usage
```sh
const Calendar = require('react-full-event-calendar');

const titleText = 'working in the weekend';

const events = [
  {
    startTime: new Date(moment().add(2, 'hour')),
    endTime: new Date(moment().add(3, 'hour')),
    title: 'working in the weekend',
  },
  {
    startTime: new Date(moment().add(-3, 'hour')),
    endTime: new Date(moment().add(-2, 'hour')),
    title: 'working in the weekend',
  },
  {
    startTime: new Date(),
    endTime: new Date(moment().add(1, 'hour')),
    title: 'working in the weekend',
  },
];

<Calendar
  events={events}
/>

```

## Props
| Property              | Type                                      | Default      | Description |
| ----------------      | ----------                                | -----------  |---------------------------------------------|
| events                | Array                                     | Required     | Events to display on the calendar             |
| dayOrientation        | String                                    | horizontal   | The orientation of the day calendar, either `'vertical'` or `'horizontal'`|
| defautlCalendarView   | String                                    | week         | The default calendar to show, either `'day'`, `'week'` or `'month'`       |
| defaultDate           | Date                                      | new Date()   | The date to start on when mounted                                         |
| onDayChange           | func(day, newDay)                         |              | Callback when the day change on day calendar                              |
| onWeekChange          | func(newStartOfTheWeek, newEendOfTheWeek) |              | Callback when the week change on week calendar                            |
| onMonthChange         | func(newMonth, newYear)                   |              | Callback when the month change on month calendar                          |

## Event Objects

| Key              | Type       | Required | Description                 |
| -----------      | ---------- | -------- | -------------------------   |
| title            | String     | true     | The title of the event      |
| startTime        | Date       | true     | The start time of the event |
| endTime          | Date       | true     | The end time of the event   |

## DEMO
[Demo](https://karlmusingo.github.io/react-calendar-from-scratch/)

## Authors

* [Karl Musingo](https://github.com/karlmusingo/) 
* [Emmanuel Rukundo](https://github.com/EmyRukundo/)

See also the list of [contributors](https://github.com/Karlmusingo/react-calendar-from-scratch/contributors) who participated in this project.
