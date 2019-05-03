import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form';

it('should match snapshot', () => {
  const loading = true;
  const label = 'Test label';
  const type = 'type';

  const wrapper = shallow(<Form type={type} label={label} loading={loading} onClick={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});
