/* eslint-disable max-len */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CategoryFilter from '../categoryfilter';
import Reducers from '../../reducers/index';

const scores = {
  position: 3,
  points: 10,
  wins: 9,
  Driver: {
    code: 'Ver',
    givenName: 'Max',
    familyName: 'Verstappen',
    nationality: 'Netherlands',
    permanentNumber: 33,
    dateOfBirth: '01-01-1997',
    url: 'https://testurl.com',
  },
  Constructors: [
    {
      url: 'https://testurl.com',
      name: 'Red Bull',

    },
  ],
};

const state = {
  drivers: [],
  scores: [scores],
  filter: '',
};

const store = createStore(
  Reducers,
  state,
);

it('renders Category filter correctly', () => {
  const testFunction = () => {};

  const stock = {
    categories: ['Mercedes', 'Red-bull', 'Ferrari'],
    callback: testFunction,
    value: 'All',
  };

  const tree = renderer.create(
    <Provider store={store}>
      <CategoryFilter categories={stock.categories} callback={stock.callback} value={stock.value} />
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});
