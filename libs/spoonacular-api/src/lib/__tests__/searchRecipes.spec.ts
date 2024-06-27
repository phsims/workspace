import { mockSearchRecipes } from '../testData/mockRecipes';
import fetchMock from 'jest-fetch-mock';
import { searchRecipes } from '../searchRecipes';

jest.mock('../middleware/setup');
describe('searchRecipes', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockSearchRecipes),
    });

  });

  afterEach(() => {
    fetchMock.resetMocks();
  });
  it('should use the correct url with query only', async () => {
    await searchRecipes({
      query: 'pasta',
      number: 9,
    });
    expect(fetch).toHaveBeenCalledWith(
      'http://mock_base_url.com/recipes/complexSearch?query=pasta&number=9',
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'my_mock_api_key',
        },
      }
    );
  });

  it('should use the correct url with query and options', async () => {
    await searchRecipes({
      query: 'pasta',
      number: 9,
      options: {
        cuisine: 'italian',
        excludeCuisine: 'mexican',
        diet: 'vegetarian',
        intolerances: 'gluten',
        includeIngredients: 'tomato',
        excludeIngredients: 'beef',
        type: 'main course',
      },
    });
    expect(fetch).toHaveBeenCalledWith(
      'http://mock_base_url.com/recipes/complexSearch?query=pasta&cuisine=italian&excludeCuisine=mexican&diet=vegetarian&intolerances=gluten&includeIngredients=tomato&excludeIngredients=beef&type=main%20course&number=9',
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'my_mock_api_key',
        },
      }
    );
  });

  it('should return a list of recipes', async () => {
    const result = await searchRecipes({
      query: 'pasta',
      number: 9,
    });
    expect(result).toEqual(mockSearchRecipes);
  });
});
