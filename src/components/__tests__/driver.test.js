/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable import/no-named-as-default */
import { render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import Driver from '../driver';

describe('Driver Component', () => {
  const driver = {
    position: 1,
    Driver: {
      givenName: 'Max',
      familyName: 'Verstappen',
    },
  };
  render(
    <BrowserRouter>
      <Driver driver={driver} />
    </BrowserRouter>,
  );
  it(
    '1. Renders correctly with the provided name',
    () => {
      const logo = screen.getByText('1');
      expect(logo).toBeDefined();
    },
  );

  it(
    '2. Checks the types for the props',
    () => {
      expect(Driver.propTypes.driver).toBe(PropTypes.object);
    },
  );
});
