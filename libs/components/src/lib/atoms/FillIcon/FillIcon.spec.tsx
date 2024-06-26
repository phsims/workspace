import { render } from '@testing-library/react';

import FillIcon from './FillIcon';

describe('FillIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FillIcon fillPercentage={30} />);
    expect(baseElement).toBeTruthy();
  });
});
