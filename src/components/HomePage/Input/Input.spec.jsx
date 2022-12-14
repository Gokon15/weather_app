import '@testing-library/jest-dom';
import axios from 'axios';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { mockedWrapper } from '../../../helpers/mockedProviderWrapper';
import Input from './Input';
import configureMockStore from 'redux-mock-store';

jest.mock('axios');

const setData = jest.fn();
const mockStore = configureMockStore();
const store = mockStore({
  setData
});

describe('Input', () => {
  it('renders correctly', () => {
    render(mockedWrapper(<Input/>, store));

    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('setData called on submit click', async () => {
    const res = {
      data: {}
    };

    axios.get.mockResolvedValue(res);
    render(mockedWrapper(<Input/>, store));

    fireEvent.change(screen.getByLabelText('Search city...'), {target: {value: 'London'}});
    fireEvent.click(screen.getByText('Search'));

    waitFor(() => {
      expect(setData).toHaveBeenCalledWith(res);
    })
  });
});
