import React from 'react';
import { shallow } from 'enzyme';
import UseQ from '../calendars/index';


const realUseState = React.useState;

const stubInitialState = ['week'];

jest
  .spyOn(React, 'useState')
  .mockImplementationOnce(() => realUseState(stubInitialState));

describe('render index meeting component', () => {
  const wrapper = shallow(
    <UseQ />,
  );

  it('SHOULD TEST THE COMPONENT', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
