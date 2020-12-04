import React from 'react';
import PropTypes from 'prop-types';
import driverStyles from './styles/driver.module.css';

export const Driver = props => {
  const { driver } = props;
  return (
    <div className={driverStyles.drivercontainer}>
      <div className={driverStyles.driver}>
        <span>
          {driver.givenName}
          &nbsp;
        </span>
        <span>{driver.familyName}</span>
      </div>
    </div>
  );
};

Driver.propTypes = { driver: PropTypes.objectOf(PropTypes.string) };

Driver.defaultProps = {
  driver: {},
};

export default Driver;
