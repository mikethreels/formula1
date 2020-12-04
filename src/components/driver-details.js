import React from 'react';
import { connect } from 'react-redux';

const driverDetails = props => {
  const { fetchDrivers } = props;
  fetchDrivers();

  return (
    <div>
      <h1>hello details</h1>
    </div>
  );
};

// eslint-disable-next-line arrow-parens
const mapStateToProps = (state) => ({
  driver: state.driver,
});

export default connect(mapStateToProps)(driverDetails);
