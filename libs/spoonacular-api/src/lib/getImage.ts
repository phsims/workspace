import { getSpoonConfig } from './middleware/setup';

import { ImageSizeTypes } from './types';


export function getImage(id: number, size: keyof typeof ImageSizeTypes) {
  const { imgUrl } = getSpoonConfig();

  return `${imgUrl}/recipes/${id}-${ImageSizeTypes[size]}.jpg`;
}
