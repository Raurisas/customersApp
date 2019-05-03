import React from 'react';
import { shallow } from 'enzyme';
import Customer from '../Customer';

it('should match snapshot', () => {
  const customer = {
    email: 'aurimas993@gmail.com',
    metadata: {
      fullName: 'Aurimas Jackevicius',
      city: 'Vilnius',
      street: 'Ulvydo',
      houseNumber: '7',
      zipCode: '08250'
    }
  };

  const wrapper = shallow(<Customer customer={customer} backClickHandler={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});
