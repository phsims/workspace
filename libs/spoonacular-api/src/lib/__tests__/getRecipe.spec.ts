import { getRecipe } from '../getRecipe';
import fetchMock from 'jest-fetch-mock';
import { mockRecipes } from '../testData/mockRecipes';

jest.mock('../middleware/setup');

describe('getRecipe', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockRecipes),
    });
  });
  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('should return the correct data', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockRecipes));

    const result = await getRecipe(12345);
    expect(result).toEqual(mockRecipes);
  });
});
