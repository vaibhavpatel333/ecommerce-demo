import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import { Provider } from 'react-redux';
import store from '../slices/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Head>
          <title>locofy-react-nextjs-project</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  );
}

export default MyApp;
