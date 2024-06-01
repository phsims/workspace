import { render } from '@testing-library/react';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';

import InfoIcon from './InfoIcon';

const mockProps = {
  icon: <RestaurantRoundedIcon fontSize="medium" color="primary" />,
  infoTitle: 'Serves:',
  text: '4',
};

describe('InfoIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InfoIcon {...mockProps} />);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = render(<InfoIcon {...mockProps} />);
    expect(baseElement).toMatchSnapshot();
  } );

  it('should render the icon', () => {
    const { getByTestId } = render(<InfoIcon {...mockProps} />);
    expect(getByTestId('RestaurantRoundedIcon')).toBeInTheDocument();
  });
});
