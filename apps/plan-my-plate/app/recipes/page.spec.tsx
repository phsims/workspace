
import fetch from 'jest-fetch-mock';
import { render } from '@testing-library/react';

import { mockRecipes } from '@workspace/components';

import Recipes from './page';
import { getRandomRecipes } from '@spoonacular-api';


jest.mock('next/navigation', () => require('next-router-mock'));

jest.mock('@spoonacular-api', () => ({
  getRandomRecipes: jest.fn(),
}));
describe('Recipes', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('should render successfully', async () => {
    const { container } = render(await Recipes());
    expect(container).toBeDefined();
  });

  it('should fetch the data', async () => {
    (getRandomRecipes as jest.MockedFunction<typeof getRandomRecipes>).mockResolvedValueOnce(mockRecipes);

    await Recipes();

    expect(getRandomRecipes).toHaveBeenCalled();
  });
  
});
