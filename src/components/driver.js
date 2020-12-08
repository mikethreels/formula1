import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import driverStyles from './styles/driver.module.css';

export const Driver = props => {
  const { driver } = props;
  // const newTo = {
  //   pathname: '/details',
  //   search: driver.driverId,
  //   state: driver,
  // };
  return (
    <Link to={`details/${driver.position}`} className={driverStyles.drivercontainer}>
      <div className={driverStyles.driver}>
        <span>
          {driver.position}
          &nbsp;
        </span>
        <span>
          {driver.Driver.givenName}
          &nbsp;
        </span>
        <span>{driver.Driver.familyName}</span>
      </div>
    </Link>
  );
};

Driver.propTypes = { driver: PropTypes.objectOf(PropTypes.string) };

Driver.defaultProps = {
  driver: {},
};

export default Driver;