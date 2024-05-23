import { render } from '@testing-library/react';

import Banner from './Banner';

describe('Banner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Banner ><p>stuff goes here</p></Banner>
    );
    expect(baseElement).toBeTruthy();
  });
});
