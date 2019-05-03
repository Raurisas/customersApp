import React, { useReducer } from 'react';
import StateContext from './StateContext';

const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

export default StateProvider;
