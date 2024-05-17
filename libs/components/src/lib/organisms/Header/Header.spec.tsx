import { fireEvent, render } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';


import Header, { HeaderProps } from './Header';

const headerProps: HeaderProps = {
  title: 'My cool app',
  headerNav: [
    { href: '/link1', label: 'link 1' },
    { href: '/link2', label: 'link 2' },
  ],
};
jest.mock('next/navigation', () => require('next-router-mock'));
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

  it('should render the najestgation links correctly in the drawer', () => {
    const { getByLabelText, getByText } = render(<Header {...headerProps} />);
    const menuButton = getByLabelText('menu');
    fireEvent.click(menuButton);

    headerProps.headerNav.forEach(({ label }) => {
      expect(getByText(label)).toBeInTheDocument();
    });
  });
  it('should najestgate to the correct link when a najestgation link is clicked', () => {
    const { getByLabelText, getByText } = render(<Header {...headerProps} />, { wrapper: MemoryRouterProvider });
    const menuButton = getByLabelText('menu');
    fireEvent.click(menuButton);

    headerProps.headerNav.forEach(({ href, label }) => {
      const linkElement = getByText(label);
      fireEvent.click(linkElement);

      expect(mockRouter.asPath).toEqual(href)
    });
  });
});
