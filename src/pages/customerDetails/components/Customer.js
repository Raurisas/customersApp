import React from 'react';
import Button from '../../../shared/components/Button';

const Customer = ({ customer, backClickHandler }) => {
  return (
    <div className="customer">
      <Button onClick={backClickHandler} label="Go back" type="button" />
      <div className="customer-details">
        <div>Email: {customer.email}</div>
        <div>Full name:{customer.metadata.fullName}</div>
        <div>City: {customer.metadata.city}</div>
        <div>Street: {customer.metadata.street}</div>
        <div>House number:{customer.metadata.houseNumber}</div>
        <div>Zipcode: {customer.metadata.zipCode}</div>
      </div>
    </div>
  );
};

export default Customer;
