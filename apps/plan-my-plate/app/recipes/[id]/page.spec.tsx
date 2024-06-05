import { render, waitFor } from '@testing-library/react';
import fetch from 'jest-fetch-mock';
import mockRouter from 'next-router-mock';

import { ConfigProps, getSpoonConfig } from '../../middleware/setup';

import {
  mockRecipes,
  mockNutrients,
  RecipeDetailsProps,
} from '@workspace/components';
import Page from './page';
import { Suspense } from 'react';

import {
  getNutrition,
  getRecipe,
  getImage,
  getSimilarRecipes,
} from '../../utils';

jest.mock('next/navigation', () => require('next-router-mock'));

jest.mock('../../utils', () => ({
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
    ).mockResolvedValueOnce([mockRecipes.recipes[0]]);

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
