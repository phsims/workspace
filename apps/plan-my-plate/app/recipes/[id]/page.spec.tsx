import { render, waitFor } from '@testing-library/react';
import fetch from 'jest-fetch-mock';
import { Suspense } from 'react';
import mockRouter from 'next-router-mock';

import { getNutrition, getRecipe, getSimilarRecipes } from '@spoonacular-api';

import { mockNutrients, mockRecipes } from '../../testData';
import Page from './page';

jest.mock('next/navigation', () => require('next-router-mock'));

jest.mock('@spoonacular-api', () => ({
  getNutrition: jest.fn(),
  getRecipe: jest.fn(),
  getImage: jest.fn(),
  getSimilarRecipes: jest.fn(),
}));

describe('Page', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('should render successfully', async () => {
    (getRecipe as jest.MockedFunction<typeof getRecipe>).mockResolvedValueOnce(
      mockRecipes.recipes[0]
    );
    (
      getNutrition as jest.MockedFunction<typeof getNutrition>
    ).mockResolvedValueOnce(mockNutrients);
    (
      getSimilarRecipes as jest.MockedFunction<typeof getSimilarRecipes>
    ).mockResolvedValueOnce([mockRecipes.recipes[1]]);

    const pageResult = await Page({ params: { id: 12345 } });
    const { container } = render(pageResult);

    await waitFor(() => expect(container).toBeDefined());
  });

  it('should fetch the data', async () => {
    (getRecipe as jest.MockedFunction<typeof getRecipe>).mockResolvedValueOnce(
      mockRecipes.recipes[0]
    );
    (
      getNutrition as jest.MockedFunction<typeof getNutrition>
    ).mockResolvedValueOnce(mockNutrients);
    (
      getSimilarRecipes as jest.MockedFunction<typeof getSimilarRecipes>
    ).mockResolvedValueOnce([mockRecipes.recipes[1]]);

    const { container } = render(await Page({ params: { id: 12345 } }));

    await waitFor(() => {
      expect(getRecipe).toHaveBeenCalled();
      expect(getNutrition).toHaveBeenCalled();
      expect(getSimilarRecipes).toHaveBeenCalled();
    });
  });
});
