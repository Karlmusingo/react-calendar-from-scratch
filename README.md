# REACT EVENT CALENDAR FROM SCRATCH

This package has been deprecated, use https://www.npmjs.com/package/react-full-event-calendar instead

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
<img width="1317" alt="Screen Shot 2020-01-30 at 13 57 35" src="https://user-images.githubusercontent.com/35597858/73448180-f2f4a300-4368-11ea-9cd6-ab3b7b65f6cd.png">

## Week Calendar
<!-- Week calendar screenshot -->
<img width="1309" alt="Screen Shot 2020-01-30 at 13 57 56" src="https://user-images.githubusercontent.com/35597858/73448171-f0924900-4368-11ea-9524-1b9c3f61a63a.png">

## Month Calendar
<!-- Month calendar screenshot -->
<img width="1303" alt="Screen Shot 2020-01-30 at 13 58 06" src="https://user-images.githubusercontent.com/35597858/73448189-f4be6680-4368-11ea-8280-1a74e57d6b4c.png">

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
