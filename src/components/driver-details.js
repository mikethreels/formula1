/* eslint-disable no-restricted-globals */
import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const driverDetails = props => {
  const { scores } = props;
  // const match = useRouteMatch('/details/:driver');
  const { driver } = useParams();
  const currentDriver = scores.find(c => c.position === driver);
  return (
    <div>
      <h1>
        {currentDriver.Driver.code}
      </h1>
      <h2>
        {currentDriver.Driver.givenName}
        &nbsp;
        {currentDriver.Driver.familyName}
      </h2>
      <p>
        Position in championship:
        &nbsp;
        {currentDriver.position}
      </p>
      <p>
        Number of points:
        &nbsp;
        {currentDriver.points}
      </p>
      <p>
        Number of wins:
        &nbsp;
        {currentDriver.wins}
      </p>
      <p>
        Constructor:
        &nbsp;
        <a href={currentDriver.Constructors[0].url}>{currentDriver.Constructors[0].name}</a>
      </p>
      <p>
        Nationality:
        &nbsp;
        {currentDriver.Driver.nationality}
      </p>
      <p>
        Permanent number:
        &nbsp;
        {currentDriver.Driver.permanentNumber}
      </p>
      <p>
        Date of birth:
        &nbsp;
        {currentDriver.Driver.dateOfBirth}
      </p>
      <p>
        <a href={currentDriver.Driver.url}>more...</a>
      </p>
    </div>
  );
};

driverDetails.propTypes = { driver: PropTypes.objectOf(PropTypes.string) };

driverDetails.defaultProps = {
  driver: {},
};

const mapStateToProps = state => ({
  scores: state.scores,
});

export default connect(mapStateToProps)(driverDetails);
