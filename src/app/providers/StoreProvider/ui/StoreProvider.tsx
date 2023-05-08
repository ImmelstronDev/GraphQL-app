import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from '../store/StateSchema';
import { createReduxStore } from '../store/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
