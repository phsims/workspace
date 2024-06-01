const baseUrlSpoon = process.env.NEXT_PUBLIC_SPOONACULAR_BASE_URL;
const apiKeySpoon = process.env.NEXT_PRIVATE_SPOONACULAR_API_KEY;
const imgUrlSpoon = process.env.NEXT_PUBLIC_SPOONACULAR_IMG_URL;
const env = process.env.VERCEL_ENV;

export interface ConfigProps {
  baseUrl: string;
  imgUrl: string;
  headers: {
    [key: string]: string;
  };
  env: string;
}

export function getSpoonConfig() {
  if (!apiKeySpoon) {
    throw new Error('API_KEY is not set');
  }

  if (!baseUrlSpoon) {
    throw new Error('API_BASE_URL is not set');
  }
  if (!imgUrlSpoon) {
    throw new Error('API_BASE_URL is not set');
  }

  return {
    baseUrl: baseUrlSpoon,
    imgUrl: imgUrlSpoon,
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': apiKeySpoon,
    },
    env,
  } as ConfigProps;
}
