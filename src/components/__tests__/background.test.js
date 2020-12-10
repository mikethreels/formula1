import { render, screen } from '@testing-library/react';
import Background from '../background';

describe('background Component', () => {
  it(
    '1. Renders correctly',
    () => {
      render(<Background />);
      const header = screen.getByText(/formula/i);
      expect(header).toBeDefined();
    },
  );
});
