import { render } from '@testing-library/react';

import TagComponent from './TagComponent';

describe('TagComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TagComponent title={'Welcome to TagComponent!'} tags={['tag1', 'tag2', 'tag3']}  />);
    expect(baseElement).toBeTruthy();
  });

 it('should match snapshot', () => {
    const { baseElement } = render(<TagComponent title={'Welcome to TagComponent!'} tags={['tag1', 'tag2', 'tag3']} />);
    expect(baseElement).toMatchSnapshot();
  })
});
