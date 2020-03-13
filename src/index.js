import React from 'react'
import ReactDOM from 'react-dom'

// Apollo Client Imports
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'

import App from './App'

import { AuthProvider } from './store/auth'
import { TabProvider } from './store/tabs'

import './index.css'

const client = new ApolloClient({
   link: ApolloLink.from([
      new HttpLink({
         uri: process.env.REACT_APP_GRAPHQL_URI,
      }),
   ]),
   cache: new InMemoryCache(),
})

ReactDOM.render(
   <ApolloProvider client={client}>
      <AuthProvider>
         <TabProvider>
            <App />
         </TabProvider>
      </AuthProvider>
   </ApolloProvider>,
   document.getElementById('root')
)
