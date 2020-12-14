/* eslint-disable react/forbid-foreign-prop-types */
import { render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { usehistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import DriverDetails from '../driver-details';
import Reducers from '../../reducers/index';

describe('Driver Component', () => {
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

  it(
    '1. Renders correctly with the provided name', () => {
      const history = usehistory();
      const route = '/details/3';
      history.push(route);
      // console.log(history);
      // const history = createMemoryHistory({
      //   initialEntries: ['/details/3'],
      // });
      render(
        <Provider store={store}>
          <DriverDetails />
        </Provider>,
        {
          route: 'details/3',
        },
      );
      // expect(history.location.pathname).toEqual('/details/3');
      // const myInput = getByLabelText('driver');
      const test = screen.getAllByText('Constructor:');
      expect(test).toBeDefined();
    },
  );

  it(
    '2. Checks the types for the props',
    () => {
      expect(DriverDetails.propTypes.scores).toBe(PropTypes.object);
    },
  );
});
