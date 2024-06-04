import { getNutrition } from './getNutrition';
import fetchMock from 'jest-fetch-mock';

jest.mock('../middleware/setup');
const mockResponse = {
  calories: '100',
  carbs: '20',
  fat: '10',
  protein: '5',
};

describe('getNutrition', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
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

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await getNutrition(id);
    expect(result).toEqual(expected);
  });
});
