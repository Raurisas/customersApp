import React from 'react';
import { shallow } from 'enzyme';
import ListTable from '../ListTable';

it('should match snapshot', () => {
  const items = [
    {
      id: 1,
      email: 'aurimas993@gmail.com',
      metadata: {
        fullName: 'Aurimas Jackevicius',
        city: 'Vilnius',
        street: 'Ulvydo',
        houseNumber: '7',
        zipCode: '08250'
      }
    },
    {
      id: 2,
      email: 'aurimas993@gmail.com',
      metadata: {
        fullName: 'Aurimas Jackevicius',
        city: 'Vilnius',
        street: 'Ulvydo',
        houseNumber: '7',
        zipCode: '08250'
      }
    }
  ];

  const wrapper = shallow(
    <ListTable items={items} handleRowClick={() => {}} handleRemoveClick={() => {}} handleEditClick={() => {}} />
  );
  expect(wrapper).toMatchSnapshot();
});
