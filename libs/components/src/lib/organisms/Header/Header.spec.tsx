import { fireEvent, render } from '@testing-library/react';

import Header, { HeaderProps } from './Header';

describe('Header', () => {
  const headerProps: HeaderProps = {
    title: 'My cool app',
    headerNav: [
      { link: '/link1', text: 'link 1' },
      { link: '/link2', text: 'link 2' },
    ],
  };

  it('should match  snapshot', () => {
    const { baseElement } = render(<Header {...headerProps} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render the header title correctly', () => {
    const { getByText } = render(<Header {...headerProps} />);
    expect(getByText(headerProps.title)).toBeInTheDocument();
  });

  it('should open the drawer when the menu icon is clicked', () => {
    const { getByLabelText, getByRole } = render(<Header {...headerProps} />);
    const menuButton = getByLabelText('menu');
    fireEvent.click(menuButton);
    expect(getByRole('presentation')).toBeInTheDocument();
  });

  it('should render the navigation links correctly in the drawer', () => {
    const { getByLabelText, getByText } = render(<Header {...headerProps} />);
    const menuButton = getByLabelText('menu');
    fireEvent.click(menuButton);

    headerProps.headerNav.forEach(({ text }) => {
      expect(getByText(text)).toBeInTheDocument();
    });
  });
});
