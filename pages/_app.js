import React from "react";
import { createStore } from "redux";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";
import Client from "shopify-buy";

const fetch = require("node-fetch");
const client = Client.buildClient({
  storefrontAccessToken: "26853603f3b67fead6e3bcf3ee602758",
  domain: "a-very-small-store.myshopify.com",
});
// store.dispatch({type: 'ADD_CLIENT', payload: client});

// client.product.fetchAll().then(console.log());

client.product.fetchAll().then((res) => {
  store.dispatch({ type: "ADD_PRODUCTS", payload: res });
});

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps: pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
