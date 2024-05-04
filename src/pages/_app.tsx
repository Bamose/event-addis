'use client'
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { wrapper } from '@/store/Store';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
      <Provider store={store}>
        <MantineProvider >
        <Component {...props.pageProps} />
        </MantineProvider>
      </Provider>

  );
};

export default App;
