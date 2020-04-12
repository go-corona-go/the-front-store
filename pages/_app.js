import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import 'cross-fetch/polyfill';
import './globalStyles.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://wfto-covid19-dev.herokuapp.com/v1/graphql',
  }),
});
// eslint-disable-next-line no-unused-vars
export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
