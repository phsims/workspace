'use server';

import { getConfig } from '../utils/config';
import { data as mockData} from '../mocks/recipesData';

const { baseUrl, headers } = getConfig();
export async function getRecipes() {
  const env = process.env.NODE_ENV;
  if (env == 'development') {
    return mockData;
  }
  try {
    const res = await fetch(`${baseUrl}/recipes/random?number=10`, {
      headers,
    });
    const data = await res.json();

    return data;
  } catch (e) {
    throw new Error('Something went wrong');
  }
}
