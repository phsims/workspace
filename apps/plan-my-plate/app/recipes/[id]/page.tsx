import {
  Banner,
  RecipeDetails,
  RecipeDetailsProps,
} from '@workspace/components';
import { getSpoonConfig } from '../../middleware/setup';
import { Container } from '@mui/material';

async function getData(id: number) {
  const { baseUrl, headers } = getSpoonConfig();
  try {
    const info = await fetch(`${baseUrl}/recipes/${id}/information`, {
      headers,
    });

    const nutrition = await fetch(
      `${baseUrl}/recipes/${id}/nutritionWidget.json`,
      {
        headers,
      }
    );

    if (!info.ok) {
      throw new Error('Failed to fetch data');
    }

    const recipeInfo = await info.json();
    const nutritionalInfo = await nutrition.json();

    const data = { ...recipeInfo, ...nutritionalInfo };

    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export interface IdProps {
  params: {
    id: number;
  };
}

export default async function Page({ params }: IdProps) {
  const { imgUrl } = getSpoonConfig();

  const {
    title,
    servings,
    image,
    readyInMinutes,
    spoonacularScore,
    nutrients,
  } = await getData(params?.id);

  const largImage = `${imgUrl}/recipes/${params.id}-636x393.jpg`;

  const recipeData: RecipeDetailsProps = {
    recipeImg: largImage || image,
    title,
    servings,
    readyInMinutes,
    spoonacularScore,
    nutrients,
  };

  return (
    <Banner background="grey.light">
      <Container>
        <RecipeDetails {...recipeData} />
      </Container>
    </Banner>
  );
}
