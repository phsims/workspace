
import { render } from '@testing-library/react';
import ButtonLink from './ButtonLink';

describe('ButtonLink component', () => {
  it('should match snapshot', () => {
    const { baseElement } = render(
      <ButtonLink text="Test Button" link="/test" />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('renders button with text and link', () => {
    const { getByRole } = render(
      <ButtonLink text="Test Button" link="/test" />
    );

    const linkElement = getByRole('link');
    expect(linkElement).toBeDefined();
    expect(linkElement).toHaveAttribute('href', '/test');
  });

  it('renders button with specified variant and color', () => {
    const { getByRole } = render(
      <ButtonLink
        text="Test Button"
        link="/test"
        variant="outlined"
        color="secondary"
      />
    );

    const buttonElement = getByRole('button', { name: 'Test Button' });
    expect(buttonElement).toHaveClass('MuiButton-outlined');
    expect(buttonElement).toHaveClass('MuiButton-colorSecondary');
  });

  it('renders button with default variant and color if not provided', () => {
    const { getByRole } = render(
      <ButtonLink text="Test Button" link="/test" />
    );

    const buttonElement = getByRole('button', { name: 'Test Button' });
    expect(buttonElement).toHaveClass('MuiButton-contained');
    expect(buttonElement).toHaveClass('MuiButton-colorPrimary');
  });
});
