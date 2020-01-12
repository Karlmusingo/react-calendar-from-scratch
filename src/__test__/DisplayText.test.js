/* eslint-disable no-unused-vars */
import React from 'react';
import { mount } from 'enzyme';
import DisplayText from '../calendars/DisplayText';


describe('render DisplayText component', () => {
  let text;
  it('should display test on calendar', () => {
    const wrapper = mount(<DisplayText test="textEvent" name="meeting test" style={text} />);
    expect(wrapper).toMatchSnapshot();
  });
});
