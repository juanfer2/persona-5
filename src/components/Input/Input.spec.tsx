import { render } from '@testing-library/react';
import React from 'react';

import Input from './index';

const Props = { name: 'testInput' };

beforeEach(() => {
  render(<Input {...Props} />);
});

test('Its rendering', () => {});
