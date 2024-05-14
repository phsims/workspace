'use server';

import { getConfig } from '../utils/config';
import { mockRecipes} from '../__mocks__/recipesData';

const { baseUrl, headers } = getConfig();
export async function getRecipes() {
  const env = process.env.NODE_ENV;
  if (env == 'development') {
    return mockRecipes;
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
