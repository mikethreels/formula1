import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Routes from '../routes';
import * as Action from '../actions/index';
import getDrivers from '../modules/apicall';
// import addDriverToStore from '../modules/storeUpdate';

const App = () => {
  const dispatch = useDispatch();

  const addDriverToStore = async () => {
    const driverObject = await getDrivers();
    const driverList = driverObject.MRData.DriverTable.Drivers;
    driverList.forEach(driver => {
      dispatch(Action.createDriver(driver));
    });
  };

  useEffect(() => {
    addDriverToStore();
  }, []);

  return (
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  );
};

export default App;
