const defaultState = [];

const driverReducer = (state = defaultState, action) => {
  const newDriver = [...state];
  switch (action.type) {
    case 'FETCH_DRIVERS_SUCCES':
      return newDriver.concat(action.payload);
    default:
      return state;
  }
};

export default driverReducer;
