/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import driverStyles from './styles/driver.module.css';

export const Driver = props => {
  const { driver } = props;
  return (
    <Link to={`details/${driver.position}`} className={driverStyles.drivercontainer}>
      <div className={driverStyles.driver}>
        <span>
          {driver.Driver.givenName}
          &nbsp;
        </span>
        <span>{driver.Driver.familyName}</span>
      </div>
    </Link>
  );
};

Driver.propTypes = { driver: PropTypes.object };

Driver.defaultProps = {
  driver: {},
};

export default Driver;
