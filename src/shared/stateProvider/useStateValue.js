import { useContext } from 'react';
import StateContext from './StateContext';

const useStateValue = () => useContext(StateContext);

export default useStateValue;
