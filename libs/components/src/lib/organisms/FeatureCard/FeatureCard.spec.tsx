import { render } from '@testing-library/react';


import FeatureCard, { FeatureCardProps } from './FeatureCard';

  const defaultProps: FeatureCardProps = {
    title: 'Sample Title',
    description: 'This is a sample description.',
    image: 'https://via.placeholder.com/150',
    link: '/sample-link',
  };

  jest.mock('next/navigation', () => require('next-router-mock'));

describe('FeatureCard', () => {

  it('should match snapshot successfully', () => {
    const { baseElement } = render(<FeatureCard {...defaultProps} />);
    expect(baseElement).toMatchSnapshot();
  });
  it('renders with default props', () => {
    const { getByRole, getByText } = render(<FeatureCard {...defaultProps} />);

    const image = getByRole('img', { name: /sample title/i });
    const title = getByText(/sample title/i);
    const description = getByText(/this is a sample description./i);
    const button = getByRole('button', { name: /learn more/i });

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
