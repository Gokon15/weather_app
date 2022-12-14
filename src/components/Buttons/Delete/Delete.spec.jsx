import '@testing-library/jest-dom';
import Delete from './Delete';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { mockedWrapper } from '../../../helpers/mockedProviderWrapper';

JSON.parse = jest.fn();

describe('Delete', () => {
  const props = {
    info: {
      name: 'name'
    },
    setStorage: jest.fn(),
    removeCity: jest.fn(),
    id: 'id111'
  };

  it('renders correctly', async () => {
    render(mockedWrapper(<Delete {...props}/>));

    expect(screen.getByText('Delete')).toBeInTheDocument();
    waitFor(() => {
      expect(props.setStorage).toHaveBeenCalled();
      expect(JSON.parse).toHaveBeenCalled();
    });
  });

  it('called removeCity on button click', async () => {
    render(mockedWrapper(<Delete {...props}/>));

    fireEvent.click(screen.getByText('Delete'));
    waitFor(() => {
      expect(props.removeCity).toHaveBeenCalledWith(props.info.name);
    });
  });
});

