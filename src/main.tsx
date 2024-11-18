import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import './index.css';

const queryClient = new QueryClient();

const apolloClient = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta', // Endpoint GraphQL da PokeAPI
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apolloClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </ApolloProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
