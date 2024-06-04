import { getSimilarRecipes } from './getSimilarRecipes';
import fetchMock from 'jest-fetch-mock';
import { mockRecipes } from '@workspace/components';

jest.mock('../middleware/setup');
jest.mock('./getImage', () => ({
  getImage: () => 'https://img.spoonacular.com/recipes/632778-556x370.jpg',
}));

describe('getSimilarRecipes', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue([mockRecipes.recipes[1]]),
    });
  });
  afterEach(() => {
    fetchMock.resetMocks();
  });
  it('should return the correct data', async () => {
    const result = await getSimilarRecipes(12345);
    expect(result).toEqual([mockRecipes.recipes[1]]);
  });
});