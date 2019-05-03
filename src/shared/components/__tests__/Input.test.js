import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';

it('should match snapshot', () => {
  const name = 'name';
  const type = 'type';
  const value = 'value';
  const placeholder = 'placeholder';
  const required = true;

  const wrapper = shallow(
    <Input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      handleChange={() => {}}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
