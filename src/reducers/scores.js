const defaultState = [];

const scoresReducer = (state = defaultState, action) => {
  const newDriver = [...state];
  switch (action.type) {
    case 'FETCH_SCORE_SUCCES':
      return newDriver.concat(action.payload);
    default:
      return state;
  }
};

export default scoresReducer;
