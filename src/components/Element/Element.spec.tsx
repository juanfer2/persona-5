import { render } from '@testing-library/react';
import React from 'react';

import Element from './index';

const Props = {};

beforeEach(() => {
  render(<Element {...Props} />);
});

test('Its rendering', () => {});
