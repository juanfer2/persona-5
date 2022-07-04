import { render } from '@testing-library/react';
import React from 'react';

import Elem from './index';

const Props = {
  
};

beforeEach(() => {
	render(<Elem {...Props} />);	
});

test('Its rendering', () => { });
