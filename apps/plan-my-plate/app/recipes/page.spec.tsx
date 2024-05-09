import { render, waitFor } from '@testing-library/react';

import { mockRecipes } from '../__mocks__/recipesData';
import Recipes from './page';

jest.mock('../actions/getRecipes', () => ({
  __esModule: true,
  getRecipes: jest.fn().mockResolvedValue(mockRecipes),
}));

describe('Recipes', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(await Recipes());
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });

  it('renders recipe cards', async () => {
    const { getByText } = render(await Recipes());
    await waitFor(() => {
      expect(getByText('My Asian Calamari')).toBeDefined();
      expect(
        getByText('Artisan Farfalle Pasta With Smoked Salmon and Cream Sauce')
      ).toBeDefined();
      expect(getByText('Quick and Easy Caprese Salad')).toBeDefined();
    });
  });
});
