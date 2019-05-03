import React, { useEffect, useState } from 'react';
import Geocode from 'react-geocode';
import API from '../../../api/Api';
import Input from '../../../shared/components/Input';
import Form from '../../../shared/components/Form';
import Button from '../../../shared/components/Button';
import useStateValue from '../../../shared/stateProvider/useStateValue';
import API_CONSTANTS from '../../../api/Constants';

function CustomerForm() {
  const initialState = {
    fullName: '',
    email: '',
    city: '',
    street: '',
    houseNumber: '',
    zipCode: ''
  };

  const [customer, setCustomer] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [invalidAddress, setInvalidAddress] = useState(false);
  const [state, dispatch] = useStateValue();
  const { editCustomer } = state;

  useEffect(() => {
    if (!editCustomer) return;
    setCustomer({
      fullName: editCustomer.metadata.fullName,
      email: editCustomer.email,
      city: editCustomer.metadata.city,
      street: editCustomer.metadata.street,
      houseNumber: editCustomer.metadata.houseNumber,
      zipCode: editCustomer.metadata.zipCode
    });
  }, [editCustomer]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const getCustomers = () => {
    API.getCustomersList().then(response => {
      dispatch({ type: 'UPDATE_CUSTOMERS_LIST', data: response });
    });
  };

  const cancelEdit = () => {
    dispatch({ type: 'ENABLE_EDIT', data: false });
    setCustomer(initialState);
  };

  const proceedSubmit = () => {
    setLoading(true);
    const updateCustomer = () => {
      getCustomers();
      setCustomer(initialState);
      setLoading(false);
      dispatch({ type: 'ENABLE_EDIT', data: false });
    };

    if (editCustomer) {
      API.updateCustomer(editCustomer.id, customer).then(() => {
        updateCustomer();
      });
    } else {
      API.addCustomer(customer).then(() => {
        updateCustomer();
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    Geocode.setApiKey(API_CONSTANTS.GOOGLE_MAPS_KEY);
    Geocode.fromAddress(`${customer.city} ${customer.street} ${customer.houseNumber} ${customer.zipCode}`).then(
      () => {
        proceedSubmit();
        setInvalidAddress(false);
      },
      () => {
        setInvalidAddress(true);
      }
    );
  };

  return (
    <div className="col col-30">
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="fullName"
          value={customer.fullName}
          placeholder="Full name"
          required
          handleChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          value={customer.email}
          placeholder="Email"
          required
          handleChange={handleInputChange}
        />
        <Input
          type="text"
          name="city"
          value={customer.city}
          placeholder="City"
          required
          handleChange={handleInputChange}
        />
        <Input
          type="text"
          name="street"
          value={customer.street}
          placeholder="Street"
          required
          handleChange={handleInputChange}
        />
        <Input
          type="string"
          name="houseNumber"
          value={customer.houseNumber}
          placeholder="House number"
          required
          handleChange={handleInputChange}
        />
        <Input
          type="number"
          name="zipCode"
          value={customer.zipCode}
          placeholder="Zipcode"
          required
          handleChange={handleInputChange}
        />
        {invalidAddress && 'Address is invalid'}
        <Button type="submit" label={editCustomer ? 'Edit' : 'Create customer'} loading={loading} />
        {editCustomer && <Button type="button" label="Cancel" onClick={cancelEdit} />}
      </Form>
    </div>
  );
}

export default CustomerForm;
