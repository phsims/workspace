import React from 'react';
import { render } from '@testing-library/react';

import Page from './page';

jest.mock('next/navigation', () => {
  return {
    usePathname: jest.fn(),
    ...require('next-router-mock'),
  };
});

describe('Page', () => {

  it('should render successfully', () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
  });

});
