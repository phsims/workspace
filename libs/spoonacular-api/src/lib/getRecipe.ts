import { getSpoonConfig } from './middleware/setup';

export async function getRecipe(id: number) {
  const { baseUrl, headers } = getSpoonConfig();
  try {
    const res = await fetch(`${baseUrl}/recipes/${id}/information`, {
      headers,
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
