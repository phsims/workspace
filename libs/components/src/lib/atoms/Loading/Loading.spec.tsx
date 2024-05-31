import { render } from '@testing-library/react';

import Loading from './Loading';

describe('Loading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Loading />);
    expect(baseElement).toBeTruthy();
  });
  it('should match snapshot', () => {
    const { baseElement } = render(<Loading />);
    expect(baseElement).toMatchSnapshot();
  });
});
