import { getNutrition } from '../getNutrition';
import fetchMock from 'jest-fetch-mock';
import { mockNutrition } from '../testData/mockNutrients';

jest.mock('../middleware/setup');

describe('getNutrition', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockNutrition),
    });
  });
  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('should return the correct nutrition data', async () => {
    const id = 12345;

    const expected = [
      { name: 'calories', value: '100' },
      { name: 'carbs', value: '20' },
      { name: 'fat', value: '10' },
      { name: 'protein', value: '5' },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(mockNutrition));

    const result = await getNutrition(id);
    expect(result).toEqual(expected);
  });
});
