import { render } from '@testing-library/react';
import React from 'react';

import Persona from './index';

const Props = {};

beforeEach(() => {
  render(<Persona {...Props} />);
});

test('Its rendering', () => {});
