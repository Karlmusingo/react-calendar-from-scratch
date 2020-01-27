import React from 'react';
import { mount } from 'enzyme';
import Event from '../calendars/Event';


describe('testing event component', () => {
  it('should render event component', () => {
    const wrapper = mount(<Event />);
    expect(wrapper).toMatchSnapshot(wrapper);
  });
});
