/* eslint-disable import/prefer-default-export */
const createDriver = driver => ({
  type: 'FETCH_DRIVERS_SUCCES',
  payload: driver,
});

const createScore = driver => ({
  type: 'FETCH_SCORE_SUCCES',
  payload: driver,
});

const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  payload: filter,
});

export { createDriver, createScore, changeFilter };
