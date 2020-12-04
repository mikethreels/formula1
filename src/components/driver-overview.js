/* eslint-disable import/no-named-as-default */
/* eslint-disable arrow-body-style */
import React from 'react';
import { connect } from 'react-redux';
import Driver from './driver';
import driverStyles from './styles/driver.module.css';

const driverOverview = props => {
  const { drivers } = props;
  return (
    <div className={driverStyles.all_drivers}>
      {drivers.map(driver => <Driver key={driver} driver={driver} />)}
    </div>
  );
};

const mapStateToProps = state => ({
  drivers: state.drivers,
});

export default connect(mapStateToProps)(driverOverview);
