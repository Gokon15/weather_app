import '@testing-library/jest-dom';
import axios from 'axios'
import Card from './Card';
import { mockedWrapper } from '../../../../helpers/mockedProviderWrapper';
import { render, screen, waitFor, act } from '@testing-library/react';

jest.mock('axios');

describe('Card', () => {
  const props = {
    city: 'London',
    storage: {}
  };
  const res = {
    data: {
      'coord': {
        'lon':-0.1257,
        'lat':51.5085
      },
      'weather': [{
        'id': 804,
        'main': 'Clouds',
        'description': 'overcast clouds',
        'icon': '04n'
      }],
      'base': 'stations',
      'main': {
        'temp': -0.1,
        'feels_like': -2.65,
        'temp_min': -1.4,
        'temp_max': 1.11,
        'pressure': 1004,
        'humidity': 90
      },
      'visibility': 10000,
      'wind': {
        'speed': 2.06,
        'deg': 20
      },
      'clouds' :{
        'all': 100
      },
      'dt': 1670956504,
      'sys': {
        'type': 2,
        'id': 2075535,
        'country': 'GB',
        'sunrise': 1670918277,
        'sunset': 1670946688
      },
      'timezone': 0,
      'id': 2643743,
      'name': 'London',
      'cod': 200
    }
  }

  it('renders correctly without info data', async () => {
    axios.get.mockResolvedValue({});
    render(mockedWrapper(<Card {...props}/>));

    waitFor(() => {
      expect(screen.queryByText('Update')).not.toBeInTheDocument();
    });
  });

  it('renders correctly with info data', async () => {
    axios.get.mockResolvedValue(res);
    await act( async () => {
      render(mockedWrapper(<Card {...props}/>));
    });

    await waitFor(() => {
      expect(screen.getByText('Update')).toBeInTheDocument();
      expect(screen.getByText(res.data.name)).toBeInTheDocument();
      expect(screen.getByText(res.data.sys.country)).toBeInTheDocument();
      expect(screen.getByText(res.data.main.temp)).toBeInTheDocument();
      expect(screen.getByText(Math.round(res.data.main.humidity) + '%')).toBeInTheDocument();
    });
  });
});
