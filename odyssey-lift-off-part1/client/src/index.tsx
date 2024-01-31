import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";


const uri = 'http://localhost:4000'
const client  = new ApolloClient({
    uri,
    cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
