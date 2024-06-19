import { render } from '@testing-library/react';

import SignOut from './SignOut';

describe('SignOut', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignOut />);
    expect(baseElement).toBeTruthy();
  });
});
