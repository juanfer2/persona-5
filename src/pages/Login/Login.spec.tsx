import { render } from '@testing-library/react';
import React from 'react';

import Login from './index';

beforeEach(() => {
  render(<Login />);
});

test('Its rendering', () => {});
