import { Nutrient } from '@workspace/components';
import { getSpoonConfig } from './middleware/setup';

export async function getNutrition(id: number) {
  const { baseUrl, headers } = getSpoonConfig();
  try {
    const res = await fetch(`${baseUrl}/recipes/${id}/nutritionWidget.json`, {
      headers,
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    const nutrients = ['calories', 'carbs', 'fat', 'protein'];

    return nutrients.map((nutrient) => ({
      name: nutrient,
      value: data[nutrient],
    })) as Nutrient[];
  } catch (e) {
    console.error(e);
    throw e;
  }
}
