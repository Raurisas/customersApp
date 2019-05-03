import React, { useState, useEffect } from 'react';
import useReactRouter from 'use-react-router';
import ListTable from '../components/ListTable';
import API from '../../../api/Api';
import Button from '../../../shared/components/Button';
import useStateValue from '../../../shared/stateProvider/useStateValue';

function List() {
  const [loading, setLoading] = useState(false);
  const [customerRemoving, setCustomerRemoving] = useState(false);
  const { history } = useReactRouter();
  const [state, dispatch] = useStateValue();
  const { customersList } = state;

  const getCustomersList = lastCustomer => {
    setLoading(true);
    API.getCustomersList(lastCustomer).then(response => {
      if (lastCustomer) {
        response.data = [...customersList.data, ...response.data];
      }
      dispatch({ type: 'UPDATE_CUSTOMERS_LIST', data: response });
      setLoading(false);
    });
  };

  useEffect(() => {
    getCustomersList();
  }, []);

  const handleItemClick = id => {
    if (customerRemoving) return;
    history.push(`/customer/${id}`);
  };

  const handleEditClick = (customer, e) => {
    e.stopPropagation();
    if (customerRemoving) return;
    dispatch({ type: 'ENABLE_EDIT', data: customer });
  };

  const loadMore = () => {
    getCustomersList(customersList.data[customersList.data.length - 1].id);
  };

  const removeCustomer = (customerId, e) => {
    if (customerRemoving) return;
    setCustomerRemoving(true);
    e.stopPropagation();
    API.removeCustomer(customerId).then(() => {
      setCustomerRemoving(false);
      getCustomersList();
    });
  };

  return (
    <div className="col col-70">
      <ListTable
        items={customersList.data}
        handleRowClick={handleItemClick}
        handleRemoveClick={removeCustomer}
        handleEditClick={handleEditClick}
        loading={loading}
      />
      {customersList.has_more ? <Button onClick={loadMore} label="Load more" type="button" loading={loading} /> : ''}
    </div>
  );
}

export default List;
