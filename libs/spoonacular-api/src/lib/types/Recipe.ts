import { Nutrient } from './Nutrient';

export interface Recipe extends ShortRecipe {
  sourceName: string;
  spoonacularSourceUrl: string;
  aggregateLikes: number;
  healthScore: number;
  nutrition?: Nutrient[];
}

export interface ShortRecipe {
  id: number;
  title: string;
  imageType: string;
  readyInMinutes?: number;
  servings: number;
  sourceUrl: string;
  image?: string;
}
