import { render, waitFor } from '@testing-library/react';
import mockRouter from 'next-router-mock';

import { mockRecipes } from '../__mocks__/recipesData';
import Recipes from './page';

jest.mock('../actions/getRecipes', () => ({
  __esModule: true,
  getRecipes: jest.fn().mockResolvedValue(mockRecipes),
}));

jest.mock('next/navigation', () => require('next-router-mock'));
describe('Recipes', () => {
  beforeEach(() => {
    mockRouter.push('/');
  });

  it('should match snapshot', async () => {
    const { asFragment } = render(await Recipes());
    await waitFor(() => {
      expect(asFragment).toMatchSnapshot();
    });
  });

  it('renders the recipe cards correctly', async () => {
    const { baseElement,getByTestId } = render(await Recipes());

    await waitFor(() => {
      expect(expect(baseElement).toBeDefined());

      mockRecipes.recipes.forEach((recipe) => {
        expect(getByTestId(recipe.id)).toBeInTheDocument();
      });
    });
  });
});
