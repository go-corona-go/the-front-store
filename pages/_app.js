import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import React, { useState, useEffect, useContext } from "react";
import "cross-fetch/polyfill";
import "./globalStyles.css";
import { getCartDetails } from "../utils/cart-utils";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://wfto-covid19-dev.herokuapp.com/v1/graphql",
  }),
});

export const CartContext = React.createContext();

// eslint-disable-next-line no-unused-vars
export default function MyApp({ Component, pageProps }) {
  const [cartLength, setLength] = useState();
  const refreshCart = () => {
    setLength(getCartDetails().length);
  };
  useEffect(() => {
    refreshCart();
  }, []);
  return (
    <CartContext.Provider
      value={{ refreshCart: refreshCart, cartLength: cartLength }}
    >
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </CartContext.Provider>
  );
}
