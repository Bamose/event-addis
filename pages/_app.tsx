
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

import { Navbar } from '@/components/header/Navbar';
import './globals.css'
import { Provider } from 'react-redux';
import { Store, wrapper } from '@/store/Store';
import { useEffect } from 'react';


const App = ({Component, ...rest}:AppProps) => {

  const {store, props} = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default App;