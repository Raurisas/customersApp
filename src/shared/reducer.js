const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CUSTOMERS_LIST':
      return {
        ...state,
        customersList: action.data
      };
    case 'ENABLE_EDIT':
      return {
        ...state,
        editCustomer: action.data
      };

    default:
      return state;
  }
};

export default reducer;
