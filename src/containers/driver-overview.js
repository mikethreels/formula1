/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import * as Actions from '../actions/index';
import Driver from '../components/driver';
import driverStyles from './styles/driver.module.css';
import CategoryFilter from '../components/categoryfilter';

const driverOverview = props => {
  const { scores } = props;
  const dispatch = useDispatch();
  const [constructor, setConstructor] = useState('All');
  const tempArray = scores.map(score => score.Constructors[0].name);
  const constructorArray = tempArray.filter((item, pos) => {
    return tempArray.indexOf(item) === pos;
  });
  let filteredracers = scores;

  const handleFilterChange = event => {
    setConstructor(event.target.value);
    dispatch(Actions.changeFilter(event.target.value));
  };

  if (constructor !== 'All') {
    filteredracers = scores.filter(score => score.Constructors[0].name === constructor);
  }

  return (
    <div className={driverStyles.all_drivers}>
      <CategoryFilter categories={constructorArray} callback={handleFilterChange} value={constructor} />
      {filteredracers.map(driver => <Driver key={Math.random()} driver={driver} />)}
    </div>
  );
};

const mapStateToProps = state => ({
  scores: state.scores,
});

export default connect(mapStateToProps)(driverOverview);
