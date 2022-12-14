import '@testing-library/jest-dom';
import Buttons from './Buttons';
import { mockedWrapper } from '../../helpers/mockedProviderWrapper';
import { render, screen } from '@testing-library/react';

JSON.parse = jest.fn();

describe('Buttons', () => {
  const props = {
    info: {
      name: 'name'
    },
    setRefresh: jest.fn(),
    refresh: true
  };

  it('renders correctly', () => {
    render(mockedWrapper(<Buttons {...props}/>));

    expect(screen.getByText('Update')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });
});
