import { render } from '@testing-library/react';

import TagComponent from './TagComponent';

describe('TagComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TagComponent />);
    expect(baseElement).toBeTruthy();
  });
});
