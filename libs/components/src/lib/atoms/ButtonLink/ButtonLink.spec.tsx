import { useRouter } from 'next-router-mock';
import mockRouter from 'next-router-mock';
import { fireEvent, render } from '@testing-library/react';
import ButtonLink, { ButtonLinkProps } from './ButtonLink';

const defaultProps: ButtonLinkProps = {
  text: 'Click Me',
  link: '/test-page',
  variant: 'contained',
  color: 'primary',
};

jest.mock('next/navigation', () => require('next-router-mock'));

describe('ButtonLink component', () => {
  beforeEach(() => {
    mockRouter.push('/');
  });

  it('should match snapshot', () => {
    const { baseElement } = render(
      <ButtonLink text="Test Button" link="/test" />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render with default props', () => {
    const { getByRole } = render(<ButtonLink {...defaultProps} />);

    const button = getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('MuiButton-containedPrimary');
  });

  it('should render with different props', () => {
    const { getByRole } = render(
      <ButtonLink {...defaultProps} variant="outlined" color="secondary" />
    );

    const button = getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('MuiButton-outlinedSecondary');
  });

  it('should navigate to the correct link on click', () => {
    const { getByRole } = render(<ButtonLink {...defaultProps} />);

    const button = getByRole('button', { name: /click me/i });
    fireEvent.click(button);

    expect(mockRouter).toMatchObject({
      asPath: '/test-page',
      pathname: '/test-page',
      query: {},
    });
  });

  it('should render with startIcon and endIcon', () => {
    const startIcon = <span data-testid="start-icon">StartIcon</span>;
    const endIcon = <span data-testid="end-icon">EndIcon</span>;

    const { getByTestId } = render(
      <ButtonLink {...defaultProps} startIcon={startIcon} endIcon={endIcon} />
    );

    const startIconElement = getByTestId('start-icon');
    const endIconElement = getByTestId('end-icon');
    expect(startIconElement).toBeInTheDocument();
    expect(endIconElement).toBeInTheDocument();
  });
});
