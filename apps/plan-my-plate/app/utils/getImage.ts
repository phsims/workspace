import { getSpoonConfig } from '../middleware/setup';

import { Sizes } from '../types';

export function getImage(id: number, size: keyof typeof Sizes) {
  const { imgUrl } = getSpoonConfig();

  return `${imgUrl}/recipes/${id}-${Sizes[size]}.jpg`;
}
