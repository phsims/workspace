import { render } from '@testing-library/react';

import HeaderBanner, { HeaderBannerProps } from './HeaderBanner';

const mockProps: HeaderBannerProps = {
  gridSplit: [9, 3],
  title: 'Find Your Favorite Recipes with Ease',
  intro:
    "Explore a world of culinary delights with our extensive collection of recipes. Whether you're looking for quick weeknight dinners, healthy meal options, or indulgent treats, our recipe cards offer something for everyone. Browse, save, and start cooking today!",
  image: {
    src: '/soup.svg',
    height: 526,
    width: 526,
    alt: 'Find Your Favorite Recipes',
  },
};
describe('HeaderBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderBanner {...mockProps} />);
    expect(baseElement).toBeTruthy();
  });
  it('should match snapshot', () => {
    const { asFragment } = render(<HeaderBanner {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  } );

  it('should render the correct title', () => {
    const { getByText } = render(<HeaderBanner {...mockProps} />);
    expect(getByText(mockProps.title)).toBeInTheDocument();
  });   
  it('should render the correct intro', () => {
    const { getByText } = render(<HeaderBanner {...mockProps} />);
    expect(getByText(mockProps.intro)).toBeInTheDocument();
  });
  it('should render the correct image', () => {
    const { getByAltText } = render(<HeaderBanner {...mockProps} />);
    expect(getByAltText(mockProps.image.alt)).toBeInTheDocument();
  });
      
});
