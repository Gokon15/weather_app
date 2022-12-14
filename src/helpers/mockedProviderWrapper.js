import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const defaultStore = mockStore({});
export const mockedWrapper = (component, store) => {
  return (
  <Provider store={store || defaultStore}>
    {component}
  </Provider>
  );
};
