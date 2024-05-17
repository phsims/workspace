import { fireEvent, render } from '@testing-library/react';
import router from 'next/router';

import Header, { HeaderProps } from './Header';

const headerProps: HeaderProps = {
  title: 'My cool app',
  headerNav: [
    { href: '/link1', label: 'link 1' },
    { href: '/link2', label: 'link 2' },
  ],
};
// Mock the next router
jest.mock('next/router', () => ({
  push: jest.fn(),
}));
describe('Header', () => {
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

    headerProps.headerNav.forEach(({ label }) => {
      expect(getByText(label)).toBeInTheDocument();
    });
  });
  it('should navigate to the correct link when a navigation link is clicked', () => {
    const { getByLabelText, getByText } = render(<Header {...headerProps} />);
    const menuButton = getByLabelText('menu');
    fireEvent.click(menuButton);

    headerProps.headerNav.forEach(({ href, label }) => {
      const linkElement = getByText(label);
      fireEvent.click(linkElement);

      expect(router.push).toHaveBeenCalledWith(href);
    });
  });
});
