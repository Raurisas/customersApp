import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import CustomersListPage from './pages/customersList';
import CustomerDetailsPage from './pages/customerDetails';
import StateProvider from './shared/stateProvider/StateProvider';
import initialState from './shared/initialState';
import reducer from './shared/reducer';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CustomersListPage} />
          <Route exact path="/customer/:id" component={CustomerDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
