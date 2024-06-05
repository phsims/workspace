import { getRandomRecipes } from './getRandomRecipes';
import fetchMock from 'jest-fetch-mock';
import { mockRecipes } from '@workspace/components';


jest.mock('../middleware/setup');

describe('getRandomRecipes', () => {
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

    const result = await getRandomRecipes();
    expect(result).toEqual(mockRecipes);
  });
} );