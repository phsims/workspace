import { render } from '@testing-library/react';

import  { RatingComponent } from './RatingComponent';

describe('RatingComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RatingComponent itemRating={3}  />);
    expect(baseElement).toBeTruthy();
  });
  // it('should match snapshot', () => {
  //   const { baseElement } = render(<RatingComponent itemRating={3}  />);
  //   expect(baseElement).toMatchSnapshot();
  // });
});
