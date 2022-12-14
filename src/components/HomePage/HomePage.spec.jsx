import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { mockedWrapper } from '../../helpers/mockedProviderWrapper';
import HomePage from './HomePage';

jest.mock('./Cards/Cards', () => 'div');
jest.mock('./Input/Input', () => 'input');
jest.mock('./SearchedWeather/SearchedWeather', () => 'div');

describe('HomePage', () => {
  it('renders correctly', () => {
    const { container } = render(mockedWrapper(<HomePage/>));
  
    expect(container.getElementsByClassName(' homepage max-s  ').length).toBe(1);
  });
  
});
