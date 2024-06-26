export const getSpoonConfig = () => ({
  baseUrl: 'http://mock_base_url.com',
  imgUrl: 'http://mock_img_url.com',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'my_mock_api_key',
  },
  env: 'development',
});
