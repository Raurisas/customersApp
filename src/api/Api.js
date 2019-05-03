import API_CONSTANTS from './Constants';

const encode = (key, value) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

const normalizeData = customer =>
  [
    encode('email', customer.email),
    encode('metadata[fullName]', customer.fullName),
    encode('metadata[city]', customer.city),
    encode('metadata[street]', customer.street),
    encode('metadata[houseNumber]', customer.houseNumber),
    encode('metadata[zipCode]', customer.zipCode)
  ].join('&');

const request = (method, url, body) =>
  fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${API_CONSTANTS.API_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  }).then(response => response.json());

const addCustomer = customer => request('POST', API_CONSTANTS.URL, normalizeData(customer));

const updateCustomer = (id, customer) => request('POST', `${API_CONSTANTS.URL}/${id}`, normalizeData(customer));

const getCustomersList = lastCustomerId => {
  const additionalParams = lastCustomerId ? `?starting_after=${lastCustomerId}` : '';
  return request('GET', `${API_CONSTANTS.URL}${additionalParams}`);
};

const getCustomer = id => request('GET', `${API_CONSTANTS.URL}/${id}`);

const removeCustomer = id => request('DELETE', `${API_CONSTANTS.URL}/${id}`);

const API = {
  getCustomersList,
  addCustomer,
  updateCustomer,
  removeCustomer,
  getCustomer,
  encode,
  normalizeData
};

export default API;
