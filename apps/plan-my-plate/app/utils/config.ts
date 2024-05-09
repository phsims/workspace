const api = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_SPOONACULAR_BASE_URL;

export const getConfig = () => {
  if (!api) {
    throw new Error('Spoonacular API key is not provided');
  }
  if (!baseUrl) {
    throw new Error('URL is not provided');
  }
  const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': api,
  };

  return { baseUrl, headers };
};
