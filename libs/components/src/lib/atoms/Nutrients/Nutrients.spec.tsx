import { render } from '@testing-library/react';
import { mockNutrients } from '../../__mocks__/nutrientsData';
import Nutrients from './Nutrients';

describe('Nutrients', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Nutrients nutrients={mockNutrients} />);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = render(<Nutrients nutrients={mockNutrients} />);
    expect(baseElement).toMatchSnapshot();
  });
});
