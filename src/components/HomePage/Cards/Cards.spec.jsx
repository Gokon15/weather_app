import '@testing-library/jest-dom';
import Cards from './Cards';
import { render, screen } from '@testing-library/react';
import { mockedWrapper } from '../../../helpers/mockedProviderWrapper';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

jest.mock('./Card/Card', () => 'div');

describe('Cards', () => {
  it('renders correctly if storage is empty', () => {
    const storage = [];
    const store = mockStore({
      storage
    });
    render(mockedWrapper(<Cards/>, store));

    expect(screen.getByText('No choosen cities yet')).toBeInTheDocument();
  });

  it('renders correctly with storage', () => {
    const storage = [
      { city: 'London' },
      { coty: 'NY' }
    ];
    const store = mockStore({
      storage
    });
    render(mockedWrapper(<Cards/>, store));

    expect(screen.queryByText('No choosen cities yet')).not.toBeInTheDocument();
  });
});
