/* eslint-disable import/prefer-default-export */
const createDriver = driver => ({
  type: 'FETCH_DRIVERS_SUCCES',
  payload: driver,
});

export { createDriver };
