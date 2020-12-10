// import React from 'react';
// import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
// import { createStore } from 'redux';
// import App from '../app';
// import allReducer from '../../reducers/index';

// describe('App', () => {
//   beforeEach(() => {
//     const mockState = {
//       filter: 'My Filter',
//       scores: ['My scores'],
//     };

//     const mockStore = createStore(allReducer, mockState);
//     render(<App store={mockStore} />);
//   });
//   it('Tests if component renders correctly', () => {
//     const tree = renderer
//       .create(<App />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
