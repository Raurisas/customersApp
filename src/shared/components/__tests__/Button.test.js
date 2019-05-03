import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

it('should match snapshot', () => {
  const wrapper = shallow(<Button onSubmit={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});
