import '@testing-library/jest-dom';
import Refresh from './Refresh';
import { mockedWrapper } from '../../../helpers/mockedProviderWrapper';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

describe('Refresh', () => {
  const props = {
    setRefresh: jest.fn(),
    refresh: true
  };

  it('renders correctly', () => {
    render(mockedWrapper(<Refresh {...props}/>));

    expect(screen.getByText('Update')).toBeInTheDocument();
  });

  it('called setRefresh on button click', async () => {
    render(mockedWrapper(<Refresh {...props}/>));

    fireEvent.click(screen.getByText('Update'));
    waitFor(() => {
      expect(props.setRefresh).toHaveBeenCalledWith(props.info.name);
    });
  });
});

