import { render } from '@testing-library/react';
import mockRouter from 'next-router-mock';

import { mockRecipes } from '../../__mocks__/recipesData';

import RecipeCardGrid from './RecipeCardGrid';


jest.mock('next/navigation', () => require('next-router-mock'));

describe('RecipeCardGrid', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/recipes');
  });
  it('should render successfully', () => {
    const { baseElement } = render(<RecipeCardGrid {...mockRecipes} />);
    expect(baseElement).toBeTruthy();
  });
  it('should match the snapshot', () => {
    const { baseElement } = render(<RecipeCardGrid {...mockRecipes} />);
    expect(baseElement).toMatchSnapshot();
  });
  it('should render the correct number of recipes', () => {
    const { getByTestId } = render(<RecipeCardGrid {...mockRecipes} />);
    mockRecipes.recipes.forEach((recipe) => {
      expect(getByTestId(recipe.id)).toBeInTheDocument();
    });
  });
});
