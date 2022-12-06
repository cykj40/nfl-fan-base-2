import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavbarMenu from './components/NavbarMenu';
import Home from './pages/Home'
import Login from './pages/Login'
import GameData from './pages/GameData'
import Footer from './components/Footer'
import Blog from './pages/Blog'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <NavbarMenu />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/blog" element={<Blog/>} />
          <Route exact path="/gamedata" element={<GameData/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Routes>
      </>
    </Router>
    <Footer/>
    </ApolloProvider>
  );
}
