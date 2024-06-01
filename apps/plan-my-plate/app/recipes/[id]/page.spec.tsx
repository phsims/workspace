import { render } from '@testing-library/react';
import fetch from 'jest-fetch-mock';
import { ConfigProps, getSpoonConfig } from '../../middleware/setup';

import {
  mockRecipes,
  mockNutrients,
  RecipeDetailsProps,
} from '@workspace/components';
import Page from './page';
import { Suspense } from 'react';

jest.mock('../../middleware/setup');
describe('Page', () => {
  let appConfig: ConfigProps;

  beforeEach(() => {
    appConfig = getSpoonConfig();
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest
        .fn()
        .mockResolvedValue({ ...mockRecipes.recipes[0], ...mockNutrients }),
    });
  });

  afterEach(() => {
    fetch.resetMocks();
  });

  it('should render successfully', async () => {
    const { getByText } = render(await Page({ params: { id: 1 } }));
    const title = await getByText('My Asian Calamari');
    expect(title).toBeInTheDocument();
  });
});
