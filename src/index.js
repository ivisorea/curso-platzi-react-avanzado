import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

const client = new ApolloClient({
  uri: 'https://curso-platzi-react-avanzado-nine-khaki.vercel.app/graphql',
  cache: new InMemoryCache()
})

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
