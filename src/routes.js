import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import driverOverview from './components/driver-overview';
import driverDetails from './components/driver-details';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={driverOverview} />
        <Route exact path="/details" component={driverDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
