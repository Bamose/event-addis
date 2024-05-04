import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { wrapper } from '@/store/Store';
import { MantineProvider } from '@mantine/core';

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
      <Provider store={store}>
        <MantineProvider  defaultColorScheme="light">
        <Component {...props.pageProps} />
        </MantineProvider>
      </Provider>

  );
};

export default App;
