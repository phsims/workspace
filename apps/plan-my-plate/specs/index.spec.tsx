import React from 'react';
import { useRouter } from 'next-router-mock';
import mockRouter from 'next-router-mock';
import { render } from '@testing-library/react';

import Page from '../app/page';

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
