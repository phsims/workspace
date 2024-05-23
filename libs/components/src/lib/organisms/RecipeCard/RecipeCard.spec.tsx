import { render } from '@testing-library/react';

import RecipeCard from './RecipeCard';

const defaultProps = {
  id: 0,
  image: '/test.png',
  title: 'test title',
  summary: 'test summary',
  link: '/test-link',
};

jest.mock('next/navigation', () => require('next-router-mock'));

describe('RecipeCard', () => {
 it('should match snapshot', () => {
    const { baseElement } = render(<RecipeCard {...defaultProps} />);
    expect(baseElement).toMatchSnapshot();
  })
  it('should render successfully', () => {
    const { baseElement } = render(<RecipeCard {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });
});
