import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from "./store"
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'



const client: any = new ApolloClient( {
  uri: 'http://localhost:5000/graphql', 
  cache: new InMemoryCache()
})

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
