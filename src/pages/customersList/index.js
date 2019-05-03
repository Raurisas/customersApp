import React from 'react';
import CustomerForm from './containers/CustomerForm';
import List from './containers/List';

function CustomersListPage() {
  return (
    <div className="container">
      <div className="row">
        <CustomerForm />
        <List />
      </div>
    </div>
  );
}

export default CustomersListPage;
