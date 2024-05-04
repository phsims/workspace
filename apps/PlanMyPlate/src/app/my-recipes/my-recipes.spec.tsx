import { render } from '@testing-library/react';

import MyRecipes from './my-recipes';

describe('MyRecipes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyRecipes />);
    expect(baseElement).toBeTruthy();
  });
});
