import { getSpoonConfig } from './middleware/setup';
import { CourseType,DietType ,IntoleranceType,CuisineType} from './types';

export interface queryParams {
  query: string;
  number: number;
  options?: {
    cuisine?: CuisineType;
    excludeCuisine?: CuisineType;
    diet?: DietType;
    intolerances?: IntoleranceType;
    includeIngredients?: string;
    excludeIngredients?: string;
    type?: CourseType;
  };
}

export async function searchRecipes(queryParams: queryParams) {
  const { baseUrl, headers } = getSpoonConfig();
  const { query, number = 9, options } = queryParams;

  let queryOptions = '';
  if (options) {
    queryOptions = Object.keys(options)
      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(options[k]))
      .join('&');
  }

  queryOptions = queryOptions ? `&${queryOptions}` : '';

  try {
    const res = await fetch(
      `${baseUrl}/recipes/complexSearch?query=${query}${queryOptions}&number=${number}`,
      {
        headers,
      }
    );

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
