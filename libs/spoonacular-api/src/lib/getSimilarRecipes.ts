import { getSpoonConfig } from './middleware/setup';
import { getImage } from './getImage';

interface ShortRecipe {
  id: number;
  title: string;
  imageType: string;
  readyInMinutes?: number;
  servings: number;
  sourceUrl: string;
  image?: string;
}

export async function getSimilarRecipes(id: number) {
  const { baseUrl, headers } = getSpoonConfig();
  try {
    const res = await fetch(`${baseUrl}/recipes/${id}/similar?number=3`, {
      headers,
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const origionaData = await res.json();

    const data = origionaData.map((recipe: ShortRecipe) => {
      return {
        ...recipe,
        image: getImage(recipe.id, 'small'),
      };
    }) as ShortRecipe[];

    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
