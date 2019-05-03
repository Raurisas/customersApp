import React, { useEffect, useState } from 'react';
import useReactRouter from 'use-react-router';
import API from '../../../api/Api';
import Customer from '../components/Customer';

function CustomerDetails() {
  const { match, history } = useReactRouter();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    API.getCustomer(match.params.id).then(response => setCustomer(response));
  }, [match.params.id]);

  function goBack() {
    history.push('/');
  }

  return customer ? (
    <Customer customer={customer} backClickHandler={goBack} />
  ) : (
    <div className="customer">Loading...</div>
  );
}

export default CustomerDetails;
