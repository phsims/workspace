import { getImage } from '../getImage';


jest.mock('../middleware/setup');
describe('getImage', () => {

  it('should return the correct image url', () => {
    const id = 12345;
    const size = 'small';
    const expected = 'http://mock_img_url.com/recipes/12345-480x360.jpg';
    const result = getImage(id, size);
    expect(result).toBe(expected);
  });
});
