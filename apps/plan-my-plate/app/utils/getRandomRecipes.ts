
import { getSpoonConfig } from '../middleware/setup';

export async function getRandomRecipes() {
    const { baseUrl, headers } = getSpoonConfig();
    try {
      const res = await fetch(`${baseUrl}/recipes/random?number=9`, {
        headers,
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
  