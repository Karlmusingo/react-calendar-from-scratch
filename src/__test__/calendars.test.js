/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { addSuffix } from '../calendars/DayCalendar';
import DisplayEvent from '../calendars/DisplayEvent';

describe('testing  calendar component', () => {
  it('should return date of the event ', () => {
    addSuffix('17');
  });
});

describe('testing  display event component', () => {
  it('should render title of the event on calendar', () => {
    const wrapper = mount(<DisplayEvent />);
    const span = wrapper.find('span');
    const result = span.text();
    expect(wrapper).toMatchSnapshot();
  });
});


describe('testing calendar data component', () => {
  it('should get calendar Ids', () => {
    const wrapper = shallow(<getCalendarData />);
    expect(wrapper).toMatchSnapshot();
  });


  it('should validate calendar data into standard date format', () => {
    const wrapper = shallow(<formatCalendarData />);
    expect(wrapper).toMatchSnapshot();
  });


  it('should format calendar data compare to the moment ', () => {
    const wrapper = shallow(<formatDate />);
    expect(wrapper).toMatchSnapshot();
  });


  it('should fetch calendar data with events', () => {
    const wrapper = shallow(<fetchCalendars />);
    expect(wrapper).toMatchSnapshot();
  });


  it('should validate calendar data', () => {
    const wrapper = shallow(<isValidDate />);
    expect(wrapper).toMatchSnapshot();
  });
});
