import { render } from '@testing-library/react';

import RecipeCard from './RecipeCard';

describe('RecipeCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RecipeCard id={0} image={''} title={''} summary={''} />);
    expect(baseElement).toBeTruthy();
  });
});
