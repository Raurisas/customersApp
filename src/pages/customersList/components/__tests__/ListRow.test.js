import React from 'react';
import { shallow } from 'enzyme';
import ListRow from '../ListRow';

it('should match snapshot', () => {
  const item = {
    email: 'aurimas993@gmail.com',
    metadata: {
      fullName: 'Aurimas Jackevicius'
    }
  };

  const wrapper = shallow(
    <ListRow item={item} handleRowClick={() => {}} handleRemoveClick={() => {}} handleEditClick={() => {}} />
  );
  expect(wrapper).toMatchSnapshot();
});
