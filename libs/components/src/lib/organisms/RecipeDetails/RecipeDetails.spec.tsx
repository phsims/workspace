import { render } from '@testing-library/react';

import RecipeDetails from './RecipeDetails';
import { mockNutrients } from '../../__mocks__/nutrientsData';
import { mockRecipes } from '../../__mocks__/recipesData';

const mockRecipe = {
  ...mockRecipes.recipes[0],
  nutrients: mockNutrients,
  recipeImg: '/652825-556x370.webp',
};
describe('RecipeDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RecipeDetails {...mockRecipe} />);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = render(<RecipeDetails {...mockRecipe} />);
    expect(baseElement).toMatchSnapshot();
  } );

  
});
